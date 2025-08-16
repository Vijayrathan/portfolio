// vite.config.ts
import { defineConfig } from "file:///Users/vijay/Documents/portfolio/portfolio-node/node_modules/.pnpm/vite@5.4.19_@types+node@22.17.1_sass@1.90.0/node_modules/vite/dist/node/index.js";
import react from "file:///Users/vijay/Documents/portfolio/portfolio-node/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.19_@types+node@22.17.1_sass@1.90.0_/node_modules/@vitejs/plugin-react/dist/index.js";
import ssr from "file:///Users/vijay/Documents/portfolio/portfolio-node/node_modules/.pnpm/vite-plugin-ssr@0.4.142_react-streaming@0.3.50_react-dom@18.3.1_react@18.3.1__react@18._364c4397833ae24f231c5a1036587f79/node_modules/vite-plugin-ssr/dist/esm/node/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [react(), ssr({ prerender: false })],
  server: {
    port: 5173
  },
  build: {
    sourcemap: true
  },
  ssr: {
    external: ["react-helmet-async"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmlqYXkvRG9jdW1lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8tbm9kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ZpamF5L0RvY3VtZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLW5vZGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ZpamF5L0RvY3VtZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLW5vZGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHNzciBmcm9tICd2aXRlLXBsdWdpbi1zc3IvcGx1Z2luJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSwgc3NyKHsgcHJlcmVuZGVyOiBmYWxzZSB9KV0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzNcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWVcbiAgfSxcbiAgc3NyOiB7XG4gICAgZXh0ZXJuYWw6IFsncmVhY3QtaGVsbWV0LWFzeW5jJ11cbiAgfVxufSlcblxuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStULFNBQVMsb0JBQW9CO0FBQzVWLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFFaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsV0FBVyxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQzVDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsVUFBVSxDQUFDLG9CQUFvQjtBQUFBLEVBQ2pDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
