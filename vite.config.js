import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
 server: {
  proxy: {
    "/api": {
      target: "https://realestate-task.onrender.com",
      changeOrigin: true,
      secure: false,
      configure: (proxy, options) => {
        proxy.on("proxyReq", (proxyReq, req, res) => {
          console.log(`[Proxy Request] ${req.method} ${req.url}`);
        });
      },
    },
  },
},

  plugins: [react()],
});
