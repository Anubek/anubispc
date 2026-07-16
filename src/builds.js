import raImage from './assets/build-ra.webp';
import raImageSmall from './assets/build-ra-mobile.webp';
import horusImage from './assets/build-horus.webp';
import horusImageSmall from './assets/build-horus-mobile.webp';
import horusRxImage from './assets/build-horus-rx.webp';
import horusRxImageSmall from './assets/build-horus-rx-mobile.webp';
import setImage from './assets/build-set.webp';
import setImageSmall from './assets/build-set-mobile.webp';
import setRxImage from './assets/build-set-rx.webp';
import setRxImageSmall from './assets/build-set-rx-mobile.webp';
import ultimateImage from './assets/build-ultimate.webp';
import ultimateImageSmall from './assets/build-ultimate-mobile.webp';

export const defaultVariantOrder = ['base'];

export const variantLabels = {
  base: 'Konfiguracja',
  pure: 'Pure Performance',
  gaming: 'Gaming',
};

export const builds = [
  {
    id: 'ra',
    name: 'RA',
    line: 'Budget',
    image: raImage,
    imageSmall: raImageSmall,
    tier: 'Budget',
    accent: '#facc15',
    short: 'Rozsądny komputer do 1080p bez dopłacania do zbędnych dodatków.',
    variantOrder: ['base'],
    variants: {
      base: {
        price: 5250,
        summary: 'Najniższa cena, przy której zestaw nadal ma sens.',
        specs: {
          gpu: 'RTX 5060',
          cpu: 'Ryzen 5 8400F',
          motherboard: 'B650',
          ram: '16 GB DDR5',
          storage: '512 GB NVMe',
          case: 'Deepcool CC560 V2',
          psu: '750 W, 80+ Bronze, ATX 3.1',
          cooling: 'powietrzne RGB',
        },
        highlights: [
          'dobra wydajność w 1080p',
          'markowy zasilacz i przewiewna obudowa',
          'możliwość późniejszej rozbudowy',
          'bez dopłacania do RGB i ozdobników',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 160-220 FPS' },
      { game: 'Popularne gry 1080p', value: 'około 90-120 FPS' },
      { game: 'Nowe gry AAA, 1080p', value: 'około 50-70 FPS' },
    ],
    notes: [
      'pierwszy komputer do grania',
      'gry e-sportowe i popularne tytuły AAA',
      'dla osoby, która chce wydać możliwie mało, ale nie kupić bubla',
    ],
  },
  {
    id: 'horus',
    name: 'HORUS',
    line: 'Gaming',
    image: horusImage,
    imageSmall: horusImageSmall,
    tier: 'Gaming',
    accent: '#fb7185',
    short: 'Mocny zestaw do 1080p z dopracowanym wyglądem i możliwością personalizacji.',
    variantOrder: ['base'],
    variants: {
      base: {
        price: 6700,
        summary: 'Wydajność nadal jest najważniejsza, ale komputer ma również dobrze wyglądać.',
        specs: {
          gpu: 'RTX 5060 Ti',
          cpu: 'Ryzen 5 7500F',
          motherboard: 'B650',
          ram: '32 GB DDR5',
          storage: '1 TB NVMe',
          case: 'Deepcool CC560 ARGB V2',
          psu: '750 W, 80+ Gold, ATX 3.1',
          cooling: 'powietrzne ARGB',
        },
        highlights: [
          'mocniejsza karta graficzna niż w RA',
          '32 GB pamięci RAM',
          'estetyczna obudowa i podświetlenie',
          'dobry wybór do szybkich monitorów 1080p',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 190-260 FPS' },
      { game: 'Nowe gry AAA, 1080p', value: 'około 70-90 FPS' },
      { game: 'Szybkie monitory 1080p', value: 'dobry wybór pod 144-240 Hz' },
    ],
    notes: [
      'gracze korzystający z monitorów 144-240 Hz',
      'osoby, którym zależy również na wyglądzie',
      'klienci planujący grać w 1080p na wysokich ustawieniach',
    ],
  },
  {
    id: 'horus-rx',
    name: 'HORUS RX',
    line: 'Gaming RX',
    image: horusRxImage,
    imageSmall: horusRxImageSmall,
    tier: 'Gaming RX',
    accent: '#ef4444',
    short: 'Gamingowy HORUS z kartą Radeon i mocnym zestawem do 1080p.',
    variantOrder: ['base'],
    variants: {
      base: {
        price: 6700,
        summary: 'Wariant z kartą AMD dla osób, które wolą Radeona w tej półce cenowej.',
        specs: {
          gpu: 'RX 9060 XT',
          cpu: 'Ryzen 5 7500F',
          motherboard: 'B650',
          ram: '32 GB DDR5',
          storage: '1 TB NVMe',
          case: 'Deepcool CC560 ARGB V2',
          psu: '750 W, 80+ Gold, ATX 3.1',
          cooling: 'powietrzne ARGB',
        },
        highlights: [
          'karta graficzna Radeon',
          '32 GB pamięci RAM',
          'estetyczna obudowa i podświetlenie',
          'dobry wybór do grania w 1080p',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 190-260 FPS' },
      { game: 'Nowe gry AAA, 1080p', value: 'około 80-100 FPS' },
      { game: 'Ray tracing i skalowanie', value: 'NVIDIA ma przewagę w DLSS i RT' },
    ],
    notes: [
      'gracze wybierający GPU AMD',
      'osoby grające głównie w 1080p',
      'klienci, którzy nie potrzebują funkcji typowych dla kart NVIDIA',
    ],
  },
  {
    id: 'set',
    name: 'SET',
    line: 'Performance',
    image: setImage,
    imageSmall: setImageSmall,
    tier: 'Performance',
    accent: '#f97316',
    short: 'Wydajność klasy 1440p. Do wyboru wersja Pure Performance lub Gaming.',
    variantOrder: ['pure', 'gaming'],
    variants: {
      pure: {
        price: 9100,
        summary: 'Prosta forma, mocne podzespoły i możliwie najlepszy stosunek ceny do FPS.',
        specs: {
          gpu: 'RTX 5070',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B650E',
          ram: '32 GB DDR5',
          storage: '1 TB NVMe',
          case: 'Phanteks XT Pro Ultra ARGB',
          psu: '850 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360',
        },
        highlights: [
          'maksymalna wydajność w podanym budżecie',
          'procesor X3D',
          'markowe części bez kosztownych ozdobników',
          'łatwa wymiana podzespołów, gdy ceny na rynku się zmieniają',
        ],
      },
      gaming: {
        price: 9950,
        summary: 'Ta sama klasa wydajności, ale z lepszą obudową, podświetleniem i bardziej dopracowanym wykończeniem.',
        specs: {
          gpu: 'RTX 5070',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B650E',
          ram: '32 GB DDR5 RGB',
          storage: '1 TB NVMe',
          case: 'Deepcool CH780',
          psu: '850 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360 RGB',
        },
        highlights: [
          'bardziej efektowna obudowa',
          'podświetlane podzespoły',
          'lepsza prezentacja zestawu na biurku',
          'wydajność pozostaje na poziomie linii SET',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 260-360 FPS' },
      { game: 'Nowe gry AAA, 1440p', value: 'około 70-90 FPS' },
      { game: 'Gry z ray tracingiem', value: 'wynik zależny od DLSS i Frame Generation' },
    ],
    notes: [
      'osoby grające głównie w 1440p',
      'klienci, którzy nie chcą płacić za wygląd',
      'osoby, które wolą mocniejszy podzespół zamiast droższego RGB',
    ],
  },
  {
    id: 'set-rx',
    name: 'SET RX',
    line: 'Performance RX',
    image: setRxImage,
    imageSmall: setRxImageSmall,
    tier: 'Performance RX',
    accent: '#ef4444',
    short: 'Wariant SET z kartą Radeon. Mocna rasteryzacja i więcej pamięci VRAM.',
    variantOrder: ['pure', 'gaming'],
    variants: {
      pure: {
        price: 9300,
        summary: 'Wariant z kartą Radeon. Więcej surowej wydajności i pamięci VRAM kosztem części funkcji NVIDIA.',
        specs: {
          gpu: 'RX 9070 XT',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B650E',
          ram: '32 GB DDR5',
          storage: '1 TB NVMe',
          case: 'Phanteks XT Pro Ultra ARGB',
          psu: '850 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360',
        },
        highlights: [
          'mocna rasteryzacja',
          'więcej VRAM',
          'dobry wybór do grania bez nacisku na ray tracing',
          'NVIDIA zostaje lepsza dla DLSS, CUDA i części zastosowań profesjonalnych',
        ],
      },
      gaming: {
        price: 9950,
        summary: 'Wersja z Radeonem, lepszą obudową, RGB i bardziej dopracowanym wyglądem.',
        specs: {
          gpu: 'RX 9070 XT',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B650E',
          ram: '32 GB DDR5 RGB',
          storage: '1 TB NVMe',
          case: 'Deepcool CH780',
          psu: '850 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360 RGB',
        },
        highlights: [
          'mocna rasteryzacja',
          'gamingowy wygląd',
          'podświetlane podzespoły',
          'dobry wybór do 1440p bez nacisku na ray tracing',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 270-370 FPS' },
      { game: 'Nowe gry AAA, 1440p', value: 'około 85-105 FPS' },
      { game: 'Ray tracing i skalowanie', value: 'NVIDIA ma przewagę w DLSS i RT' },
    ],
    notes: [
      'osoby wybierające kartę AMD',
      'granie w 1440p bez nacisku na ray tracing',
      'klienci, którzy chcą mocnej rasteryzacji i większej ilości VRAM',
    ],
  },
  {
    id: 'anubis',
    name: 'ANUBIS',
    line: 'Ultimate',
    image: ultimateImage,
    imageSmall: ultimateImageSmall,
    tier: 'Ultimate',
    accent: '#c084fc',
    short: 'Flagowy zestaw Anubis PC. Maksymalna wydajność, dwa sposoby wykonania.',
    variantOrder: ['pure', 'gaming'],
    variants: {
      pure: {
        price: 13600,
        summary: 'RTX 5080 i Ryzen 7 9800X3D bez kosztownych dodatków, które nie wpływają na liczbę klatek.',
        specs: {
          gpu: 'RTX 5080',
          cpu: 'Ryzen 7 9800X3D',
          motherboard: 'B650E',
          ram: '32 GB DDR5',
          storage: '2 TB NVMe',
          case: 'Phanteks XT Pro Ultra ARGB',
          psu: '1000 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360',
        },
        highlights: [
          'najwyższa wydajność w grach',
          'mocny zasilacz i wydajne chłodzenie',
          'duża, przewiewna obudowa',
          'brak dopłat do ekranów, drogich wentylatorów i ozdobnych wersji części',
        ],
      },
      gaming: {
        price: 17000,
        summary: 'Flagowa wydajność połączona z obudową typu showcase, podświetleniem i częściami wybranymi również pod wygląd.',
        specs: {
          gpu: 'RTX 5080',
          cpu: 'Ryzen 7 9800X3D',
          motherboard: 'X870E',
          ram: '32 GB DDR5 RGB',
          storage: '2 TB NVMe',
          case: 'Lian Li O11 Dynamic EVO RGB',
          psu: '1000 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360 z ekranem',
        },
        highlights: [
          'karta graficzna z wyższej serii wykonania',
          'obudowa klasy premium',
          'chłodzenie z ekranem',
          'spójne podświetlenie',
          'dopracowany wygląd całego wnętrza',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 350-500 FPS' },
      { game: 'Nowe gry AAA, 4K', value: 'około 60-80 FPS' },
      { game: 'Gry z ray tracingiem', value: 'wynik zależny od DLSS i Frame Generation' },
    ],
    notes: [
      'gracz 1440p z monitorem o wysokim odświeżaniu',
      'granie w 4K',
      'osoba, która chce RTX 5080 bez budowania komputera pokazowego',
    ],
  },
];

export const specFields = [
  ['GPU', 'gpu'],
  ['CPU', 'cpu'],
  ['Płyta', 'motherboard'],
  ['RAM', 'ram'],
  ['SSD', 'storage'],
  ['Obudowa', 'case'],
  ['Zasilacz', 'psu'],
  ['Chłodzenie', 'cooling'],
];
