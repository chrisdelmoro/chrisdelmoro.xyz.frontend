import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: './src/pages/index.html',
        blog: './src/pages/blog.html',
        post: './src/pages/post.html',
        uses: './src/pages/uses.html',
        contact: './src/pages/contact.html'
      }
    }
  }
});
