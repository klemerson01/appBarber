(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\nbody {\r\n  background: var(--ion-background-color);\r\n}\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\r\n}\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\r\n}\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\r\n}\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\r\n}\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\r\n}\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\r\n}\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  position: absolute;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\n.menu-content {\r\n  -webkit-transform: translate3d(0,  0,  0);\r\n          transform: translate3d(0,  0,  0);\r\n}\n.menu-content-open {\r\n  cursor: pointer;\r\n  touch-action: manipulation;\r\n  pointer-events: none;\r\n}\n.ios .menu-content-reveal {\r\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\n[dir=rtl].ios .menu-content-reveal {\r\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\r\n}\n.md .menu-content-reveal {\r\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\r\n}\n.md .menu-content-push {\r\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\r\n}\n/* Basic CSS for apps built with Ionic */\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\nfigure {\r\n  margin: 1em 40px;\r\n}\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\npre {\r\n  overflow: auto;\r\n}\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\ntextarea::-webkit-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::-moz-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::-ms-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\n[tappable] {\r\n  cursor: pointer;\r\n}\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\ntd,\r\nth {\r\n  padding: 0;\r\n}\n* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n     -moz-text-size-adjust: 100%;\r\n      -ms-text-size-adjust: 100%;\r\n          text-size-adjust: 100%;\r\n}\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  -webkit-text-size-adjust: none;\r\n     -moz-text-size-adjust: none;\r\n      -ms-text-size-adjust: none;\r\n          text-size-adjust: none;\r\n}\nhtml {\r\n  font-family: var(--ion-font-family);\r\n}\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\nh3 {\r\n  font-size: 22px;\r\n}\nh4 {\r\n  font-size: 20px;\r\n}\nh5 {\r\n  font-size: 18px;\r\n}\nh6 {\r\n  font-size: 16px;\r\n}\nsmall {\r\n  font-size: 75%;\r\n}\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\nsup {\r\n  top: -0.5em;\r\n}\nsub {\r\n  bottom: -0.25em;\r\n}\n.ion-hide {\r\n  display: none !important;\r\n}\n.ion-hide-up {\r\n  display: none !important;\r\n}\n@media (max-width: 575px) {\r\n  .ion-hide-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 576px) {\r\n  .ion-hide-sm-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 767px) {\r\n  .ion-hide-sm-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-hide-md-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 991px) {\r\n  .ion-hide-md-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-hide-lg-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 1199px) {\r\n  .ion-hide-lg-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-hide-xl-up {\r\n    display: none !important;\r\n  }\r\n}\n.ion-hide-xl-down {\r\n  display: none !important;\r\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding,\r\n[no-padding] {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\n.ion-padding,\r\n[padding] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding,\r\n[padding] {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-top,\r\n[padding-top] {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\n.ion-padding-start,\r\n[padding-start] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start,\r\n[padding-start] {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-end,\r\n[padding-end] {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end,\r\n[padding-end] {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-bottom,\r\n[padding-bottom] {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-vertical,\r\n[padding-vertical] {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-horizontal,\r\n[padding-horizontal] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal,\r\n[padding-horizontal] {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-no-margin,\r\n[no-margin] {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\n.ion-margin,\r\n[margin] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin,\r\n[margin] {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-top,\r\n[margin-top] {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\n.ion-margin-start,\r\n[margin-start] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start,\r\n[margin-start] {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-end,\r\n[margin-end] {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end,\r\n[margin-end] {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-bottom,\r\n[margin-bottom] {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-vertical,\r\n[margin-vertical] {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-horizontal,\r\n[margin-horizontal] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal,\r\n[margin-horizontal] {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-float-left,\r\n[float-left] {\r\n  float: left !important;\r\n}\n.ion-float-right,\r\n[float-right] {\r\n  float: right !important;\r\n}\n.ion-float-start,\r\n[float-start] {\r\n  float: left !important;\r\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\r\n  float: right !important;\r\n}\n.ion-float-end,\r\n[float-end] {\r\n  float: right !important;\r\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\r\n  float: left !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-float-sm-left,\r\n[float-sm-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right,\r\n[float-sm-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start,\r\n[float-sm-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end,\r\n[float-sm-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-float-md-left,\r\n[float-md-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right,\r\n[float-md-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start,\r\n[float-md-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end,\r\n[float-md-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-float-lg-left,\r\n[float-lg-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right,\r\n[float-lg-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start,\r\n[float-lg-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end,\r\n[float-lg-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left,\r\n[float-xl-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right,\r\n[float-xl-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start,\r\n[float-xl-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end,\r\n[float-xl-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\r\n    float: left !important;\r\n  }\r\n}\n.ion-text-center,\r\n[text-center] {\r\n  text-align: center !important;\r\n}\n.ion-text-justify,\r\n[text-justify] {\r\n  text-align: justify !important;\r\n}\n.ion-text-start,\r\n[text-start] {\r\n  text-align: start !important;\r\n}\n.ion-text-end,\r\n[text-end] {\r\n  text-align: end !important;\r\n}\n.ion-text-left,\r\n[text-left] {\r\n  text-align: left !important;\r\n}\n.ion-text-right,\r\n[text-right] {\r\n  text-align: right !important;\r\n}\n.ion-text-nowrap,\r\n[text-nowrap] {\r\n  white-space: nowrap !important;\r\n}\n.ion-text-wrap,\r\n[text-wrap] {\r\n  white-space: normal !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-center,\r\n[text-sm-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify,\r\n[text-sm-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start,\r\n[text-sm-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end,\r\n[text-sm-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left,\r\n[text-sm-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right,\r\n[text-sm-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap,\r\n[text-sm-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap,\r\n[text-sm-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-center,\r\n[text-md-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify,\r\n[text-md-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start,\r\n[text-md-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end,\r\n[text-md-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left,\r\n[text-md-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right,\r\n[text-md-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap,\r\n[text-md-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap,\r\n[text-md-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-center,\r\n[text-lg-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify,\r\n[text-lg-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start,\r\n[text-lg-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end,\r\n[text-lg-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left,\r\n[text-lg-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right,\r\n[text-lg-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap,\r\n[text-lg-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap,\r\n[text-lg-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center,\r\n[text-xl-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify,\r\n[text-xl-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start,\r\n[text-xl-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end,\r\n[text-xl-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left,\r\n[text-xl-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right,\r\n[text-xl-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap,\r\n[text-xl-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap,\r\n[text-xl-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n.ion-text-uppercase,\r\n[text-uppercase] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\n.ion-text-lowercase,\r\n[text-lowercase] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\n.ion-text-capitalize,\r\n[text-capitalize] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase,\r\n[text-sm-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase,\r\n[text-sm-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize,\r\n[text-sm-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase,\r\n[text-md-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase,\r\n[text-md-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize,\r\n[text-md-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase,\r\n[text-lg-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase,\r\n[text-lg-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize,\r\n[text-lg-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase,\r\n[text-xl-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase,\r\n[text-xl-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize,\r\n[text-xl-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n.ion-align-self-start,\r\n[align-self-start] {\r\n  align-self: flex-start !important;\r\n}\n.ion-align-self-end,\r\n[align-self-end] {\r\n  align-self: flex-end !important;\r\n}\n.ion-align-self-center,\r\n[align-self-center] {\r\n  align-self: center !important;\r\n}\n.ion-align-self-stretch,\r\n[align-self-stretch] {\r\n  align-self: stretch !important;\r\n}\n.ion-align-self-baseline,\r\n[align-self-baseline] {\r\n  align-self: baseline !important;\r\n}\n.ion-align-self-auto,\r\n[align-self-auto] {\r\n  align-self: auto !important;\r\n}\n.ion-wrap,\r\n[wrap] {\r\n  flex-wrap: wrap !important;\r\n}\n.ion-nowrap,\r\n[nowrap] {\r\n  flex-wrap: nowrap !important;\r\n}\n.ion-wrap-reverse,\r\n[wrap-reverse] {\r\n  flex-wrap: wrap-reverse !important;\r\n}\n.ion-justify-content-start,\r\n[justify-content-start] {\r\n  -webkit-box-pack: start !important;\r\n          justify-content: flex-start !important;\r\n}\n.ion-justify-content-center,\r\n[justify-content-center] {\r\n  -webkit-box-pack: center !important;\r\n          justify-content: center !important;\r\n}\n.ion-justify-content-end,\r\n[justify-content-end] {\r\n  -webkit-box-pack: end !important;\r\n          justify-content: flex-end !important;\r\n}\n.ion-justify-content-around,\r\n[justify-content-around] {\r\n  justify-content: space-around !important;\r\n}\n.ion-justify-content-between,\r\n[justify-content-between] {\r\n  -webkit-box-pack: justify !important;\r\n          justify-content: space-between !important;\r\n}\n.ion-justify-content-evenly,\r\n[justify-content-evenly] {\r\n  -webkit-box-pack: space-evenly !important;\r\n          justify-content: space-evenly !important;\r\n}\n.ion-align-items-start,\r\n[align-items-start] {\r\n  -webkit-box-align: start !important;\r\n          align-items: flex-start !important;\r\n}\n.ion-align-items-center,\r\n[align-items-center] {\r\n  -webkit-box-align: center !important;\r\n          align-items: center !important;\r\n}\n.ion-align-items-end,\r\n[align-items-end] {\r\n  -webkit-box-align: end !important;\r\n          align-items: flex-end !important;\r\n}\n.ion-align-items-stretch,\r\n[align-items-stretch] {\r\n  -webkit-box-align: stretch !important;\r\n          align-items: stretch !important;\r\n}\n.ion-align-items-baseline,\r\n[align-items-baseline] {\r\n  -webkit-box-align: baseline !important;\r\n          align-items: baseline !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcdXNlcnNcXGtsZW1lcnNvbiByb2RyaWd1ZXNcXGdpdGh1YlxcYXBwYmFyYmVyXFxhcHBiYXJiZXIvc3JjXFxnbG9iYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7RUFBQTtBQVdBLDREQUFBO0FDSEE7RUFDRSw2RkFBQTtBQ1BGO0FEU0E7RUFDRSwwREFBQTtBQ05GO0FEU0E7RUFDRSwwQ0FBQTtBQ05GO0FEU0E7RUFDRSx1Q0FBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtBQ05GO0FEcUNFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDeEJGO0FENEJFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDZkY7QURtQkU7RUFUQSwrREFBQTtFQUNBLDRFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNORjtBRFVFO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDR0Y7QURDRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ1lGO0FEUkU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNxQkY7QURqQkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUM4QkY7QUQxQkU7RUFUQSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUN1Q0Y7QURuQ0U7RUFUQSwyREFBQTtFQUNBLHNFQUFBO0VBQ0EscUVBQUE7RUFDQSxzRkFBQTtFQUNBLGtFQUFBO0VBQ0EsZ0VBQUE7QUNnREY7QURuQ0E7RUU2Tk0sT0Y1TnVCO0VFNk52QixRRjdOaUI7RUVzUHJCLE1GdFBrQjtFRXVQbEIsU0Z2UHdCO0VBRXhCLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVR3pCK0I7QUYrRGpDO0FEbkNBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSx5REFBQTtFQUNBLHdCQUFBO0FDc0NGO0FEbkNBO0VBQ0UsVUFBQTtBQ3NDRjtBRGhDQTtFQUNFLDZCQUFBO0FDbUNGO0FEaENBO0VBQ0U7SUFDRSxpREFBQTtFQ21DRjtBQUNGO0FEL0JBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLHdEQUFBO0lBQ0Esb0RBQUE7SUFDQSxzREFBQTtFQ2lDRjtBQUNGO0FEOUJBO0VBQ0U7SUFDRSw2Q0FBQTtJQUNBLG1EQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtFQ2dDRjtBQUNGO0FEekJBO0VFaVZNLHlDQUFBO1VBQUEsaUNBQUE7QURyVE47QUR4QkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFJQSxvQkFBQTtBQ3dCRjtBRHJCQTtFQUNFLDJDSTNJK0I7QUhtS2pDO0FEckJBO0VBQ0UsMENJNUkrQjtBSG9LakM7QURqQkE7RUFDRSw4RUsxSjhCO0FKOEtoQztBRGpCQTtFQUNFLDhFSzlKOEI7QUprTGhDO0FGN0tBLHdDQUFBO0FPUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtBQzdDRjtBRDRDQTtFQUNFLGlCQUFBO0FDN0NGO0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7QURnREE7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM5Q0Y7QURzREE7OztFQUdFLGVBQUE7RUFFQSwwQkFBQTtBQ3BERjtBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGO0FEd0RBOztFQUVFLG9CQUFBO0FDckRGO0FEd0RBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3hKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFTlNFLGtDQUFBO0VBQ0EsbUNBQUE7RUErSkUsY012S2M7RU53S2QsZU14S2M7RU40TWhCLGFNNU1nQjtFTjZNaEIsZ0JNN01nQjtFTnVLZCxlTXRLZTtFTnVLZixnQk12S2U7RU4yTWpCLGNNM01pQjtFTjRNakIsaUJNNU1pQjtFQUVqQixlQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO0tBQUEsMkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDYkY7QUNkQTtFQUNFLG1DQUFBO0FDOUJGO0FEaUNBO0VBQ0UsNkJBQUE7RUFDQSx3Q0FBQTtBQzlCRjtBRGlDQTs7Ozs7O0VSc01FLGdCUWhNZ0I7RVJpTWhCLG1CUWpNNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjtBRGtDQTtFUnlMRSxnQlF4TGdCO0VBRWhCLGVBMUM2QjtBQ1MvQjtBRG9DQTtFUm1MRSxnQlFsTGdCO0VBRWhCLGVBN0M2QjtBQ1UvQjtBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjtBRHVDQTtFQUNFLGVBL0M2QjtBQ1cvQjtBRHVDQTtFQUNFLGVBaEQ2QjtBQ1kvQjtBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjtBRHVDQTtFQUNFLGNBQUE7QUNwQ0Y7QUR1Q0E7O0VBRUUsa0JBQUE7RUFFQSxjQUFBO0VBRUEsY0FBQTtFQUVBLHdCQUFBO0FDdkNGO0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN2Q0Y7QUN0REE7RUFDRSx3QkFBQTtBQ1BGO0FEaUJJO0VBQ0Usd0JBQUE7QUNkTjtBWDBISTtFVXJHQTtJQUNFLHdCQUFBO0VDakJKO0FBQ0Y7QVhnRkk7RVV6RUE7SUFDRSx3QkFBQTtFQ0pKO0FBQ0Y7QVgrR0k7RVVyR0E7SUFDRSx3QkFBQTtFQ1BKO0FBQ0Y7QVhzRUk7RVV6RUE7SUFDRSx3QkFBQTtFQ01KO0FBQ0Y7QVhxR0k7RVVyR0E7SUFDRSx3QkFBQTtFQ0dKO0FBQ0Y7QVg0REk7RVV6RUE7SUFDRSx3QkFBQTtFQ2dCSjtBQUNGO0FYMkZJO0VVckdBO0lBQ0Usd0JBQUE7RUNhSjtBQUNGO0FYa0RJO0VVekVBO0lBQ0Usd0JBQUE7RUMwQko7QUFDRjtBRHBCSTtFQUNFLHdCQUFBO0FDc0JOO0FkOUJBLGlEQUFBO0FlSkE7O0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RVpvTEUsZVlsTGU7RVptTGYsZ0JZbkxlO0VadU5qQixjWXZOaUI7RVp3TmpCLGlCWXhOaUI7QUNibkI7QURnQkE7O0VBRUUseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RVo4S0Usc0NZbk1NO0Vab01OLHVDWXBNTTtFWm9PUixxQ1lwT1E7RVpxT1Isd0NZck9RO0FDWVY7QWIyTE07RUFDRTs7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NZaE5BO0laaU5BLDhDWWpOQTtJWmtOQSw2Q1lsTkE7SVptTkEsNENZbk5BO0VDc0JSO0FBQ0Y7QURHQTs7RUFFRSx1Q0FBQTtFWndNQSxxQ1lwT1E7QUM2QlY7QURJQTs7RUFFRSx5Q0FBQTtFWmdLRSxzQ1luTU07QUNrQ1Y7QWJxS007RUFDRTs7SUFFSSxtQkFBQTtJQU1GLCtDWWhOQTtJWmlOQSw4Q1lqTkE7RUN5Q1I7QUFDRjtBREZBOztFQUVFLHVDQUFBO0VaMEpFLHVDWXBNTTtBQ2dEVjtBYnVKTTtFQUNFOztJQUtJLG9CQUFBO0lBS0YsNkNZbE5BO0labU5BLDRDWW5OQTtFQ3VEUjtBQUNGO0FEVEE7O0VBRUUsMENBQUE7RVpvTEEsd0NZck9RO0FDOERWO0FEUkE7O0VBRUUsdUNBQUE7RUFDQSwwQ0FBQTtFWjJLQSxxQ1lwT1E7RVpxT1Isd0NZck9RO0FDcUVWO0FEUEE7O0VBRUUseUNBQUE7RUFDQSx1Q0FBQTtFWmtJRSxzQ1luTU07RVpvTU4sdUNZcE1NO0FDNEVWO0FiMkhNO0VBQ0U7O0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDWWhOQTtJWmlOQSw4Q1lqTkE7SVprTkEsNkNZbE5BO0labU5BLDRDWW5OQTtFQ3NGUjtBQUNGO0FEYkE7O0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VaZ0hFLGNZOUdjO0VaK0dkLGVZL0djO0VabUpoQixhWW5KZ0I7RVpvSmhCLGdCWXBKZ0I7QUNrQmxCO0FEZkE7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVowR0Usb0NZbE1LO0VabU1MLHFDWW5NSztFWm1PUCxtQ1luT087RVpvT1Asc0NZcE9PO0FDOEdUO0Fid0ZNO0VBQ0U7O0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDWS9NRDtJWmdOQyw0Q1loTkQ7SVppTkMsMkNZak5EO0laa05DLDBDWWxORDtFQ3dIUDtBQUNGO0FENUJBOztFQUVFLHFDQUFBO0Vab0lBLG1DWW5PTztBQytIVDtBRDNCQTs7RUFFRSx1Q0FBQTtFWjRGRSxvQ1lsTUs7QUNvSVQ7QWJrRU07RUFDRTs7SUFFSSxrQkFBQTtJQU1GLDZDWS9NRDtJWmdOQyw0Q1loTkQ7RUMySVA7QUFDRjtBRGpDQTs7RUFFRSxxQ0FBQTtFWnNGRSxxQ1luTUs7QUNrSlQ7QWJvRE07RUFDRTs7SUFLSSxtQkFBQTtJQUtGLDJDWWpORDtJWmtOQywwQ1lsTkQ7RUN5SlA7QUFDRjtBRHhDQTs7RUFFRSx3Q0FBQTtFWmdIQSxzQ1lwT087QUNnS1Q7QUR2Q0E7O0VBRUUscUNBQUE7RUFDQSx3Q0FBQTtFWnVHQSxtQ1luT087RVpvT1Asc0NZcE9PO0FDdUtUO0FEdENBOztFQUVFLHVDQUFBO0VBQ0EscUNBQUE7RVo4REUsb0NZbE1LO0VabU1MLHFDWW5NSztBQzhLVDtBYndCTTtFQUNFOztJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1kvTUQ7SVpnTkMsNENZaE5EO0laaU5DLDJDWWpORDtJWmtOQywwQ1lsTkQ7RUN3TFA7QUFDRjtBQ3RMSTs7RWRnWEUsc0JBQUE7QWUzWE47QURnQkk7O0VkMldFLHVCQUFBO0FldFhOO0FEZ0JJOztFZHdWRSxzQkFBQTtBZW5XTjtBZmdKVztFQXNOTCx1QkFBQTtBZW5XTjtBRGFJOztFZDBWRSx1QkFBQTtBZWxXTjtBZndJVztFQTZOTCxzQkFBQTtBZWxXTjtBZm9FSTtFYzlFQTs7SWRnWEUsc0JBQUE7RWVoV0o7O0VEWEU7O0lkMldFLHVCQUFBO0VlM1ZKOztFRFhFOztJZHdWRSxzQkFBQTtFZXhVSjtFZnFIUztJQXNOTCx1QkFBQTtFZXhVSjs7RURkRTs7SWQwVkUsdUJBQUE7RWV2VUo7RWY2R1M7SUE2Tkwsc0JBQUE7RWV2VUo7QUFDRjtBZndDSTtFYzlFQTs7SWRnWEUsc0JBQUE7RWVyVUo7O0VEdENFOztJZDJXRSx1QkFBQTtFZWhVSjs7RUR0Q0U7O0lkd1ZFLHNCQUFBO0VlN1NKO0VmMEZTO0lBc05MLHVCQUFBO0VlN1NKOztFRHpDRTs7SWQwVkUsdUJBQUE7RWU1U0o7RWZrRlM7SUE2Tkwsc0JBQUE7RWU1U0o7QUFDRjtBZmFJO0VjOUVBOztJZGdYRSxzQkFBQTtFZTFTSjs7RURqRUU7O0lkMldFLHVCQUFBO0VlclNKOztFRGpFRTs7SWR3VkUsc0JBQUE7RWVsUko7RWYrRFM7SUFzTkwsdUJBQUE7RWVsUko7O0VEcEVFOztJZDBWRSx1QkFBQTtFZWpSSjtFZnVEUztJQTZOTCxzQkFBQTtFZWpSSjtBQUNGO0FmZEk7RWM5RUE7O0lkZ1hFLHNCQUFBO0VlL1FKOztFRDVGRTs7SWQyV0UsdUJBQUE7RWUxUUo7O0VENUZFOztJZHdWRSxzQkFBQTtFZXZQSjtFZm9DUztJQXNOTCx1QkFBQTtFZXZQSjs7RUQvRkU7O0lkMFZFLHVCQUFBO0VldFBKO0VmNEJTO0lBNk5MLHNCQUFBO0VldFBKO0FBQ0Y7QUN2SEk7O0VBRUUsNkJBQUE7QUNiTjtBRGdCSTs7RUFFRSw4QkFBQTtBQ2JOO0FEZ0JJOztFQUVFLDRCQUFBO0FDYk47QURnQkk7O0VBRUUsMEJBQUE7QUNiTjtBRGdCSTs7RUFFRSwyQkFBQTtBQ2JOO0FEZ0JJOztFQUVFLDRCQUFBO0FDYk47QURnQkk7O0VBRUUsOEJBQUE7QUNiTjtBRGdCSTs7RUFFRSw4QkFBQTtBQ2JOO0FqQnNESTtFZ0I5RUE7O0lBRUUsNkJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDhCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSw0QkFBQTtFQzRCSjs7RUR6QkU7O0lBRUUsMEJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDJCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSw0QkFBQTtFQzRCSjs7RUR6QkU7O0lBRUUsOEJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDhCQUFBO0VDNEJKO0FBQ0Y7QWpCWUk7RWdCOUVBOztJQUVFLDZCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSw4QkFBQTtFQ3FFSjs7RURsRUU7O0lBRUUsNEJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDBCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSwyQkFBQTtFQ3FFSjs7RURsRUU7O0lBRUUsNEJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDhCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSw4QkFBQTtFQ3FFSjtBQUNGO0FqQjdCSTtFZ0I5RUE7O0lBRUUsNkJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDhCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSw0QkFBQTtFQzhHSjs7RUQzR0U7O0lBRUUsMEJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDJCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSw0QkFBQTtFQzhHSjs7RUQzR0U7O0lBRUUsOEJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDhCQUFBO0VDOEdKO0FBQ0Y7QWpCdEVJO0VnQjlFQTs7SUFFRSw2QkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsOEJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDRCQUFBO0VDdUpKOztFRHBKRTs7SUFFRSwwQkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsMkJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDRCQUFBO0VDdUpKOztFRHBKRTs7SUFFRSw4QkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsOEJBQUE7RUN1Sko7QUFDRjtBQzdMSTs7RUFFRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7O0VBRUUseURBQUE7RUFDQSxvQ0FBQTtBQ2JOO0FEZ0JJOztFQUVFLHlEQUFBO0VBQ0EscUNBQUE7QUNiTjtBbkI0RUk7RWtCOUVBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNNSjs7RURIRTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDTUo7O0VESEU7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQ01KO0FBQ0Y7QW5Cd0RJO0VrQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDeUJKOztFRHRCRTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDeUJKOztFRHRCRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDeUJKO0FBQ0Y7QW5CcUNJO0VrQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDNENKOztFRHpDRTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDNENKOztFRHpDRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDNENKO0FBQ0Y7QW5Ca0JJO0VrQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDK0RKOztFRDVERTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDK0RKOztFRDVERTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDK0RKO0FBQ0Y7QUNyRkE7O0VBRUUsaUNBQUE7QUNQRjtBRFVBOztFQUVFLCtCQUFBO0FDUEY7QURVQTs7RUFFRSw2QkFBQTtBQ1BGO0FEVUE7O0VBRUUsOEJBQUE7QUNQRjtBRFVBOztFQUVFLCtCQUFBO0FDUEY7QURVQTs7RUFFRSwyQkFBQTtBQ1BGO0FEY0E7O0VBRUUsMEJBQUE7QUNYRjtBRGNBOztFQUVFLDRCQUFBO0FDWEY7QURjQTs7RUFFRSxrQ0FBQTtBQ1hGO0FEa0JBOztFQUVFLGtDQUFBO1VBQUEsc0NBQUE7QUNmRjtBRGtCQTs7RUFFRSxtQ0FBQTtVQUFBLGtDQUFBO0FDZkY7QURrQkE7O0VBRUUsZ0NBQUE7VUFBQSxvQ0FBQTtBQ2ZGO0FEa0JBOztFQUVFLHdDQUFBO0FDZkY7QURrQkE7O0VBRUUsb0NBQUE7VUFBQSx5Q0FBQTtBQ2ZGO0FEa0JBOztFQUVFLHlDQUFBO1VBQUEsd0NBQUE7QUNmRjtBRHNCQTs7RUFFRSxtQ0FBQTtVQUFBLGtDQUFBO0FDbkJGO0FEc0JBOztFQUVFLG9DQUFBO1VBQUEsOEJBQUE7QUNuQkY7QURzQkE7O0VBRUUsaUNBQUE7VUFBQSxnQ0FBQTtBQ25CRjtBRHNCQTs7RUFFRSxxQ0FBQTtVQUFBLCtCQUFBO0FDbkJGO0FEc0JBOztFQUVFLHNDQUFBO1VBQUEsZ0NBQUE7QUNuQkYiLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQXBwIEdsb2JhbCBDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxyXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXHJcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxyXG4gKiBvdXRwdXQgQ1NTLlxyXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxyXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcclxuICovXHJcblxyXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XHJcblxyXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcclxuQGltcG9ydCAnfkBpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyc7XHJcblxyXG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XHJcbiIsbnVsbCwiaHRtbC5pb3Mge1xyXG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmh0bWwubWQge1xyXG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAtLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMwY2QxZTgpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiLCAxMiwgMjA5LCAyMzIpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzBiYjhjYykgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICMyNGQ2ZWEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItdGVydGlhcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzcwNDRmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiwgMTEyLCA2OCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM2MzNjZTApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM3ZTU3ZmYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3Itc3VjY2VzcyB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMxMGRjNjApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgMTYsIDIyMCwgOTYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzBlYzI1NCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjMjhlMDcwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjZTAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IsIDI1NSwgMjA2LCAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUsICNlMGI1MDApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmZDMxYSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1kYW5nZXIge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMDQxNDEpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyNDAsIDY1LCA2NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjZDMzOTM5KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2YyNTQ1NCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1saWdodCB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItbWVkaXVtIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTg5YWEyKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTUyLCAxNTQsIDE2MikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODY4ODhmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgI2EyYTRhYikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1kYXJrIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwgMzYsIDQwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1wYWdlIHtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG5pb24tcm91dGUsXHJcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcclxuaW9uLXJvdXRlcixcclxuaW9uLXNlbGVjdC1vcHRpb24sXHJcbmlvbi1uYXYtY29udHJvbGxlcixcclxuaW9uLW1lbnUtY29udHJvbGxlcixcclxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxyXG5pb24tYWxlcnQtY29udHJvbGxlcixcclxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcclxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXHJcbmlvbi1waWNrZXItY29udHJvbGxlcixcclxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcclxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXHJcbi5pb24tcGFnZS1oaWRkZW4sXHJcbltoaWRkZW5dIHtcclxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xyXG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xyXG4gIH1cclxufVxyXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xyXG4gIGh0bWwge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XHJcbiAgfVxyXG59XHJcbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xyXG4gIGh0bWwge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xyXG4gIH1cclxufVxyXG4ubWVudS1jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRlbnQtb3BlbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcclxuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcclxuICBib3gtc2hhZG93OiA4cHggMCA0MnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbn1cclxuXHJcbi5tZCAubWVudS1jb250ZW50LXJldmVhbCB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMjJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOSksIDRweCAwIDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG59XHJcblxyXG4ubWQgLm1lbnUtY29udGVudC1wdXNoIHtcclxuICBib3gtc2hhZG93OiAwIDJweCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KSwgNHB4IDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY3NzLm1hcCAqL1xyXG4iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiYXVkaW8sXHJcbmNhbnZhcyxcclxucHJvZ3Jlc3MsXHJcbnZpZGVvIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmIsXHJcbnN0cm9uZyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmZpZ3VyZSB7XHJcbiAgbWFyZ2luOiAxZW0gNDBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxucHJlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuY29kZSxcclxua2JkLFxyXG5wcmUsXHJcbnNhbXAge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxubGFiZWwsXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbmZvcm0sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXHJcbmlucHV0W3R5cGU9cmVzZXRdLFxyXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuYSxcclxuYSBkaXYsXHJcbmEgc3BhbixcclxuYSBpb24taWNvbixcclxuYSBpb24tbGFiZWwsXHJcbmJ1dHRvbixcclxuYnV0dG9uIGRpdixcclxuYnV0dG9uIHNwYW4sXHJcbmJ1dHRvbiBpb24taWNvbixcclxuYnV0dG9uIGlvbi1sYWJlbCxcclxuLmlvbi10YXBwYWJsZSxcclxuW3RhcHBhYmxlXSxcclxuW3RhcHBhYmxlXSBkaXYsXHJcblt0YXBwYWJsZV0gc3BhbixcclxuW3RhcHBhYmxlXSBpb24taWNvbixcclxuW3RhcHBhYmxlXSBpb24tbGFiZWwsXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbn1cclxuXHJcbmEgaW9uLWxhYmVsLFxyXG5idXR0b24gaW9uLWxhYmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XHJcbn1cclxuXHJcblt0YXBwYWJsZV0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYVtkaXNhYmxlZF0sXHJcbmJ1dHRvbltkaXNhYmxlZF0sXHJcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcclxuaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cclxuIixudWxsLCIqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbn1cclxuXHJcbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaHRtbC5wbHQtcHdhIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xyXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXHJcbiIsbnVsbCwiaHRtbCB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XHJcbn1cclxuXHJcbmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuaDEge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbmgyIHtcclxuICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbn1cclxuXHJcbnN1Yixcclxuc3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5zdXAge1xyXG4gIHRvcDogLTAuNWVtO1xyXG59XHJcblxyXG5zdWIge1xyXG4gIGJvdHRvbTogLTAuMjVlbTtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dHlwb2dyYXBoeS5jc3MubWFwICovXHJcbiIsbnVsbCwiLmlvbi1oaWRlIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24taGlkZS11cCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuaW9uLWhpZGUtZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5pb24taGlkZS1zbS11cCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5pb24taGlkZS1zbS1kb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlvbi1oaWRlLW1kLXVwIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmlvbi1oaWRlLW1kLWRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuaW9uLWhpZGUtbGctdXAge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgLmlvbi1oaWRlLWxnLWRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmlvbi1oaWRlLXhsLXVwIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmlvbi1oaWRlLXhsLWRvd24ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5jc3MubWFwICovXHJcbiIsbnVsbCwiLmlvbi1uby1wYWRkaW5nLFxyXG5bbm8tcGFkZGluZ10ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLFxyXG5bcGFkZGluZ10ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLXBhZGRpbmcsXHJcbltwYWRkaW5nXSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy10b3AsXHJcbltwYWRkaW5nLXRvcF0ge1xyXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbi5pb24tcGFkZGluZy1zdGFydCxcclxuW3BhZGRpbmctc3RhcnRdIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tcGFkZGluZy1zdGFydCxcclxuW3BhZGRpbmctc3RhcnRdIHtcclxuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctZW5kLFxyXG5bcGFkZGluZy1lbmRdIHtcclxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1wYWRkaW5nLWVuZCxcclxuW3BhZGRpbmctZW5kXSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLWJvdHRvbSxcclxuW3BhZGRpbmctYm90dG9tXSB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsLFxyXG5bcGFkZGluZy12ZXJ0aWNhbF0ge1xyXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbi5pb24tcGFkZGluZy1ob3Jpem9udGFsLFxyXG5bcGFkZGluZy1ob3Jpem9udGFsXSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tcGFkZGluZy1ob3Jpem9udGFsLFxyXG5bcGFkZGluZy1ob3Jpem9udGFsXSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tbm8tbWFyZ2luLFxyXG5bbm8tbWFyZ2luXSB7XHJcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XHJcbiAgLS1tYXJnaW4tZW5kOiAwO1xyXG4gIC0tbWFyZ2luLXRvcDogMDtcclxuICAtLW1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmlvbi1tYXJnaW4sXHJcblttYXJnaW5dIHtcclxuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLW1hcmdpbixcclxuW21hcmdpbl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLXRvcCxcclxuW21hcmdpbi10b3BdIHtcclxuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbi5pb24tbWFyZ2luLXN0YXJ0LFxyXG5bbWFyZ2luLXN0YXJ0XSB7XHJcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tbWFyZ2luLXN0YXJ0LFxyXG5bbWFyZ2luLXN0YXJ0XSB7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLWVuZCxcclxuW21hcmdpbi1lbmRdIHtcclxuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLW1hcmdpbi1lbmQsXHJcblttYXJnaW4tZW5kXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLWJvdHRvbSxcclxuW21hcmdpbi1ib3R0b21dIHtcclxuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbi5pb24tbWFyZ2luLXZlcnRpY2FsLFxyXG5bbWFyZ2luLXZlcnRpY2FsXSB7XHJcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbi5pb24tbWFyZ2luLWhvcml6b250YWwsXHJcblttYXJnaW4taG9yaXpvbnRhbF0ge1xyXG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1tYXJnaW4taG9yaXpvbnRhbCxcclxuW21hcmdpbi1ob3Jpem9udGFsXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5jc3MubWFwICovXHJcbiIsbnVsbCwiLmlvbi1mbG9hdC1sZWZ0LFxyXG5bZmxvYXQtbGVmdF0ge1xyXG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tZmxvYXQtcmlnaHQsXHJcbltmbG9hdC1yaWdodF0ge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWZsb2F0LXN0YXJ0LFxyXG5bZmxvYXQtc3RhcnRdIHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbltkaXI9cnRsXSAuaW9uLWZsb2F0LXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc3RhcnRdIHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1mbG9hdC1lbmQsXHJcbltmbG9hdC1lbmRdIHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCwgW2Rpcj1ydGxdIFtmbG9hdC1lbmRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWVuZF0ge1xyXG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5pb24tZmxvYXQtc20tbGVmdCxcclxuW2Zsb2F0LXNtLWxlZnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LXNtLXJpZ2h0LFxyXG5bZmxvYXQtc20tcmlnaHRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1zbS1zdGFydCxcclxuW2Zsb2F0LXNtLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQsIFtkaXI9cnRsXSBbZmxvYXQtc20tc3RhcnRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXNtLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtc20tZW5kLFxyXG5bZmxvYXQtc20tZW5kXSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtc20tZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zbS1lbmRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pb24tZmxvYXQtbWQtbGVmdCxcclxuW2Zsb2F0LW1kLWxlZnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LW1kLXJpZ2h0LFxyXG5bZmxvYXQtbWQtcmlnaHRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1tZC1zdGFydCxcclxuW2Zsb2F0LW1kLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtc3RhcnQsIFtkaXI9cnRsXSBbZmxvYXQtbWQtc3RhcnRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LW1kLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtbWQtZW5kLFxyXG5bZmxvYXQtbWQtZW5kXSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtbWQtZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1tZC1lbmRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5pb24tZmxvYXQtbGctbGVmdCxcclxuW2Zsb2F0LWxnLWxlZnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LWxnLXJpZ2h0LFxyXG5bZmxvYXQtbGctcmlnaHRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1sZy1zdGFydCxcclxuW2Zsb2F0LWxnLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctc3RhcnQsIFtkaXI9cnRsXSBbZmxvYXQtbGctc3RhcnRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWxnLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtbGctZW5kLFxyXG5bZmxvYXQtbGctZW5kXSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1lbmQsIFtkaXI9cnRsXSBbZmxvYXQtbGctZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1sZy1lbmRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuaW9uLWZsb2F0LXhsLWxlZnQsXHJcbltmbG9hdC14bC1sZWZ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC14bC1yaWdodCxcclxuW2Zsb2F0LXhsLXJpZ2h0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQteGwtc3RhcnQsXHJcbltmbG9hdC14bC1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0LCBbZGlyPXJ0bF0gW2Zsb2F0LXhsLXN0YXJ0XSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC14bC1zdGFydF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LXhsLWVuZCxcclxuW2Zsb2F0LXhsLWVuZF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtZW5kLCBbZGlyPXJ0bF0gW2Zsb2F0LXhsLWVuZF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQteGwtZW5kXSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXQtZWxlbWVudHMuY3NzLm1hcCAqL1xyXG4iLG51bGwsIi5pb24tdGV4dC1jZW50ZXIsXHJcblt0ZXh0LWNlbnRlcl0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtanVzdGlmeSxcclxuW3RleHQtanVzdGlmeV0ge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LXN0YXJ0LFxyXG5bdGV4dC1zdGFydF0ge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1lbmQsXHJcblt0ZXh0LWVuZF0ge1xyXG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtbGVmdCxcclxuW3RleHQtbGVmdF0ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LXJpZ2h0LFxyXG5bdGV4dC1yaWdodF0ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1ub3dyYXAsXHJcblt0ZXh0LW5vd3JhcF0ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LXdyYXAsXHJcblt0ZXh0LXdyYXBdIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5pb24tdGV4dC1zbS1jZW50ZXIsXHJcblt0ZXh0LXNtLWNlbnRlcl0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tanVzdGlmeSxcclxuW3RleHQtc20tanVzdGlmeV0ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLXN0YXJ0LFxyXG5bdGV4dC1zbS1zdGFydF0ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1lbmQsXHJcblt0ZXh0LXNtLWVuZF0ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tbGVmdCxcclxuW3RleHQtc20tbGVmdF0ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLXJpZ2h0LFxyXG5bdGV4dC1zbS1yaWdodF0ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1ub3dyYXAsXHJcblt0ZXh0LXNtLW5vd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLXdyYXAsXHJcblt0ZXh0LXNtLXdyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlvbi10ZXh0LW1kLWNlbnRlcixcclxuW3RleHQtbWQtY2VudGVyXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1qdXN0aWZ5LFxyXG5bdGV4dC1tZC1qdXN0aWZ5XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtc3RhcnQsXHJcblt0ZXh0LW1kLXN0YXJ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLWVuZCxcclxuW3RleHQtbWQtZW5kXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1sZWZ0LFxyXG5bdGV4dC1tZC1sZWZ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtcmlnaHQsXHJcblt0ZXh0LW1kLXJpZ2h0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLW5vd3JhcCxcclxuW3RleHQtbWQtbm93cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtd3JhcCxcclxuW3RleHQtbWQtd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuaW9uLXRleHQtbGctY2VudGVyLFxyXG5bdGV4dC1sZy1jZW50ZXJdIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLWp1c3RpZnksXHJcblt0ZXh0LWxnLWp1c3RpZnldIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1zdGFydCxcclxuW3RleHQtbGctc3RhcnRdIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctZW5kLFxyXG5bdGV4dC1sZy1lbmRdIHtcclxuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLWxlZnQsXHJcblt0ZXh0LWxnLWxlZnRdIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1yaWdodCxcclxuW3RleHQtbGctcmlnaHRdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctbm93cmFwLFxyXG5bdGV4dC1sZy1ub3dyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy13cmFwLFxyXG5bdGV4dC1sZy13cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuaW9uLXRleHQteGwtY2VudGVyLFxyXG5bdGV4dC14bC1jZW50ZXJdIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLWp1c3RpZnksXHJcblt0ZXh0LXhsLWp1c3RpZnldIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1zdGFydCxcclxuW3RleHQteGwtc3RhcnRdIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtZW5kLFxyXG5bdGV4dC14bC1lbmRdIHtcclxuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLWxlZnQsXHJcblt0ZXh0LXhsLWxlZnRdIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1yaWdodCxcclxuW3RleHQteGwtcmlnaHRdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtbm93cmFwLFxyXG5bdGV4dC14bC1ub3dyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC13cmFwLFxyXG5bdGV4dC14bC13cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LWFsaWdubWVudC5jc3MubWFwICovXHJcbiIsbnVsbCwiLmlvbi10ZXh0LXVwcGVyY2FzZSxcclxuW3RleHQtdXBwZXJjYXNlXSB7XHJcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWxvd2VyY2FzZSxcclxuW3RleHQtbG93ZXJjYXNlXSB7XHJcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWNhcGl0YWxpemUsXHJcblt0ZXh0LWNhcGl0YWxpemVdIHtcclxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSxcclxuW3RleHQtc20tdXBwZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tbG93ZXJjYXNlLFxyXG5bdGV4dC1zbS1sb3dlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1jYXBpdGFsaXplLFxyXG5bdGV4dC1zbS1jYXBpdGFsaXplXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW9uLXRleHQtbWQtdXBwZXJjYXNlLFxyXG5bdGV4dC1tZC11cHBlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1sb3dlcmNhc2UsXHJcblt0ZXh0LW1kLWxvd2VyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLWNhcGl0YWxpemUsXHJcblt0ZXh0LW1kLWNhcGl0YWxpemVdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5pb24tdGV4dC1sZy11cHBlcmNhc2UsXHJcblt0ZXh0LWxnLXVwcGVyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLWxvd2VyY2FzZSxcclxuW3RleHQtbGctbG93ZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctY2FwaXRhbGl6ZSxcclxuW3RleHQtbGctY2FwaXRhbGl6ZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2UsXHJcblt0ZXh0LXhsLXVwcGVyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLWxvd2VyY2FzZSxcclxuW3RleHQteGwtbG93ZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtY2FwaXRhbGl6ZSxcclxuW3RleHQteGwtY2FwaXRhbGl6ZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtdHJhbnNmb3JtYXRpb24uY3NzLm1hcCAqL1xyXG4iLG51bGwsIi5pb24tYWxpZ24tc2VsZi1zdGFydCxcclxuW2FsaWduLXNlbGYtc3RhcnRdIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1lbmQsXHJcblthbGlnbi1zZWxmLWVuZF0ge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIsXHJcblthbGlnbi1zZWxmLWNlbnRlcl0ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCxcclxuW2FsaWduLXNlbGYtc3RyZXRjaF0ge1xyXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWJhc2VsaW5lLFxyXG5bYWxpZ24tc2VsZi1iYXNlbGluZV0ge1xyXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1hdXRvLFxyXG5bYWxpZ24tc2VsZi1hdXRvXSB7XHJcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXdyYXAsXHJcblt3cmFwXSB7XHJcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tbm93cmFwLFxyXG5bbm93cmFwXSB7XHJcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi13cmFwLXJldmVyc2UsXHJcblt3cmFwLXJldmVyc2VdIHtcclxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWp1c3RpZnktY29udGVudC1zdGFydCxcclxuW2p1c3RpZnktY29udGVudC1zdGFydF0ge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIsXHJcbltqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZW5kLFxyXG5banVzdGlmeS1jb250ZW50LWVuZF0ge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kLFxyXG5banVzdGlmeS1jb250ZW50LWFyb3VuZF0ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWJldHdlZW4sXHJcbltqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbl0ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHksXHJcbltqdXN0aWZ5LWNvbnRlbnQtZXZlbmx5XSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1pdGVtcy1zdGFydCxcclxuW2FsaWduLWl0ZW1zLXN0YXJ0XSB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIsXHJcblthbGlnbi1pdGVtcy1jZW50ZXJdIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24taXRlbXMtZW5kLFxyXG5bYWxpZ24taXRlbXMtZW5kXSB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCxcclxuW2FsaWduLWl0ZW1zLXN0cmV0Y2hdIHtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLWl0ZW1zLWJhc2VsaW5lLFxyXG5bYWxpZ24taXRlbXMtYmFzZWxpbmVdIHtcclxuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC11dGlscy5jc3MubWFwICovXHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9DOlxcdXNlcnNcXGtsZW1lcnNvbiByb2RyaWd1ZXNcXGdpdGh1YlxcYXBwYmFyYmVyXFxhcHBiYXJiZXIvc3JjXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiLCJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNWRiIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XHJcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xyXG5cclxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXHJcbjpyb290IHtcclxuICAvKiogcHJpbWFyeSAqKi9cclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcclxuXHJcbiAgLyoqIHNlY29uZGFyeSAqKi9cclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMwY2QxZTg7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI0ZDZlYTtcclxuXHJcbiAgLyoqIHRlcnRpYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTEyLCA2OCwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzYzM2NlMDtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xyXG5cclxuICAvKiogc3VjY2VzcyAqKi9cclxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMjhlMDcwO1xyXG5cclxuICAvKiogd2FybmluZyAqKi9cclxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xyXG5cclxuICAvKiogZGFuZ2VyICoqL1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XHJcblxyXG4gIC8qKiBkYXJrICoqL1xyXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XHJcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XHJcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcclxuXHJcbiAgLyoqIG1lZGl1bSAqKi9cclxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XHJcblxyXG4gIC8qKiBsaWdodCAqKi9cclxuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcclxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XHJcbn1cclxuIiwiLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMwY2QxZTg7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDEyLCAyMDksIDIzMjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMwYmI4Y2M7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjRkNmVhO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\users\klemerson rodrigues\github\appbarber\appbarber\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! C:\users\klemerson rodrigues\github\appbarber\appbarber\src\global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map