# Deploy
1. `npm run build` - Builds the app inside a `/dist` folder.
2. `npm install serve` & `serve ./dist` - To start a static http server in the dist directory (any other static server will do as well).

# Testing / development
1. `npm run dev` - To run Vite dev server on port 5173 (by default)
2. Import `mockoon_env.json` environment file located in project's root folder inside of mockoon and run it. Make sure the API runs on port `3000`