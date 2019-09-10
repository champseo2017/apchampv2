# next-pwa

This is a Progressive Web App built with React. Main features include -

- Server-side rendering and code splitting (using Next)

- Better Server-rendering performance due to component-caching (using lru-cache)

- Offline-support with Service Worker using precaching as well as runtime caching (thanks to Workbox)

- Purging unused CSS (thanks to PurifyCSS and we also setup autoprefixer)

- Route prefetching (both imperative and declarative)

- Web Manifest Generation with webpack-pwa-manifest

- Loading indicator while we load the route-based chunks

- Also used Spectre.css for styling (don't worry about size unused CSS selectors are trimmed away remember)

- Used react-progressive-image for better image loading setup



## Want to play around with it

Fork it, then clone it and

```bash
npm install
```

### For development

```bash
npm run dev
```

### For production

```bash
npm run build
npm start
```
