module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "babel",
    "react",
  ],
  "rules": {
    "arrow-parens": "off",
    "no-plusplus": "off",
    "no-prototype-builtins": "off",
    "quotes": ["warn", "double"],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/require-extension": "off",
  },
  "settings": {
    "import/resolver": "webpack"
  },
  "env": {
    "mocha": true,
  },
  "globals": {
    "fetch": false,
    "window": false,
    "document": false,
  }
};
