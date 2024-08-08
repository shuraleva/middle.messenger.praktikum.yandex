import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export const lintConfig = tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      languageOptions: {
        ecmaVersion: 2021,
        globals: globals.browser
      },
      ignores: ["./dist", "**/eslint.config.js"],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "no-empty-pattern": "warn",
        "@typescript-eslint/no-unsafe-function-type": "warn",
      },
    }
  )
  ;

  export default lintConfig;

