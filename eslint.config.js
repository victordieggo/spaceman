import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "assets/src/js/libs/*.js",
        "assets/src/js/polyfill/*.js",
        "assets/src/js/vendor/*.js",
    ],
}, ...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 2015,
        sourceType: "module",
    },

    rules: {
        indent: ["error", 2],
        semi: ["error", "always"],
        quotes: ["error", "single"],
        strict: ["error", "function"],
    },
}];
