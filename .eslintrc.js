module.exports = {
  "extends": [
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
      "react"
  ],
  rules: {
    "arrow-parens": ['error', 'as-needed'],
    "react/prefer-es6-class": 0,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/heading-has-content": 2,
    "jsx-a11y/onclick-has-focus": 2,
    "jsx-a11y/tabindex-no-positive": 2,
    "jsx-a11y/label-has-for": 2,
    "import/no-named-as-default": 0,
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "commonjs": true,
    "node": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        config: 'webpack.config.js'
      },
    },
    "import/ignore": [
      "\.md$",
      "\.scss$",
      "node_modules",
    ],
  },
};
