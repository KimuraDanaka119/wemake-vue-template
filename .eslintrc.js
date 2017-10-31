module.exports = {
  "extends": [
    "standard",
    "plugin:unicorn/recommended"
  ],
  "plugins": [
    "html",
    "flowtype-errors",
    "unicorn"
  ],
  "rules": {
    "import/prefer-default-export": "off",
    "object-curly-spacing": [2, "always"],
    "prefer-promise-reject-errors": 2,
    "arrow-parens": [2, "always"],

    // allow async-await
    "generator-star-spacing": 0,

    // raise flow errors
    "flowtype-errors/show-errors": 2,

    // leave files alone
    "unicorn/filename-case": 0
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  }
}
