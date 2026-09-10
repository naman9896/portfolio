/// <reference types="vite-react-ssg" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Migrated from CRA/CRACO. `@` -> src alias preserved from craco.config.js.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
  // These deps ship legacy CJS with directory-style "main" fields (e.g.
  // react-scroll -> "modules", react-icons -> "lib") that Node's native ESM
  // resolver rejects during SSG. Bundle just those into the SSR build so React
  // itself stays a single external instance.
  ssr: {
    noExternal: [
      "react-scroll",
      "react-icons",
      "react-text-loop",
      "react-motion",
      "react-animated-cursor",
      "react-icon-cloud",
      "react-spinners",
    ],
  },
  ssgOptions: {
    entry: "src/main.jsx",
    // Single-page site: render the one route to static HTML.
    script: "async",
  },
});
