import "./index.css";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import App from "./App";

// Single-page SSG entry (replaces src/index.js).
// vite-react-ssg prerenders <App /> to static HTML at build time,
// then hydrates it in the browser.
export const createRoot = ViteReactSSG(<App />);
