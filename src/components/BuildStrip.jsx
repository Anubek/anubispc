import React, { useState } from 'react';
import {
  ChevronDown,
  CircuitBoard,
  Cpu,
  HardDrive,
  MemoryStick,
  Package,
  PlugZap,
  Snowflake,
  Zap,
} from 'lucide-react';
import { defaultVariantOrder, specFields, variantLabels } from '../builds.js';

const specIcons = {
  GPU: Zap,
  CPU: Cpu,
  Płyta: CircuitBoard,
  RAM: MemoryStick,
  Dysk: HardDrive,
  SSD: HardDrive,
  Obudowa: Package,
  Zasilacz: PlugZap,
  Chłodzenie: Snowflake,
};

const priceFormatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
  maximumFractionDigits: 0,
});

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="spec">
      <Icon size={16} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function BuildStrip({ build, isOpen, isPriority = false, onToggle }) {
  const variantKeys = build.variantOrder ?? defaultVariantOrder;
  const defaultVariantKey = variantKeys[0] ?? 'base';
  const buildClassName = `strip strip--${build.id} ${isOpen ? 'strip--open' : ''}`;
  const [variantKey, setVariantKey] = useState(defaultVariantKey);
  const safeVariantKey = build.variants[variantKey] ? variantKey : defaultVariantKey;
  const selectedVariant = build.variants[safeVariantKey] ?? build.variants[defaultVariantKey];
  const specs = selectedVariant.specs;
  const showVariantSwitch = variantKeys.length > 1;

  return (
    <article className={buildClassName} style={{ '--accent': build.accent }}>
      <button className="strip__summary" type="button" onClick={onToggle} aria-expanded={isOpen}>
        <span className="strip__image">
          <picture>
            <source media="(max-width: 680px)" srcSet={build.imageSmall} />
            <img
              src={build.image}
              alt={build.name}
              width="1200"
              height="900"
              loading={isPriority ? 'eager' : 'lazy'}
              fetchPriority={isPriority ? 'high' : 'auto'}
              decoding="async"
            />
          </picture>
          <span className="strip__tier">{build.tier}</span>
        </span>
        <span className="strip__content">
          <span className="strip__main">
            <strong>{build.name}</strong>
            <em>{build.line}</em>
            <small>{build.short}</small>
          </span>
          <span className="strip__quick">
            <b>{specs.gpu}</b>
            <b>{specs.cpu}</b>
            <b>{specs.ram}</b>
          </span>
        </span>
        <span className="strip__price">
          <small>{showVariantSwitch ? 'od' : 'cena'}</small>
          <strong>{priceFormatter.format(selectedVariant.price)}</strong>
        </span>
        <ChevronDown className="strip__chevron" size={22} />
      </button>

      <div className="strip__details">
        <div className="details__inner">
          {showVariantSwitch ? (
            <div className="variant-switch" aria-label="Wariant zestawu">
              {variantKeys.map((key) => (
                <button
                  className={safeVariantKey === key ? 'variant-switch__item variant-switch__item--active' : 'variant-switch__item'}
                  key={key}
                  type="button"
                  onClick={() => setVariantKey(key)}
                >
                  <span>{variantLabels[key] ?? key}</span>
                  <strong>{priceFormatter.format(build.variants[key].price)}</strong>
                </button>
              ))}
            </div>
          ) : null}

          <p className="variant-summary">{selectedVariant.summary}</p>

          <div className="details__grid">
            <section>
              <h3>Najważniejsze podzespoły</h3>
              <div className="spec-grid">
                {specFields.map(([label, key]) => (
                  <Spec key={key} icon={specIcons[label]} label={label} value={specs[key]} />
                ))}
              </div>
            </section>

            <section>
              <h3>Szacowana wydajność</h3>
              <p className="fps-note">
                Wartości orientacyjne. Gry AAA: wysokie ustawienia bez ray tracingu. Gry e-sportowe:
                ustawienia nastawione na płynność. Bez skalowania i generowania klatek, chyba że zaznaczono inaczej.
              </p>
              <div className="fps-list">
                {build.fps.map((item) => (
                  <p key={item.game}>
                    <span>{item.game}</span>
                    <strong>{item.value}</strong>
                  </p>
                ))}
              </div>
            </section>

            <section>
              <h3>Dlaczego ten wariant</h3>
              <ul className="notes">
                {selectedVariant.highlights.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <h3 className="notes__second-title">Dla kogo</h3>
              <ul className="notes">
                {build.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
