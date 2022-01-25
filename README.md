 This repository reproduces a Vite incompatibile Rollup plugin [rollup-plugin-inline-postcss](https://github.com/steveblue/rollup-plugin-inline-postcss) that preprocess CSS within tagged template literals with PostCSS.
 
 The plugin functions as expected when building with Vite (`vite preview`).
 
 However, it throws in dev mode (`vite dev`) with:
 
 ```
 12:45:21 pm [vite] Internal server error: /mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/.vite/lit.js?v=98f0f383:1:2: Unknown word
  Plugin: inline-postcss
  File: /mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/.vite/lit.js?v=98f0f383
  1  |  // node_modules/@lit/reactive-element/development/css-tag.js
     |    ^
  2  |  var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  3  |  var constructionToken = Symbol();
      at Input.error (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/input.js:148:16)
      at Parser.unknownWord (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/parser.js:522:22)
      at Parser.other (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/parser.js:149:12)
      at Parser.parse (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/parser.js:59:16)
      at parse (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/parse.js:11:12)
      at new LazyResult (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/lazy-result.js:133:16)
      at Processor.process (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/postcss/lib/processor.js:28:14)
      at /mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/rollup-plugin-inline-postcss/index.js:62:79
      at Array.map (<anonymous>)
      at TransformContext.transform (/mnt/Active/Projects/Personal/scratchpad/issue/issue_vitejs-rollup-plugin-inline-postcss/node_modules/rollup-plugin-inline-postcss/index.js:62:44)
```

This error persists regardless of enforced plugin order.

I could not find any leads as to how to go about fixing this incompatibility, and any help will be appreciated.

---

- [Interactive Stackblitz project](https://stackblitz.com/github/5310/issue_vitejs-rollup-plugin-inline-postcss)
- [GitHub Discussion post](https://github.com/vitejs/vite/discussions/6621)
