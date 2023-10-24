module.exports = {
  root: true,
  extends: "@react-native",
  plugins: ["prettier"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "comma-dangle": ["error", "only-multiline"],
    "prettier/prettier": "error",
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "react-native/no-inline-styles": 0,
    "react/no-unstable-nested-components": "off"
  }
}
