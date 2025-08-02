import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        todo: path.resolve(__dirname, "projects/todo-app/index.html"),
        formValidation: path.resolve(
          __dirname,
          "projects/form-validation/index.html",
        ),
      },
    },
  },
  server: {
    open: "/index.html",
    host: true,
  },
});
