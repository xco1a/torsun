import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/box", component: "box" },
    { path: "/car", component: "car" },
    { path: "/fire", component: "fire" },
    { path: "/about", component: "about" },
  ],
  theme: {
    "primary-color": "#026eb8",
  }
});
