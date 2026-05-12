# MňamPlán

**Demo:** [https://mnamplan.vercel.app](https://mnamplan.vercel.app)

MňamPlán je jednoduchá responzivní React aplikace pro správu receptů a generování jídelníčku.

Projekt vznikl jako **experiment s tvorbou aplikace za pomoci AI**. Cílem bylo ověřit, jak daleko se dá dostat při návrhu a tvorbě malé webové aplikace s pomocí AI. Aplikaci vytvořil **Tomáš Ulman**.

## GitHub description

```text
Experiment s tvorbou aplikace za pomoci AI: moderní správce receptů a generátor jídelníčku postavený na Reactu, Vite a Tailwind CSS.
```

## Stack

- React + Vite
- JavaScript
- Tailwind CSS
- lucide-react
- localStorage

## Funkce

- startovací recepty při prvním spuštění
- přidání vlastního receptu
- editace receptu
- smazání receptu
- vyhledávání podle názvu
- filtrování podle typu jídla: snídaně, oběd, večeře
- detail receptu s ingrediencemi, postupem, obrázkem a zdrojem
- generování jídelníčku na jeden den nebo celý týden
- stránkování receptů v přehledu
- plně responzivní layout
- vlastní SVG logo a favicon
- příprava na budoucí backend přes repository vrstvu

## Spuštění

```bash
npm install --no-audit --no-fund
npm run dev
```

Potom otevři adresu, kterou vypíše Vite, typicky:

```bash
http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Jak se v projektu vyznat

```text
src/
  App.jsx                         hlavní orchestrace aplikace, modály a handlery
  main.jsx                        vstupní bod Reactu
  styles.css                      Tailwind import + pár vlastních utility stylů

  layout/                         části hlavní stránky
    AppHeader.jsx
    AppFooter.jsx
    HeroSection.jsx
    StatCard.jsx
    Logo.jsx

  features/
    recipes/                      recepty, formulář, detail, seznam
      RecipeForm.jsx
      RecipeCard.jsx
      RecipeDetail.jsx
      RecipesSection.jsx
      useRecipes.js
      components/                 menší komponenty použité uvnitř receptů

    mealPlanner/                  jídelníček a jeho UI
      MealPlanView.jsx
      components/

  services/                       čistá aplikační logika mimo UI
    recipeRepository.js           jediný soubor, který teď řeší localStorage
    mealPlannerService.js         generování jídelníčku

  data/
    seedRecipes.js                startovací recepty

  ui/                             znovupoužitelné UI komponenty
  utils/                          malé helpery a konstanty
```

## Data a budoucí backend

Aplikace teď používá `localStorage`, ale UI není přímo napojené na prohlížečové úložiště. Přístup k datům řeší repository vrstva:

```text
src/services/recipeRepository.js
```

Do budoucna stačí nahradit implementaci metod v repository za volání API, například:

```js
const response = await fetch(`${import.meta.env.VITE_API_URL}/recipes`);
```

nebo za Supabase klienta. Komponenty a hook `useRecipes` mohou zůstat prakticky stejné.

Soubor `.env.example` je připravený pro budoucí API URL:

```text
VITE_API_URL=http://localhost:3000
```

## Reset dat

Aplikace ukládá recepty do `localStorage`. Pokud se během vývoje změní startovací recepty a v prohlížeči jsou pořád stará data, je potřeba lokální data obnovit.

V aplikaci je tlačítko pro obnovení startovacích receptů. To smaže aktuální recepty z `localStorage` a znovu nahraje seed data.

## Deploy

Projekt je připravený pro deploy jako statická Vite aplikace.

Doporučené nastavení pro Vercel:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Autor

Vytvořil **Tomáš Ulman** jako experiment s tvorbou webové aplikace za pomoci AI.
