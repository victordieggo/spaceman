export default {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    // Formatting
    'indentation': 2,
    'string-quotes': 'single',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'always',

    // Selectors
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-max-id': 1,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9-]*$',
    'max-nesting-depth': 3,

    // Properties and Values
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'declaration-no-important': true,

    // Duplicates and Prefixes
    'no-duplicate-selectors': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // URL Handling
    'function-url-quotes': 'always',

    // SCSS-specific rules
    'scss/at-rule-no-unknown': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
