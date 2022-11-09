module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "implicit-arrow-linebreak": "off",
    "import/extensions": "off",
    "import/no-anonymous-default-export": "off",
    "import/prefer-default-export": "off",
    "react/jsx-key": "off",
  },
};
