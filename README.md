# PC Builds Onepage

Ciemna, minimalistyczna onepage z paskami komputerów. Każdy pasek rozwija się po kliknięciu i pokazuje ogólne informacje: GPU, CPU, RAM, dysk, chłodzenie, orientacyjne FPS, krótkie notatki i wariant zestawu.

## Start

```bash
npm install
npm run dev
```

Strona dziala pod adresem pokazanym przez Vite, np. `http://127.0.0.1:5173/`.

## Edycja komputerow

Wszystkie zestawy są w `src/builds.js`.

Nie ma tu cen pojedynczych części ani dokładnych marek większości podzespołów. Klient widzi uproszczone opisy typu `RTX 5070`, `Ryzen 7 7800X3D`, `32 GB DDR5` oraz cenę całego zestawu.

Najwazniejsze pola w zestawie:

- `id` - unikalna nazwa techniczna, bez spacji
- `name` - nazwa widoczna na pasku
- `image` - import zdjecia z `src/assets`
- `tier` - maly podpis typu `komp 01`
- `accent` - kolor obramowania i detali
- `short` - krotki opis na pasku
- `variants` - warianty `pure`, `gaming`, `premium`
- `variants.*.price` - cena całego wariantu
- `variants.*.specs` - GPU, CPU, RAM, dysk i chłodzenie dla wariantu
- `variants.*.summary` - opis wariantu po rozwinięciu
- `variants.*.highlights` - krótkie punkty o wariancie
- `fps` - orientacyjne wyniki w grach
- `notes` - dodatkowe informacje po rozwinieciu

Żeby dodać nowy zestaw, skopiuj jeden obiekt w tablicy `builds`, zmień `id`, `name`, `image`, `accent` i dane w `variants/fps/notes`. Komponent listy sam wyrenderuje kolejny pasek.

Obrazki sa w `src/assets` jako:

- `pc-01-start.jpg`
- `pc-02-core.jpg`
- `pc-03-pro.jpg`
- `pc-04-ultra.jpg`

Mail kontaktowy jest ustawiony w `src/App.jsx` na `kontakt@anubispc.pl`.
