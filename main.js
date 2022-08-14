/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Orbitron-VariableFont_wght.ttf */ "./src/Orbitron-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Orbitron\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  font-family: \"Orbitron\";\r\n}\r\n\r\n#content {\r\n  background: #f34f85;\r\n  width: 100%;\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: inherit;\r\n}\r\n\r\n.tab-container {\r\n  background-color: #242c44;\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  overflow-y: visible;\r\n  color: white;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n  box-shadow: 10px 20px 0px 0px black;\r\n}\r\n\r\n.butt-container {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  top: 0;\r\n  background-color: inherit;\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  background-color: #e1287e;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: inherit;\r\n  margin: 10px;\r\n  font-size: 1rem;\r\n  border: 0px solid transparent;\r\n  box-shadow: 3px 2px 0px 0px black;\r\n}\r\n\r\nbutton:hover {\r\n  color: black;\r\n  background-color: #f9f871;\r\n  border: 0px solid transparent;\r\n}\r\n\r\nbutton:active {\r\n  color: black;\r\n  background-color: #f9f871;\r\n  box-shadow: -2px -2px 0px 0px black;\r\n}\r\n\r\n.active-butt {\r\n  background-color: #ffeeca;\r\n  color: black;\r\n  pointer-events: none;\r\n  box-shadow: 1px 1px 0px 0px black;\r\n  font-weight: bold;\r\n}\r\n\r\n.h1-header {\r\n  color: white;\r\n  font-size: 5rem;\r\n  margin-block-start: 0.1rem;\r\n  margin-block-end: 0;\r\n  position: relative;\r\n  text-shadow: 2px 15px black;\r\n}\r\n\r\n.h2-header {\r\n  color: white;\r\n  font-size: 1.7rem;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0.1rem;\r\n  position: relative;\r\n  margin-top: -20px;\r\n  font-weight: lighter;\r\n  text-shadow: 2px 2px black;\r\n}\r\n\r\n.line-header {\r\n  width: 100vw;\r\n  height: 2rem;\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 2.5rem;\r\n  z-index: 0;\r\n}\r\n\r\n.header {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.background-lines {\r\n  background-color: #161920;\r\n  height: 100vh;\r\n  width: 40px;\r\n  position: absolute;\r\n}\r\n\r\n.background-rec {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  top: 0px;\r\n}\r\n\r\n.text-container {\r\n  padding: 10px;\r\n}\r\n\r\n.tab-text {\r\n  position: relative;\r\n}\r\n\r\n.content-container {\r\n  position: relative;\r\n}\r\n\r\n.tab {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 40px;\r\n  min-height: 60vh;\r\n}\r\n\r\n.big-h1 {\r\n  font-size: 2.8rem;\r\n  color: #f9f871;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.menu-tab {\r\n  background-color: #161920;\r\n}\r\n\r\n.card-container {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.menu-card {\r\n  position: relative;\r\n  border: 3px solid #008495;\r\n  padding: 10px;\r\n  width: -webkit-fill-available;\r\n  display: inline-block;\r\n}\r\n\r\n.menu-card:hover {\r\n  background-color: #242c44;\r\n}\r\n\r\n.menu-corner {\r\n  width: 100%;\r\n  height: 0px;\r\n  border-top: 10px solid #008495;\r\n  border-right: 40px solid transparent;\r\n}\r\n\r\n.image-container {\r\n  background-color: #e7efff;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  padding: 10px;\r\n  box-shadow: 4px 4px 0px 0px #525974;\r\n}\r\n\r\n.qr-code {\r\n  height: 200px;\r\n}\r\n\r\n.contact-container {\r\n  display: flex;\r\n  gap: 2rem;\r\n  padding: 20px 10px 50px 10px;\r\n  background-color: #161920;\r\n  align-items: center;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin-top: auto;\r\n}\r\n\r\n.gh-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.gh-container:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-container {\r\n  width: 20px;\r\n}\r\n\r\n@media (max-width: 550px) {\r\n\r\n  .h1-header {\r\n    font-size: 3.7rem;\r\n  }\r\n\r\n  .tab {\r\n    padding: 20px;\r\n  }\r\n\r\n  .big-h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .menu-title {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .footer {\r\n\t  font-size: 12px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 650px) {\r\n\t.contact-container {\r\n     flex-direction: column;\r\n   }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Orbitron\";\r\n  src: url(\"./Orbitron-VariableFont_wght.ttf\") format(\"truetype\"),\r\n    url(\"./Orbitron-VariableFont_wght.ttf\") format(\"truetype\");\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  font-family: \"Orbitron\";\r\n}\r\n\r\n#content {\r\n  background: #f34f85;\r\n  width: 100%;\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: inherit;\r\n}\r\n\r\n.tab-container {\r\n  background-color: #242c44;\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  overflow-y: visible;\r\n  color: white;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n  box-shadow: 10px 20px 0px 0px black;\r\n}\r\n\r\n.butt-container {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  top: 0;\r\n  background-color: inherit;\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nbutton {\r\n  background-color: #e1287e;\r\n  color: white;\r\n  padding: 1rem;\r\n  font-family: inherit;\r\n  margin: 10px;\r\n  font-size: 1rem;\r\n  border: 0px solid transparent;\r\n  box-shadow: 3px 2px 0px 0px black;\r\n}\r\n\r\nbutton:hover {\r\n  color: black;\r\n  background-color: #f9f871;\r\n  border: 0px solid transparent;\r\n}\r\n\r\nbutton:active {\r\n  color: black;\r\n  background-color: #f9f871;\r\n  box-shadow: -2px -2px 0px 0px black;\r\n}\r\n\r\n.active-butt {\r\n  background-color: #ffeeca;\r\n  color: black;\r\n  pointer-events: none;\r\n  box-shadow: 1px 1px 0px 0px black;\r\n  font-weight: bold;\r\n}\r\n\r\n.h1-header {\r\n  color: white;\r\n  font-size: 5rem;\r\n  margin-block-start: 0.1rem;\r\n  margin-block-end: 0;\r\n  position: relative;\r\n  text-shadow: 2px 15px black;\r\n}\r\n\r\n.h2-header {\r\n  color: white;\r\n  font-size: 1.7rem;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0.1rem;\r\n  position: relative;\r\n  margin-top: -20px;\r\n  font-weight: lighter;\r\n  text-shadow: 2px 2px black;\r\n}\r\n\r\n.line-header {\r\n  width: 100vw;\r\n  height: 2rem;\r\n  background-color: black;\r\n  position: absolute;\r\n  top: 2.5rem;\r\n  z-index: 0;\r\n}\r\n\r\n.header {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.background-lines {\r\n  background-color: #161920;\r\n  height: 100vh;\r\n  width: 40px;\r\n  position: absolute;\r\n}\r\n\r\n.background-rec {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  top: 0px;\r\n}\r\n\r\n.text-container {\r\n  padding: 10px;\r\n}\r\n\r\n.tab-text {\r\n  position: relative;\r\n}\r\n\r\n.content-container {\r\n  position: relative;\r\n}\r\n\r\n.tab {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 40px;\r\n  min-height: 60vh;\r\n}\r\n\r\n.big-h1 {\r\n  font-size: 2.8rem;\r\n  color: #f9f871;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.menu-tab {\r\n  background-color: #161920;\r\n}\r\n\r\n.card-container {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.menu-card {\r\n  position: relative;\r\n  border: 3px solid #008495;\r\n  padding: 10px;\r\n  width: -webkit-fill-available;\r\n  display: inline-block;\r\n}\r\n\r\n.menu-card:hover {\r\n  background-color: #242c44;\r\n}\r\n\r\n.menu-corner {\r\n  width: 100%;\r\n  height: 0px;\r\n  border-top: 10px solid #008495;\r\n  border-right: 40px solid transparent;\r\n}\r\n\r\n.image-container {\r\n  background-color: #e7efff;\r\n  width: fit-content;\r\n  height: fit-content;\r\n  padding: 10px;\r\n  box-shadow: 4px 4px 0px 0px #525974;\r\n}\r\n\r\n.qr-code {\r\n  height: 200px;\r\n}\r\n\r\n.contact-container {\r\n  display: flex;\r\n  gap: 2rem;\r\n  padding: 20px 10px 50px 10px;\r\n  background-color: #161920;\r\n  align-items: center;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin-top: auto;\r\n}\r\n\r\n.gh-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.gh-container:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-container {\r\n  width: 20px;\r\n}\r\n\r\n@media (max-width: 550px) {\r\n\r\n  .h1-header {\r\n    font-size: 3.7rem;\r\n  }\r\n\r\n  .tab {\r\n    padding: 20px;\r\n  }\r\n\r\n  .big-h1 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .menu-title {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .footer {\r\n\t  font-size: 12px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 650px) {\r\n\t.contact-container {\r\n     flex-direction: column;\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _qrlinkedin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qrlinkedin.png */ "./src/qrlinkedin.png");


const contact = () => {
  const title = "Contact";
  const contactTab = document.createElement("div");
  contactTab.classList.add("tab");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const qrCode = new Image();
  qrCode.src = _qrlinkedin_png__WEBPACK_IMPORTED_MODULE_0__;
  qrCode.classList.add("qr-code");

  const contactText = document.createElement("h1");
  contactText.classList.add("contact-text");
  contactText.innerHTML = `holophone: 22554646BA <br/><br/> 0.1ms response time <br/><br/> Available 24/7 `;

  contactContainer.appendChild(imageContainer);
  contactContainer.appendChild(contactText);
  imageContainer.appendChild(qrCode);
  contactTab.appendChild(contactContainer);

  return { title: title, tab: contactTab };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
  const footerEl = document.createElement("footer");
  footerEl.classList.add("footer");

  const ghContainer = document.createElement("div");
  ghContainer.classList.add("gh-container");
  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");
  const text = document.createElement("p");

  ghContainer.onclick = () => window.open("https://github.com/moromichele");

  text.textContent = "moromichele";
  iconContainer.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>';
  const credits = document.createElement("p");

  credits.innerHTML = `QR code generated on <a href="https://www.qrcodechimp.com/">qrcodechimp</a>`;

  ghContainer.appendChild(iconContainer);
  ghContainer.appendChild(text);
  footerEl.appendChild(ghContainer);
  footerEl.appendChild(credits);

  return footerEl;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const header = () => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  const title = document.createElement("h1");
  title.classList.add("h1-header");
  title.textContent = "ラーメン以上";

  const subTitle = document.createElement("h2");
  subTitle.classList.add("h2-header");
  subTitle.textContent = "Beyond Ramen";


  const lineHeader = document.createElement("div");
  lineHeader.classList.add("line-header");
  headerEl.appendChild(lineHeader);
  headerEl.appendChild(title);
  headerEl.appendChild(subTitle);
  return headerEl;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homepage = () => {
  const title = "Homepage";

  const homepageEl = document.createElement("div");
  homepageEl.classList.add("tab");
  const rec = document.createElement("div");
  rec.classList.add("background-rec");

  for (var i = 0; i < 14; i++) {
    const line = document.createElement("div");
    line.classList.add("background-lines");
    line.style.transform = `translate(calc(-200px + ${
      i * 100
    }px), -20vh) rotate(45deg)`;
    rec.appendChild(line);
  }

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const text1 = document.createElement("h1");
  text1.classList.add("tab-text");
  text1.innerHTML = 'Experience the <b class="big-h1">REAL</b> fake RAMEN';

  const text2 = document.createElement("p");
  text2.classList.add("tab-text");
  text2.innerHTML =
    "If it looks like ramen, tastes like ramen, feels like ramen, but you're not human... Its BEYOND RAMEN.";

  const appoggio = document.createElement("div");

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  contentContainer.appendChild(rec);
  contentContainer.appendChild(textContainer);

  homepageEl.appendChild(contentContainer);

  return { title: title, tab: homepageEl };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuCard = (name, description) => {
  console.log(name + description);
  const container = document.createElement("div");
  container.classList.add("card-container");
  const card = document.createElement("div");
  card.classList.add("menu-card");
  const corner = document.createElement("div");
  corner.classList.add("menu-corner");
  const title = document.createElement("H1");
  title.classList.add("big-h1");
  title.textContent = name + ".vrr";
  const desc = document.createElement("p");
  desc.textContent = description;

  card.appendChild(title);
  card.appendChild(desc);
  container.appendChild(card);
  container.appendChild(corner);
  return container;
};

const menu = () => {
  const title = "Menu";

  const menuTab = document.createElement("div");
  menuTab.classList.add("tab");
  menuTab.classList.add("menu-tab");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "「　Our file selection　」"
  menuTitle.classList.add("menu-title")
  menuTab.appendChild(menuTitle);


  menuTab.appendChild(
    menuCard("electric_sheep", "What dreams are supposedly made of")
  );
  menuTab.appendChild(menuCard("tonkatsu", "A future classic"));
  menuTab.appendChild(
    menuCard(
      "pineapple_ramen",
      "For the android with no self respect installed"
    )
  );
  menuTab.appendChild(
    menuCard("the_ninja", "Smell value disabled, surprise your sensors")
  );
  return { title: title, tab: menuTab };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/tabsLogic.js":
/*!**************************!*\
  !*** ./src/tabsLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttons": () => (/* binding */ buttons),
/* harmony export */   "changeTab": () => (/* binding */ changeTab),
/* harmony export */   "tabContainer": () => (/* binding */ tabContainer)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const tabs = [(0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])().tab, (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().tab, (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])().tab];

const changeTab = (i) => {
  for (var j = 0; j < tabs.length; j++) {
    const butt = document.getElementById(`butt${j}`);
    if (j === i) {
      butt.classList.add("active-butt");
    } else butt.classList.remove("active-butt");
  }

  const tabContainer = document.querySelector(".tab-container");
  tabContainer.innerHTML = "";
  tabContainer.appendChild(tabs[i]);
};

const buttons = () => {
  const buttContainer = document.createElement("nav");
  buttContainer.classList.add("butt-container");
  const tab1butt = document.createElement("button");
  const tab2butt = document.createElement("button");
  const tab3butt = document.createElement("button");
  tab1butt.id = "butt0";
  tab2butt.id = "butt1";
  tab3butt.id = "butt2";
  tab1butt.innerHTML = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"])().title;
  tab2butt.innerHTML = (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().title;
  tab3butt.innerHTML = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])().title;
  buttContainer.appendChild(tab1butt);
  buttContainer.appendChild(tab2butt);
  buttContainer.appendChild(tab3butt);

  tab1butt.onclick = () => changeTab(0);
  tab2butt.onclick = () => changeTab(1);
  tab3butt.onclick = () => changeTab(2);

  return buttContainer;
};

const tabContainer = () => {
  const tabC = document.createElement("div");
  tabC.classList.add("tab-container");
  tabC.appendChild((0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])().tab);

  return tabC;
};






/***/ }),

/***/ "./src/Orbitron-VariableFont_wght.ttf":
/*!********************************************!*\
  !*** ./src/Orbitron-VariableFont_wght.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "453377cb91a4554c36ce.ttf";

/***/ }),

/***/ "./src/qrlinkedin.png":
/*!****************************!*\
  !*** ./src/qrlinkedin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d31736ee69b90c5d241b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _tabsLogic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabsLogic.js */ "./src/tabsLogic.js");








const c = document.querySelector("#content");

const initPage = () => {
	c.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
	c.appendChild((0,_tabsLogic_js__WEBPACK_IMPORTED_MODULE_6__.buttons)());
	c.appendChild((0,_tabsLogic_js__WEBPACK_IMPORTED_MODULE_6__.tabContainer)());
	c.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
	(0,_tabsLogic_js__WEBPACK_IMPORTED_MODULE_6__.changeTab)(1); //go to homepage
}

initPage()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSw0QkFBNEIsa0NBQWtDLHFDQUFxQyw2QkFBNkIsS0FBSyxvQkFBb0IsZ0NBQWdDLGlKQUFpSixLQUFLLGNBQWMsbUJBQW1CLG9CQUFvQixnQkFBZ0IsZ0NBQWdDLEtBQUssa0JBQWtCLDBCQUEwQixrQkFBa0IscUJBQXFCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHNCQUFzQixLQUFLLHdCQUF3QixnQ0FBZ0MsaUJBQWlCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLDBCQUEwQix5QkFBeUIsMENBQTBDLEtBQUsseUJBQXlCLGtCQUFrQixxQkFBcUIsYUFBYSxnQ0FBZ0MsaUJBQWlCLG9CQUFvQiw4QkFBOEIsS0FBSyxnQkFBZ0IsZ0NBQWdDLG1CQUFtQixvQkFBb0IsMkJBQTJCLG1CQUFtQixzQkFBc0Isb0NBQW9DLHdDQUF3QyxLQUFLLHNCQUFzQixtQkFBbUIsZ0NBQWdDLG9DQUFvQyxLQUFLLHVCQUF1QixtQkFBbUIsZ0NBQWdDLDBDQUEwQyxLQUFLLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLDJCQUEyQix3Q0FBd0Msd0JBQXdCLEtBQUssb0JBQW9CLG1CQUFtQixzQkFBc0IsaUNBQWlDLDBCQUEwQix5QkFBeUIsa0NBQWtDLEtBQUssb0JBQW9CLG1CQUFtQix3QkFBd0IsNEJBQTRCLCtCQUErQix5QkFBeUIsd0JBQXdCLDJCQUEyQixpQ0FBaUMsS0FBSyxzQkFBc0IsbUJBQW1CLG1CQUFtQiw4QkFBOEIseUJBQXlCLGtCQUFrQixpQkFBaUIsS0FBSyxpQkFBaUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLGtCQUFrQix5QkFBeUIsS0FBSyx5QkFBeUIsa0JBQWtCLG1CQUFtQixvQ0FBb0MseUJBQXlCLHVCQUF1QixlQUFlLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLG1CQUFtQix5QkFBeUIsS0FBSyw0QkFBNEIseUJBQXlCLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLG9CQUFvQix1QkFBdUIsS0FBSyxpQkFBaUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsS0FBSyxtQkFBbUIsZ0NBQWdDLEtBQUsseUJBQXlCLDBCQUEwQixLQUFLLG9CQUFvQix5QkFBeUIsZ0NBQWdDLG9CQUFvQixvQ0FBb0MsNEJBQTRCLEtBQUssMEJBQTBCLGdDQUFnQyxLQUFLLHNCQUFzQixrQkFBa0Isa0JBQWtCLHFDQUFxQywyQ0FBMkMsS0FBSywwQkFBMEIsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsb0JBQW9CLDBDQUEwQyxLQUFLLGtCQUFrQixvQkFBb0IsS0FBSyw0QkFBNEIsb0JBQW9CLGdCQUFnQixtQ0FBbUMsZ0NBQWdDLDBCQUEwQixLQUFLLFdBQVcsNEJBQTRCLEtBQUssaUJBQWlCLG9CQUFvQixrQkFBa0Isb0NBQW9DLHVCQUF1QixLQUFLLHVCQUF1QixvQkFBb0IsMEJBQTBCLGdCQUFnQixLQUFLLDZCQUE2QixzQkFBc0IsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUssbUNBQW1DLHNCQUFzQiwwQkFBMEIsT0FBTyxnQkFBZ0Isc0JBQXNCLE9BQU8sbUJBQW1CLHdCQUF3QixPQUFPLHVCQUF1QiwwQkFBMEIsT0FBTyxtQkFBbUIsd0JBQXdCLE9BQU8sU0FBUyxtQ0FBbUMsMEJBQTBCLGdDQUFnQyxRQUFRLEtBQUssdUJBQXVCO0FBQzN4VztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0J0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERTO0FBQ1E7QUFDRjtBQUNuQztBQUNBLGNBQWMsb0RBQUksUUFBUSx3REFBUSxRQUFRLHVEQUFPO0FBQ2pEO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0RBQUk7QUFDM0IsdUJBQXVCLHdEQUFRO0FBQy9CLHVCQUF1Qix1REFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdEQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDUTtBQUNRO0FBQ0Y7QUFDRjtBQUNBO0FBQ2lDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBTTtBQUNyQixlQUFlLHNEQUFPO0FBQ3RCLGVBQWUsMkRBQVk7QUFDM0IsZUFBZSxzREFBTTtBQUNyQixDQUFDLHdEQUFTLEtBQUs7QUFDZjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vMDRyZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMDRyZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMDRyZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYnNMb2dpYy5qcyIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMDRyZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMDRyZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMDRyZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8wNHJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLzA0cmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vT3JiaXRyb24tVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjM0Zjg1O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmM0NDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHZpc2libGU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAyMHB4IDBweCAwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5idXR0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTEyODdlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3gtc2hhZG93OiAzcHggMnB4IDBweCAwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmODcxO1xcclxcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Zjg3MTtcXHJcXG4gIGJveC1zaGFkb3c6IC0ycHggLTJweCAwcHggMHB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWJ1dHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWVjYTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4IGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5oMS1oZWFkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjFyZW07XFxyXFxuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAxNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaDItaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xcclxcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC4xcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZS1oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIuNXJlbTtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kLWxpbmVzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE5MjA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kLXJlYyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi10ZXh0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLWgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44cmVtO1xcclxcbiAgY29sb3I6ICNmOWY4NzE7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRhYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxOTIwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDA4NDk1O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDJjNDQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvcm5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMDA4NDk1O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA0MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2VmZmY7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMHB4IDBweCAjNTI1OTc0O1xcclxcbn1cXHJcXG5cXHJcXG4ucXItY29kZSB7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMTBweCA1MHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxOTIwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2gtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2gtY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXHJcXG5cXHJcXG4gIC5oMS1oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDMuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWIge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJpZy1oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyIHtcXHJcXG5cXHQgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuXFx0LmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkI7OERBQzREO0FBQzlEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLE1BQU07RUFDTix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtHQUNDLGVBQWU7RUFDaEI7O0FBRUY7O0FBRUE7Q0FDQztLQUNJLHNCQUFzQjtHQUN4QjtBQUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL09yYml0cm9uLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSxcXHJcXG4gICAgdXJsKFxcXCIuL09yYml0cm9uLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMzRmODU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyYzQ0O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogdmlzaWJsZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDIwcHggMHB4IDBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMTI4N2U7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAycHggMHB4IDBweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY4NzE7XFxyXFxuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmODcxO1xcclxcbiAgYm94LXNoYWRvdzogLTJweCAtMnB4IDBweCAwcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtYnV0dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWNhO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmgxLWhlYWRlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuMXJlbTtcXHJcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDE1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5oMi1oZWFkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxyXFxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjFyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5saW5lLWhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMi41cmVtO1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtbGluZXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTkyMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtcmVjIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLXRleHQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxyXFxufVxcclxcblxcclxcbi5iaWctaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjhyZW07XFxyXFxuICBjb2xvcjogI2Y5Zjg3MTtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdGFiIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE5MjA7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDg0OTU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmM0NDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29ybmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAwcHg7XFxyXFxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMwMDg0OTU7XFxyXFxuICBib3JkZXItcmlnaHQ6IDQwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWZmZjtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogNHB4IDRweCAwcHggMHB4ICM1MjU5NzQ7XFxyXFxufVxcclxcblxcclxcbi5xci1jb2RlIHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogMjBweCAxMHB4IDUwcHggMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE5MjA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5naC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5naC1jb250YWluZXI6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcblxcclxcbiAgLmgxLWhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYiB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYmlnLWgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb290ZXIge1xcclxcblxcdCAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG5cXHQuY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUXJDb2RlIGZyb20gXCIuL3FybGlua2VkaW4ucG5nXCI7XHJcblxyXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gXCJDb250YWN0XCI7XHJcbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG5cclxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XHJcbiAgY29uc3QgcXJDb2RlID0gbmV3IEltYWdlKCk7XHJcbiAgcXJDb2RlLnNyYyA9IFFyQ29kZTtcclxuICBxckNvZGUuY2xhc3NMaXN0LmFkZChcInFyLWNvZGVcIik7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXRleHRcIik7XHJcbiAgY29udGFjdFRleHQuaW5uZXJIVE1MID0gYGhvbG9waG9uZTogMjI1NTQ2NDZCQSA8YnIvPjxici8+IDAuMW1zIHJlc3BvbnNlIHRpbWUgPGJyLz48YnIvPiBBdmFpbGFibGUgMjQvNyBgO1xyXG5cclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcclxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxckNvZGUpO1xyXG4gIGNvbnRhY3RUYWIuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgdGFiOiBjb250YWN0VGFiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0O1xyXG4iLCJjb25zdCBmb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGZvb3RlckVsLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcblxyXG4gIGNvbnN0IGdoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBnaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ2gtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImljb24tY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgZ2hDb250YWluZXIub25jbGljayA9ICgpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL21vcm9taWNoZWxlXCIpO1xyXG5cclxuICB0ZXh0LnRleHRDb250ZW50ID0gXCJtb3JvbWljaGVsZVwiO1xyXG4gIGljb25Db250YWluZXIuaW5uZXJIVE1MID1cclxuICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMS4yIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPVwiTTQwMCAzMkg0OEMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDh6TTI3Ny4zIDQxNS43Yy04LjQgMS41LTExLjUtMy43LTExLjUtOCAwLTUuNC4yLTMzIC4yLTU1LjMgMC0xNS42LTUuMi0yNS41LTExLjMtMzAuNyAzNy00LjEgNzYtOS4yIDc2LTczLjEgMC0xOC4yLTYuNS0yNy4zLTE3LjEtMzkgMS43LTQuMyA3LjQtMjItMS43LTQ1LTEzLjktNC4zLTQ1LjcgMTcuOS00NS43IDE3LjktMTMuMi0zLjctMjcuNS01LjYtNDEuNi01LjYtMTQuMSAwLTI4LjQgMS45LTQxLjYgNS42IDAgMC0zMS44LTIyLjItNDUuNy0xNy45LTkuMSAyMi45LTMuNSA0MC42LTEuNyA0NS0xMC42IDExLjctMTUuNiAyMC44LTE1LjYgMzkgMCA2My42IDM3LjMgNjkgNzQuMyA3My4xLTQuOCA0LjMtOS4xIDExLjctMTAuNiAyMi4zLTkuNSA0LjMtMzMuOCAxMS43LTQ4LjMtMTMuOS05LjEtMTUuOC0yNS41LTE3LjEtMjUuNS0xNy4xLTE2LjItLjItMS4xIDEwLjItMS4xIDEwLjIgMTAuOCA1IDE4LjQgMjQuMiAxOC40IDI0LjIgOS43IDI5LjcgNTYuMSAxOS43IDU2LjEgMTkuNyAwIDEzLjkuMiAzNi41LjIgNDAuNiAwIDQuMy0zIDkuNS0xMS41IDgtNjYtMjIuMS0xMTIuMi04NC45LTExMi4yLTE1OC4zIDAtOTEuOCA3MC4yLTE2MS41IDE2Mi0xNjEuNVMzODggMTY1LjYgMzg4IDI1Ny40Yy4xIDczLjQtNDQuNyAxMzYuMy0xMTAuNyAxNTguM3ptLTk4LjEtNjEuMWMtMS45LjQtMy43LS40LTMuOS0xLjctLjItMS41IDEuMS0yLjggMy0zLjIgMS45LS4yIDMuNy42IDMuOSAxLjkuMyAxLjMtMSAyLjYtMyAzem0tOS41LS45YzAgMS4zLTEuNSAyLjQtMy41IDIuNC0yLjIuMi0zLjctLjktMy43LTIuNCAwLTEuMyAxLjUtMi40IDMuNS0yLjQgMS45LS4yIDMuNy45IDMuNyAyLjR6bS0xMy43LTEuMWMtLjQgMS4zLTIuNCAxLjktNC4xIDEuMy0xLjktLjQtMy4yLTEuOS0yLjgtMy4yLjQtMS4zIDIuNC0xLjkgNC4xLTEuNSAyIC42IDMuMyAyLjEgMi44IDMuNHptLTEyLjMtNS40Yy0uOSAxLjEtMi44LjktNC4zLS42LTEuNS0xLjMtMS45LTMuMi0uOS00LjEuOS0xLjEgMi44LS45IDQuMy42IDEuMyAxLjMgMS44IDMuMy45IDQuMXptLTkuMS05LjFjLS45LjYtMi42IDAtMy43LTEuNXMtMS4xLTMuMiAwLTMuOWMxLjEtLjkgMi44LS4yIDMuNyAxLjMgMS4xIDEuNSAxLjEgMy4zIDAgNC4xem0tNi41LTkuN2MtLjkuOS0yLjQuNC0zLjUtLjYtMS4xLTEuMy0xLjMtMi44LS40LTMuNS45LS45IDIuNC0uNCAzLjUuNiAxLjEgMS4zIDEuMyAyLjguNCAzLjV6bS02LjctNy40Yy0uNC45LTEuNyAxLjEtMi44LjQtMS4zLS42LTEuOS0xLjctMS41LTIuNi40LS42IDEuNS0uOSAyLjgtLjQgMS4zLjcgMS45IDEuOCAxLjUgMi42elwiLz48L3N2Zz4nO1xyXG4gIGNvbnN0IGNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgY3JlZGl0cy5pbm5lckhUTUwgPSBgUVIgY29kZSBnZW5lcmF0ZWQgb24gPGEgaHJlZj1cImh0dHBzOi8vd3d3LnFyY29kZWNoaW1wLmNvbS9cIj5xcmNvZGVjaGltcDwvYT5gO1xyXG5cclxuICBnaENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcclxuICBnaENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICBmb290ZXJFbC5hcHBlbmRDaGlsZChnaENvbnRhaW5lcik7XHJcbiAgZm9vdGVyRWwuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XHJcblxyXG4gIHJldHVybiBmb290ZXJFbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIiwiY29uc3QgaGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXJFbC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoMS1oZWFkZXJcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIuODqeODvOODoeODs+S7peS4ilwiO1xyXG5cclxuICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBzdWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaDItaGVhZGVyXCIpO1xyXG4gIHN1YlRpdGxlLnRleHRDb250ZW50ID0gXCJCZXlvbmQgUmFtZW5cIjtcclxuXHJcblxyXG4gIGNvbnN0IGxpbmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxpbmVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImxpbmUtaGVhZGVyXCIpO1xyXG4gIGhlYWRlckVsLmFwcGVuZENoaWxkKGxpbmVIZWFkZXIpO1xyXG4gIGhlYWRlckVsLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBoZWFkZXJFbC5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XHJcbiAgcmV0dXJuIGhlYWRlckVsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJjb25zdCBob21lcGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB0aXRsZSA9IFwiSG9tZXBhZ2VcIjtcclxuXHJcbiAgY29uc3QgaG9tZXBhZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZXBhZ2VFbC5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG4gIGNvbnN0IHJlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmVjLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kLXJlY1wiKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNDsgaSsrKSB7XHJcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmUuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtbGluZXNcIik7XHJcbiAgICBsaW5lLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoY2FsYygtMjAwcHggKyAke1xyXG4gICAgICBpICogMTAwXHJcbiAgICB9cHgpLCAtMjB2aCkgcm90YXRlKDQ1ZGVnKWA7XHJcbiAgICByZWMuYXBwZW5kQ2hpbGQobGluZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIHRleHQxLmNsYXNzTGlzdC5hZGQoXCJ0YWItdGV4dFwiKTtcclxuICB0ZXh0MS5pbm5lckhUTUwgPSAnRXhwZXJpZW5jZSB0aGUgPGIgY2xhc3M9XCJiaWctaDFcIj5SRUFMPC9iPiBmYWtlIFJBTUVOJztcclxuXHJcbiAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0ZXh0Mi5jbGFzc0xpc3QuYWRkKFwidGFiLXRleHRcIik7XHJcbiAgdGV4dDIuaW5uZXJIVE1MID1cclxuICAgIFwiSWYgaXQgbG9va3MgbGlrZSByYW1lbiwgdGFzdGVzIGxpa2UgcmFtZW4sIGZlZWxzIGxpa2UgcmFtZW4sIGJ1dCB5b3UncmUgbm90IGh1bWFuLi4uIEl0cyBCRVlPTkQgUkFNRU4uXCI7XHJcblxyXG4gIGNvbnN0IGFwcG9nZ2lvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZWMpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XHJcblxyXG4gIGhvbWVwYWdlRWwuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB7IHRpdGxlOiB0aXRsZSwgdGFiOiBob21lcGFnZUVsIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcclxuIiwiY29uc3QgbWVudUNhcmQgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhuYW1lICsgZGVzY3JpcHRpb24pO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XHJcbiAgY29uc3QgY29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb3JuZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29ybmVyXCIpO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkgxXCIpO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJiaWctaDFcIik7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lICsgXCIudnJyXCI7XHJcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChkZXNjKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcm5lcik7XHJcbiAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBcIk1lbnVcIjtcclxuXHJcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGFiXCIpO1xyXG5cclxuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCLjgIzjgIBPdXIgZmlsZSBzZWxlY3Rpb27jgIDjgI1cIlxyXG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKVxyXG4gIG1lbnVUYWIuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuXHJcblxyXG4gIG1lbnVUYWIuYXBwZW5kQ2hpbGQoXHJcbiAgICBtZW51Q2FyZChcImVsZWN0cmljX3NoZWVwXCIsIFwiV2hhdCBkcmVhbXMgYXJlIHN1cHBvc2VkbHkgbWFkZSBvZlwiKVxyXG4gICk7XHJcbiAgbWVudVRhYi5hcHBlbmRDaGlsZChtZW51Q2FyZChcInRvbmthdHN1XCIsIFwiQSBmdXR1cmUgY2xhc3NpY1wiKSk7XHJcbiAgbWVudVRhYi5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVDYXJkKFxyXG4gICAgICBcInBpbmVhcHBsZV9yYW1lblwiLFxyXG4gICAgICBcIkZvciB0aGUgYW5kcm9pZCB3aXRoIG5vIHNlbGYgcmVzcGVjdCBpbnN0YWxsZWRcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudVRhYi5hcHBlbmRDaGlsZChcclxuICAgIG1lbnVDYXJkKFwidGhlX25pbmphXCIsIFwiU21lbGwgdmFsdWUgZGlzYWJsZWQsIHN1cnByaXNlIHlvdXIgc2Vuc29yc1wiKVxyXG4gICk7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IHRpdGxlLCB0YWI6IG1lbnVUYWIgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiIsImltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL2hvbWVwYWdlLmpzXCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuXHJcbmNvbnN0IHRhYnMgPSBbbWVudSgpLnRhYiwgaG9tZXBhZ2UoKS50YWIsIGNvbnRhY3QoKS50YWJdO1xyXG5cclxuY29uc3QgY2hhbmdlVGFiID0gKGkpID0+IHtcclxuICBmb3IgKHZhciBqID0gMDsgaiA8IHRhYnMubGVuZ3RoOyBqKyspIHtcclxuICAgIGNvbnN0IGJ1dHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnV0dCR7an1gKTtcclxuICAgIGlmIChqID09PSBpKSB7XHJcbiAgICAgIGJ1dHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1idXR0XCIpO1xyXG4gICAgfSBlbHNlIGJ1dHQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1idXR0XCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWItY29udGFpbmVyXCIpO1xyXG4gIHRhYkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzW2ldKTtcclxufTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgYnV0dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgdGFiMWJ1dHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IHRhYjJidXR0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCB0YWIzYnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgdGFiMWJ1dHQuaWQgPSBcImJ1dHQwXCI7XHJcbiAgdGFiMmJ1dHQuaWQgPSBcImJ1dHQxXCI7XHJcbiAgdGFiM2J1dHQuaWQgPSBcImJ1dHQyXCI7XHJcbiAgdGFiMWJ1dHQuaW5uZXJIVE1MID0gbWVudSgpLnRpdGxlO1xyXG4gIHRhYjJidXR0LmlubmVySFRNTCA9IGhvbWVwYWdlKCkudGl0bGU7XHJcbiAgdGFiM2J1dHQuaW5uZXJIVE1MID0gY29udGFjdCgpLnRpdGxlO1xyXG4gIGJ1dHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiMWJ1dHQpO1xyXG4gIGJ1dHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiMmJ1dHQpO1xyXG4gIGJ1dHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFiM2J1dHQpO1xyXG5cclxuICB0YWIxYnV0dC5vbmNsaWNrID0gKCkgPT4gY2hhbmdlVGFiKDApO1xyXG4gIHRhYjJidXR0Lm9uY2xpY2sgPSAoKSA9PiBjaGFuZ2VUYWIoMSk7XHJcbiAgdGFiM2J1dHQub25jbGljayA9ICgpID0+IGNoYW5nZVRhYigyKTtcclxuXHJcbiAgcmV0dXJuIGJ1dHRDb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCB0YWJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGFiQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFiQy5jbGFzc0xpc3QuYWRkKFwidGFiLWNvbnRhaW5lclwiKTtcclxuICB0YWJDLmFwcGVuZENoaWxkKGhvbWVwYWdlKCkudGFiKTtcclxuXHJcbiAgcmV0dXJuIHRhYkM7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7XHJcblx0YnV0dG9ucyxcclxuXHR0YWJDb250YWluZXIsXHJcblx0Y2hhbmdlVGFiXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIjtcclxuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL2hvbWVwYWdlLmpzXCI7XHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9oZWFkZXIuanNcIjtcclxuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9mb290ZXIuanNcIjtcclxuaW1wb3J0IHsgY2hhbmdlVGFiLCBidXR0b25zLCB0YWJDb250YWluZXIgfSBmcm9tIFwiLi90YWJzTG9naWMuanNcIjtcclxuXHJcbmNvbnN0IGMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG5jb25zdCBpbml0UGFnZSA9ICgpID0+IHtcclxuXHRjLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcclxuXHRjLmFwcGVuZENoaWxkKGJ1dHRvbnMoKSk7XHJcblx0Yy5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIoKSk7XHJcblx0Yy5hcHBlbmRDaGlsZChmb290ZXIoKSk7XHJcblx0Y2hhbmdlVGFiKDEpOyAvL2dvIHRvIGhvbWVwYWdlXHJcbn1cclxuXHJcbmluaXRQYWdlKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9