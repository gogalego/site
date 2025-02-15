const { env } = require("process");

module.exports = {
  extends: ["plugin:prettier/recommended", "next/core-web-vitals"],
  plugins: ["prettier"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
};
