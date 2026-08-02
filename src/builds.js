import raImage from './assets/build-ra.webp';
import raImageSmall from './assets/build-ra-mobile.webp';
import horusImage from './assets/build-horus.webp';
import horusImageSmall from './assets/build-horus-mobile.webp';
import horusRxImage from './assets/build-horus-rx.webp';
import horusRxImageSmall from './assets/build-horus-rx-mobile.webp';
import setImage from './assets/build-set.webp';
import setImageSmall from './assets/build-set-mobile.webp';
import setGamingImage from './assets/build-set-gaming.webp';
import setGamingImageSmall from './assets/build-set-gaming-mobile.webp';
import setRxImage from './assets/build-set-rx.webp';
import setRxImageSmall from './assets/build-set-rx-mobile.webp';
import setRxGamingImage from './assets/build-set-rx-gaming.webp';
import setRxGamingImageSmall from './assets/build-set-rx-gaming-mobile.webp';
import anubisPureImage from './assets/build-anubis-pure.webp';
import anubisPureImageSmall from './assets/build-anubis-pure-mobile.webp';
import anubisGamingImage from './assets/build-anubis-gaming.webp';
import anubisGamingImageSmall from './assets/build-anubis-gaming-mobile.webp';

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
        summary: 'Rozsądnie dobrane podzespoły z naciskiem na opłacalność i możliwość późniejszej rozbudowy.',
        specs: {
          gpu: 'RTX 5060',
          cpu: 'Ryzen 5 8400F',
          motherboard: 'B650',
          ram: '16 GB DDR5',
          storage: '1 TB NVMe',
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
      'dla osób szukających opłacalnego wejścia w platformę AM5',
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
    short: 'Mocny zestaw do 1080p z 32 GB RAM i większym zapasem wydajności.',
    variantOrder: ['base'],
    variants: {
      base: {
        price: 6650,
        summary: 'Większa wydajność i lepiej dobrane podzespoły dla osób, które oczekują czegoś więcej niż podstawowa konfiguracja.',
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
          'lepsze komponenty i większy zapas wydajności na kolejne lata',
          'dobry wybór do monitorów 1080p o wysokim odświeżaniu',
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
      'gracze oczekujący wyższej wydajności w nowych grach',
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
        price: 6650,
        summary: 'Większa wydajność i lepiej dobrane podzespoły w wariancie z kartą Radeon.',
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
          'lepsze komponenty i większy zapas wydajności na kolejne lata',
          'dobry wybór do monitorów 1080p o wysokim odświeżaniu',
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
    name: 'SETH',
    line: 'Performance',
    image: setImage,
    imageSmall: setImageSmall,
    tier: 'Performance',
    accent: '#f97316',
    short: 'Wydajność klasy 1440p. Do wyboru wersja Pure Performance lub Gaming.',
    variantOrder: ['pure', 'gaming'],
    variants: {
      pure: {
        price: 9350,
        summary: 'Prosta forma, mocne podzespoły i możliwie najlepszy stosunek ceny do FPS.',
        specs: {
          gpu: 'RTX 5070',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B850',
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
        audience: [
          'osoby grające głównie w 1440p',
          'klienci, którzy chcą przeznaczyć budżet przede wszystkim na wydajność',
          'osoby wybierające procesor X3D i mocną kartę bez dopłat do wyposażenia premium',
        ],
      },
      gaming: {
        price: 10300,
        image: setGamingImage,
        imageSmall: setGamingImageSmall,
        summary: 'Wysoka wydajność w 1440p uzupełniona o dopracowaną obudowę, podświetlenie i wyposażenie klasy premium.',
        specs: {
          gpu: 'RTX 5070',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B850',
          ram: '32 GB DDR5 RGB',
          storage: '1 TB NVMe',
          case: 'Deepcool CH690 Digital czarna',
          psu: '850 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360 RGB',
        },
        highlights: [
          'obudowa Deepcool CH690 Digital',
          'podświetlane podzespoły',
          'wyposażenie i wykończenie klasy premium',
          'wydajność pozostaje na poziomie linii SETH',
        ],
        audience: [
          'osoby, które oprócz wysokiej wydajności oczekują również dopracowanego wyglądu komputera',
          'gracze 1440p, którzy chcą połączyć wydajność z estetyką klasy premium',
          'klienci wybierający efektowną obudowę i podświetlane podzespoły',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 260-360 FPS' },
      { game: 'Nowe gry AAA, 1440p', value: 'około 70-90 FPS' },
      { game: 'Gry z ray tracingiem', value: 'wynik zależny od DLSS i Frame Generation' },
    ],
  },
  {
    id: 'set-rx',
    name: 'SETH RX',
    line: 'Performance RX',
    image: setRxImage,
    imageSmall: setRxImageSmall,
    tier: 'Performance RX',
    accent: '#ef4444',
    short: 'Wariant SETH z kartą Radeon. Mocna rasteryzacja i więcej pamięci VRAM.',
    variantOrder: ['pure', 'gaming'],
    variants: {
      pure: {
        price: 9500,
        summary: 'Wariant z kartą Radeon. Więcej surowej wydajności i pamięci VRAM kosztem części funkcji NVIDIA.',
        specs: {
          gpu: 'RX 9070 XT',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B850',
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
          'NVIDIA nadal ma przewagę przy DLSS, CUDA i w części programów profesjonalnych',
        ],
        audience: [
          'osoby wybierające kartę AMD i grające głównie w 1440p',
          'klienci, którzy chcą przeznaczyć budżet przede wszystkim na wydajność',
          'gracze oczekujący mocnej rasteryzacji i większej ilości pamięci VRAM',
        ],
      },
      gaming: {
        price: 10100,
        image: setRxGamingImage,
        imageSmall: setRxGamingImageSmall,
        summary: 'Mocna rasteryzacja i większa ilość pamięci VRAM połączone z dopracowaną obudową i estetyką klasy premium.',
        specs: {
          gpu: 'RX 9070 XT',
          cpu: 'Ryzen 7 7800X3D',
          motherboard: 'B850',
          ram: '32 GB DDR5 RGB',
          storage: '1 TB NVMe',
          case: 'Deepcool CH690 Digital czarna',
          psu: '850 W, 80+ Gold, ATX 3.1',
          cooling: 'AIO 360 RGB',
        },
        highlights: [
          'mocna rasteryzacja',
          'obudowa Deepcool CH690 Digital',
          'podświetlane podzespoły',
          'wyposażenie i wykończenie klasy premium',
        ],
        audience: [
          'osoby, które oprócz wysokiej wydajności oczekują również dopracowanego wyglądu komputera',
          'gracze 1440p wybierający kartę AMD i wyposażenie klasy premium',
          'klienci, którzy chcą połączyć mocną rasteryzację z efektowną obudową i podświetleniem',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 270-370 FPS' },
      { game: 'Nowe gry AAA, 1440p', value: 'około 85-105 FPS' },
      { game: 'Ray tracing i skalowanie', value: 'NVIDIA ma przewagę w DLSS i RT' },
    ],
  },
  {
    id: 'anubis',
    name: 'ANUBIS',
    line: 'Ultimate',
    image: anubisPureImage,
    imageSmall: anubisPureImageSmall,
    tier: 'Ultimate',
    accent: '#c084fc',
    short: 'Flagowy zestaw Anubis PC. Maksymalna wydajność, dwa sposoby wykonania.',
    variantOrder: ['pure', 'gaming'],
    variants: {
      pure: {
        price: 14000,
        summary: 'RTX 5080 i Ryzen 7 9800X3D bez kosztownych dodatków, które nie wpływają na liczbę klatek.',
        specs: {
          gpu: 'RTX 5080',
          cpu: 'Ryzen 7 9800X3D',
          motherboard: 'B850',
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
        audience: [
          'gracze oczekujący najwyższej wydajności w 1440p i 4K',
          'osoby, które chcą RTX 5080 bez dopłat do elementów wizualnych',
          'klienci stawiający na wydajność, chłodzenie i możliwość dalszej rozbudowy',
        ],
      },
      gaming: {
        price: 16500,
        image: anubisGamingImage,
        imageSmall: anubisGamingImageSmall,
        summary: 'Flagowa wydajność połączona z obudową typu showcase, podświetleniem i częściami wybranymi również pod wygląd.',
        specs: {
          gpu: 'RTX 5080',
          cpu: 'Ryzen 7 9800X3D',
          motherboard: 'X870E',
          ram: '32 GB DDR5 RGB',
          storage: '2 TB NVMe',
          case: 'HYTE Y70',
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
        audience: [
          'osoby, które oczekują najwyższej wydajności i wyjątkowego wyglądu',
          'gracze szukający najbardziej dopracowanego komputera w ofercie Anubis PC',
          'klienci, którzy chcą flagowego zestawu bez kompromisów w wydajności i estetyce',
        ],
      },
    },
    fps: [
      { game: 'Gry e-sportowe', value: 'około 350-500 FPS' },
      { game: 'Nowe gry AAA, 4K', value: 'około 60-80 FPS' },
      { game: 'Gry z ray tracingiem', value: 'wynik zależny od DLSS i Frame Generation' },
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
