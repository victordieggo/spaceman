export default {
  extends: "stylelint-config-standard",
  ignoreFiles: "assets/src/sass/vendor/*.scss",
  rules: {
    "no-descending-specificity": null,
    "declaration-empty-line-before": "never",
    "at-rule-empty-line-before": ["always", {
      ignore: ["after-comment", "inside-block", "blockless-after-same-name-blockless"]
    }],
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        "at-root", "content", "debug", "each", "else", "error", "extend",
        "for", "function", "if", "include", "mixin", "return", "warn", "while"
      ]
    }]
  }
};
