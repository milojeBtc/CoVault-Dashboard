import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 3400,
      host: '0.0.0.0'
    },
    resolve: {
      alias: {
        "@assets": "/src/assets",
        "@features": "/src/features",
        "@hooks": "/src/hooks",
        "@pages": "/src/pages",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
    test: {
      environment: "jsdom",
      setupFiles: "./src/setup-tests.ts",
      exculde: ["node_modules", "cypress", "dist"],
    },
    // base: "/PI-Co/",
  };
});
