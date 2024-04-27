import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/car", component: "car" },
    { path: "/fire", component: "fire" },
  ],
  theme: {
    "primary-color": "#026eb8",
  }
});
