import {defineConfig} from "vite";
import path from "path";
const root = path.resolve(__dirname, "./src");
const outDir = path.resolve(__dirname, "dist");

// https://vitejs.dev/config/
module.exports = defineConfig({
	root,
	alias: {
		"~": path.join(__dirname, "src"),
	},
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				sample: path.resolve(root, "sample/index.html"),
			},
		},
	},
});
