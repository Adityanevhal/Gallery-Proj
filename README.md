# Gallery-Proj

## 📌 Project Overview

A small React gallery app built with Vite that consumes the Picsum Photos API to display a paginated grid of images with author names. The main goal is to practice fetching external API data, working with component state, and handling UI updates with hooks.

## 🧩 Tech stack

- React + JavaScript
- Vite (build/dev environment)
- Axios (HTTP client)
- Tailwind-style class names (utility styles in JSX)

## 🚀 Features

- Fetch images from `https://picsum.photos/v2/list?page=<page>&limit=20`
- Display image cards with author name
- Loading placeholder while data loads
- Prev/Next pagination controls
- Links open source image page in new tab

## 🛠️ Components

- `src/App.jsx`
  - Manages app state: `userData` and `index`
  - `useEffect` triggers fetch when `index` changes
  - Renders cards and pagination
- `src/components/Card.jsx`
  - Card UI per image
  - Uses `props.elem` for `url`, `download_url`, `author`
- `src/components/Buttons.jsx`
  - Page navigation buttons (Prev/Next)

## 🧪 Learning outcomes

- `useState` for local state management
- `useEffect` for side effects (data fetch on dependency change)
- `axios.get()` with async/await
- Template literal string interpolation: `` `https://picsum.photos/v2/list?page=${index}&limit=20` ``
- Conditional render for loading vs content
- Mapping API results to JSX elements
- Container overflow management (`overflow-x-hidden`, `overflow-y-auto`)

## 🔧 Run the project

```bash
cd Gallery-Proj
npm install
npm run dev
```

Open browser at `http://localhost:5173` (or the address shown in terminal).

## 🌍 API used

- Picsum Photos API: `https://picsum.photos/v2/list`
- Params:
  - `page`: current page index
  - `limit`: number of images per page

## 📝 Notes

- Ensure `index` state is in sync before using in URL.
- Avoid automatic semicolon insertion bug with `return` in multi-line JSX.
- Add `rel="noopener noreferrer"` on external links for security.
