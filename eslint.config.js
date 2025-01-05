export default [
  {
    extends: [
      "standard",
      "plugin:react/recommended",
      "plugin:tailwindcss/recommended",
      "prettier",
    ],
    rules: {
      "max-len": [
        "error",
        { code: 250 },
      ],
      "no-multiple-empty-lines": [
        "error",
        { max: 1, maxEOF: 1 },
      ],
      "object-curly-newline": "off",
      "react/jsx-one-expression-per-line":
        "off", // Prevents forcing one-line JSX
      "react/jsx-indent": ["error", 2], // Enforces indentation for JSX
      "react/jsx-indent-props": [
        "error",
        2,
      ], // Enforces indentation for props
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration:
            "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],
    },
  },
];
