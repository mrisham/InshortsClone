import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from other devices
    port: 5173, // Default Vite port (can change if needed)
    strictPort: true, // Ensures Vite doesn't switch ports automatically
  },
});
