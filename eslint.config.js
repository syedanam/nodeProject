module.exports = [
  {
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        test: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error"
    }
  }
];