import { defineConfig, createLogger, Plugin } from "vite";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
// import { LogOptions } from "vite";
// import react from "@vitejs/plugin-react";
//logger
const customLogger = createLogger();
const RequestLogger: Plugin = {
  name: "custom-request-logger",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.startsWith("/api")) {
        const startTime = Date.now();
        res.on("finish", () => {
          const duration = Date.now() - startTime;
          customLogger.info(
            `[${req.method}] ${req.url} - ${res.statusCode} (${duration}ms)`,
          );
        });
      }
      next();
    });
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [RequestLogger],
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

// const logger = createLogger();
//logger
// const customLogger = {
//   ...logger,
//   info: (msg: string, options?: LogOptions) =>
//     logger.info("Hi! I was inserted.\n" + msg, options),
// };
// const customServer = {
//   port: 5173,
// };

// export default defineConfig({
//   plugins: [
//     (() => ({
//       name: "logger-changer",
//       config: () => ({
//         server: customServer, // <-- works
//         customLogger, // <-- doesn't work
//       }),
//     }))(),
//   ],
//   server: {
//     proxy: {
//       "/api": {
//         target: process.env.VITE_API_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });
