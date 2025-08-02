const config = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'color-hex-length': 'long',
    'color-no-invalid-hex': true,

    'font-family-name-quotes': 'always-unless-keyword',

    'custom-property-empty-line-before': [
      'never',
      {
        ignore: [
          'after-comment',
          'after-custom-property',
          'inside-single-line-block',
        ],
      },
    ],

    'declaration-empty-line-before': null,

    'scss/double-slash-comment-empty-line-before': null,

    'value-keyword-case': 'lower',

    'no-descending-specificity': null,
    'no-empty-source': null,
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
};

export default config;
