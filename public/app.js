/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/app.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/app.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap&subset=cyrillic);"]);
// Module
exports.push([module.i, ":root {\n  --color-red: #e8584e; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #f5f5f5;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px; }\n\n.generator-form {\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.1); }\n  .generator-form__label {\n    display: block;\n    font-size: 14px;\n    cursor: pointer; }\n    .generator-form__label:not(:last-of-type) {\n      margin-bottom: 10px; }\n    .generator-form__label .generator-form__input {\n      margin-top: 4px; }\n  .generator-form__label-asterix {\n    color: var(--color-red); }\n  .generator-form__label_settings {\n    display: flex;\n    align-items: center; }\n  .generator-form__input {\n    display: block;\n    min-width: 250px;\n    height: 40px;\n    padding: 0 10px;\n    font-size: 14px;\n    border: 1px solid #ccc; }\n  .generator-form__controls {\n    display: flex;\n    align-items: center;\n    margin-top: 20px; }\n  .generator-form__submit {\n    display: block;\n    width: 100%;\n    height: 48px;\n    font-size: 16px;\n    color: #fff;\n    border: 1px solid transparent;\n    background: var(--color-red);\n    cursor: pointer;\n    transition: all 0.1s ease-in-out 0s; }\n    .generator-form__submit:hover {\n      color: var(--color-red);\n      background: transparent;\n      border-color: var(--color-red); }\n  .generator-form__reset {\n    height: 32px;\n    margin-left: 10px;\n    font-size: 14px;\n    border: none;\n    background: transparent;\n    cursor: pointer; }\n  .generator-form__additional-settings {\n    margin-top: 10px; }\n  @media (max-width: 768px) {\n    .generator-form {\n      width: 100%; }\n      .generator-form .generator-form__input {\n        width: 100%; } }\n\n.generator-result {\n  width: calc(50% - 20px);\n  padding: 20px;\n  text-align: center;\n  font-size: 30px; }\n  .generator-result__hint {\n    font-size: 40px;\n    font-weight: 600; }\n  .generator-result__greetings {\n    display: none; }\n  .generator-result__value {\n    display: block;\n    font-size: 250%;\n    font-weight: 600; }\n  @media (max-width: 768px) {\n    .generator-result {\n      width: 100%;\n      margin-top: 20px;\n      padding: 0 10px;\n      font-size: 28px; }\n      .generator-result .generator-result__hint {\n        font-size: 32px; }\n      .generator-result .generator-result__value {\n        font-size: 150%; } }\n\n.app {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh; }\n  @media (max-width: 768px) {\n    .app {\n      flex-direction: column;\n      justify-content: flex-start; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_username_generator_username_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/username-generator/username-generator */ "./src/helpers/username-generator/username-generator.ts");
/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/app.scss */ "./src/assets/scss/app.scss");
/* harmony import */ var _assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', () => {
    new _helpers_username_generator_username_generator__WEBPACK_IMPORTED_MODULE_0__["UsernameGenerator"]();
});


/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*\
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/helpers/dom-worker/dom-worker.ts":
/*!**********************************************!*\
  !*** ./src/helpers/dom-worker/dom-worker.ts ***!
  \**********************************************/
/*! exports provided: DomWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomWorker", function() { return DomWorker; });
/* harmony import */ var _utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom-ids */ "./src/utils/dom-ids.ts");
/* harmony import */ var _utils_greetings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/greetings */ "./src/utils/greetings.ts");


class DomWorker {
    constructor({ onFormSubmit, onFormReset, }) {
        this.form.addEventListener('submit', onFormSubmit);
        this.form.addEventListener('reset', onFormReset);
    }
    get form() {
        return document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].form);
    }
    get formInputs() {
        const { elements } = this.form;
        const inputs = [];
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            if (element.dataset.role === 'input') {
                inputs.push(element);
            }
        }
        return inputs;
    }
    get formSettings() {
        const shuffleCheckbox = document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].settingsShuffle);
        return {
            shuffle: shuffleCheckbox ? shuffleCheckbox.checked : false,
        };
    }
    get formSubmit() {
        return document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].formSubmitButton);
    }
    get resultWrapper() {
        return document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].result);
    }
    get greetingsWrapper() {
        return document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].greetingsWrapper);
    }
    toggleHintMessage(hintVisible) {
        const resultHint = document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].resultHint);
        const greetingsWrapper = document.getElementById(_utils_dom_ids__WEBPACK_IMPORTED_MODULE_0__["DOM_IDS"].greetingsWrapper);
        if (resultHint) {
            resultHint.style.display = hintVisible ? 'block' : 'none';
        }
        if (greetingsWrapper) {
            greetingsWrapper.style.display = hintVisible ? 'none' : 'block';
        }
    }
    focusFirstInput() {
        this.formInputs[0].focus();
    }
    focusFormSubmit() {
        this.formSubmit.focus();
    }
    updateResultWrapper(value) {
        this.resultWrapper.innerHTML = value;
    }
    updateGreetings() {
        this.greetingsWrapper.innerHTML = `${Object(_utils_greetings__WEBPACK_IMPORTED_MODULE_1__["getRandomGreetings"])()},`;
    }
}


/***/ }),

/***/ "./src/helpers/username-generator/username-generator.ts":
/*!**************************************************************!*\
  !*** ./src/helpers/username-generator/username-generator.ts ***!
  \**************************************************************/
/*! exports provided: UsernameGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameGenerator", function() { return UsernameGenerator; });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/helpers */ "./src/utils/helpers.ts");
/* harmony import */ var _utils_location_search_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/location-search-handler */ "./src/utils/location-search-handler.ts");
/* harmony import */ var _dom_worker_dom_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-worker/dom-worker */ "./src/helpers/dom-worker/dom-worker.ts");



let ONCE_GENERATED = false;
class UsernameGenerator {
    constructor(options = {
        minSliceResult: 2,
    }) {
        this.options = options;
        this.domWorker = new _dom_worker_dom_worker__WEBPACK_IMPORTED_MODULE_2__["DomWorker"]({
            onFormSubmit: this.onFormSubmit.bind(this),
            onFormReset: this.onFormReset.bind(this),
        });
        this.loadValues();
    }
    onFormSubmit() {
        this.saveValues();
        this.generate();
        if (!ONCE_GENERATED) {
            ONCE_GENERATED = true;
            this.domWorker.toggleHintMessage(false);
        }
    }
    onFormReset() {
        _utils_location_search_handler__WEBPACK_IMPORTED_MODULE_1__["resetData"]();
        this.domWorker.focusFirstInput();
    }
    saveValues() {
        const { formInputs } = this.domWorker;
        const values = formInputs.reduce((acc, input) => {
            if (input.value) {
                acc.push([input.id, input.value]);
            }
            return acc;
        }, []);
        _utils_location_search_handler__WEBPACK_IMPORTED_MODULE_1__["saveData"](values);
    }
    loadValues() {
        const values = _utils_location_search_handler__WEBPACK_IMPORTED_MODULE_1__["getData"]();
        if (!values || !values.length) {
            this.domWorker.focusFirstInput();
            return;
        }
        const { formInputs } = this.domWorker;
        values.forEach((_) => {
            const [key, value] = _.split('=');
            const currentInput = formInputs.find(input => input.id === key);
            if (currentInput) {
                currentInput.value = value;
            }
        });
        this.domWorker.focusFormSubmit();
    }
    sliceValuePart(value) {
        const start = _utils_helpers__WEBPACK_IMPORTED_MODULE_0__["getRandom"](0, value.length - this.options.minSliceResult);
        const sliceLength = _utils_helpers__WEBPACK_IMPORTED_MODULE_0__["getRandom"](1, value.length);
        return value.slice(start, start + sliceLength);
    }
    generate() {
        let values = this.domWorker.formInputs.map((input) => this.sliceValuePart(input.value).toLowerCase());
        if (this.domWorker.formSettings.shuffle) {
            values = _utils_helpers__WEBPACK_IMPORTED_MODULE_0__["shuffleArray"](values);
        }
        this.domWorker.updateResultWrapper(values.join(''));
        this.domWorker.updateGreetings();
    }
}


/***/ }),

/***/ "./src/utils/dom-ids.ts":
/*!******************************!*\
  !*** ./src/utils/dom-ids.ts ***!
  \******************************/
/*! exports provided: DOM_IDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_IDS", function() { return DOM_IDS; });
const DOM_IDS = {
    form: 'generator-form',
    input1: 'input1',
    input2: 'input2',
    input3: 'input3',
    formSubmitButton: 'generator-submit',
    result: 'generator-result',
    resultHint: 'generator-hint',
    greetingsWrapper: 'generator-greetings',
    settingsShuffle: 'shuffle-checkbox',
};


/***/ }),

/***/ "./src/utils/greetings.ts":
/*!********************************!*\
  !*** ./src/utils/greetings.ts ***!
  \********************************/
/*! exports provided: GREETINGS, getRandomGreetings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREETINGS", function() { return GREETINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomGreetings", function() { return getRandomGreetings; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/utils/helpers.ts");

const GREETINGS = [
    'Hey',
    'What\'s up',
    'Privet',
    'How\'s it going',
    'Do you like it',
    'Did you see it',
    'Ah, it\'s you',
    'Listen to my story',
    'Is it you',
    'God bless you',
    'I love you',
    'Looks great',
    'Say it again',
    'Do you remember it'
];
const getRandomGreetings = function () {
    return GREETINGS[Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getRandom"])(0, GREETINGS.length - 1)];
};


/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/*! exports provided: getRandom, shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
function getRandom(min, max) {
    return min + Math.round((max - min) * Math.random());
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


/***/ }),

/***/ "./src/utils/location-search-handler.ts":
/*!**********************************************!*\
  !*** ./src/utils/location-search-handler.ts ***!
  \**********************************************/
/*! exports provided: getData, saveData, resetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveData", function() { return saveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetData", function() { return resetData; });
const getData = function () {
    const { search } = window.location;
    return search
        ? search.slice(1, window.location.search.length).split('&')
        : null;
};
const saveData = function (data) {
    const stringifyData = data.map((_) => _.join('=')).join('&');
    window.history.replaceState(null, window.document.title, `${window.location.pathname}?${stringifyData}`);
};
const resetData = function () {
    window.location.search = '';
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2ViNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZG9tLXdvcmtlci9kb20td29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3VzZXJuYW1lLWdlbmVyYXRvci91c2VybmFtZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS1pZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dyZWV0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9jYXRpb24tc2VhcmNoLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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USxDQUFDLFFBQVEsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQzNHLENBQUMsQ0FBQztBQUVLLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAmZGlzcGxheT1zd2FwJnN1YnNldD1jeXJpbGxpYyk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1yZWQ6ICNlODU4NGU7IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuLmdlbmVyYXRvci1mb3JtIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cXG4gIC5nZW5lcmF0b3ItZm9ybV9fbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmdlbmVyYXRvci1mb3JtX19sYWJlbDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgLmdlbmVyYXRvci1mb3JtX19sYWJlbCAuZ2VuZXJhdG9yLWZvcm1fX2lucHV0IHtcXG4gICAgICBtYXJnaW4tdG9wOiA0cHg7IH1cXG4gIC5nZW5lcmF0b3ItZm9ybV9fbGFiZWwtYXN0ZXJpeCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpOyB9XFxuICAuZ2VuZXJhdG9yLWZvcm1fX2xhYmVsX3NldHRpbmdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmdlbmVyYXRvci1mb3JtX19pbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XFxuICAuZ2VuZXJhdG9yLWZvcm1fX2NvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcbiAgLmdlbmVyYXRvci1mb3JtX19zdWJtaXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJlZCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQgMHM7IH1cXG4gICAgLmdlbmVyYXRvci1mb3JtX19zdWJtaXQ6aG92ZXIge1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTsgfVxcbiAgLmdlbmVyYXRvci1mb3JtX19yZXNldCB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZ2VuZXJhdG9yLWZvcm1fX2FkZGl0aW9uYWwtc2V0dGluZ3Mge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmdlbmVyYXRvci1mb3JtIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgIC5nZW5lcmF0b3ItZm9ybSAuZ2VuZXJhdG9yLWZvcm1fX2lucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4uZ2VuZXJhdG9yLXJlc3VsdCB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7IH1cXG4gIC5nZW5lcmF0b3ItcmVzdWx0X19oaW50IHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAuZ2VuZXJhdG9yLXJlc3VsdF9fZ3JlZXRpbmdzIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdlbmVyYXRvci1yZXN1bHRfX3ZhbHVlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMjUwJTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5nZW5lcmF0b3ItcmVzdWx0IHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgICBmb250LXNpemU6IDI4cHg7IH1cXG4gICAgICAuZ2VuZXJhdG9yLXJlc3VsdCAuZ2VuZXJhdG9yLXJlc3VsdF9faGludCB7XFxuICAgICAgICBmb250LXNpemU6IDMycHg7IH1cXG4gICAgICAuZ2VuZXJhdG9yLXJlc3VsdCAuZ2VuZXJhdG9yLXJlc3VsdF9fdmFsdWUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNTAlOyB9IH1cXG5cXG4uYXBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmFwcCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH0gfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBVc2VybmFtZUdlbmVyYXRvciB9IGZyb20gXCIuL2hlbHBlcnMvdXNlcm5hbWUtZ2VuZXJhdG9yL3VzZXJuYW1lLWdlbmVyYXRvclwiO1xuaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IFVzZXJuYW1lR2VuZXJhdG9yKCk7XG59KTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHtcbiAgRE9NX0lEUyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tLWlkcyc7XG5pbXBvcnQge1xuICBnZXRSYW5kb21HcmVldGluZ3MsXG59IGZyb20gXCIuLi8uLi91dGlscy9ncmVldGluZ3NcIjtcbmltcG9ydCB7XG4gIGdldFJhbmRvbSxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBvbkZvcm1TdWJtaXQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG4gIG9uRm9ybVJlc2V0OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRm9ybVNldHRpbmdzIHtcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhblxufVxuXG5leHBvcnQgY2xhc3MgRG9tV29ya2VyIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIG9uRm9ybVN1Ym1pdCxcbiAgICBvbkZvcm1SZXNldCxcbiAgfTogT3B0aW9ucykge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvbkZvcm1TdWJtaXQpO1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIG9uRm9ybVJlc2V0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChET01fSURTLmZvcm0pIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybUlucHV0cygpOiBIVE1MSW5wdXRFbGVtZW50W10ge1xuICAgIGNvbnN0IHsgZWxlbWVudHMgfSA9IHRoaXMuZm9ybTtcbiAgICBjb25zdCBpbnB1dHMgPSBbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF0gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQucm9sZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBpbnB1dHMucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXRzO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtU2V0dGluZ3MoKTogRm9ybVNldHRpbmdzIHtcbiAgICBjb25zdCBzaHVmZmxlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChET01fSURTLnNldHRpbmdzU2h1ZmZsZSkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIHJldHVybiB7XG4gICAgICBzaHVmZmxlOiBzaHVmZmxlQ2hlY2tib3ggPyBzaHVmZmxlQ2hlY2tib3guY2hlY2tlZCA6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9ybVN1Ym1pdCgpOiBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMuZm9ybVN1Ym1pdEJ1dHRvbikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3VsdFdyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChET01fSURTLnJlc3VsdCkgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdyZWV0aW5nc1dyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChET01fSURTLmdyZWV0aW5nc1dyYXBwZXIpIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUhpbnRNZXNzYWdlKGhpbnRWaXNpYmxlOiBib29sZWFuKSB7XG4gICAgY29uc3QgcmVzdWx0SGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMucmVzdWx0SGludCk7XG4gICAgY29uc3QgZ3JlZXRpbmdzV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMuZ3JlZXRpbmdzV3JhcHBlcik7XG5cbiAgICBpZiAocmVzdWx0SGludCkge1xuICAgICAgcmVzdWx0SGludC5zdHlsZS5kaXNwbGF5ID0gaGludFZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH1cbiAgICBpZiAoZ3JlZXRpbmdzV3JhcHBlcikge1xuICAgICAgZ3JlZXRpbmdzV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gaGludFZpc2libGUgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0ZpcnN0SW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtSW5wdXRzWzBdLmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNGb3JtU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVN1Ym1pdC5mb2N1cygpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVJlc3VsdFdyYXBwZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucmVzdWx0V3JhcHBlci5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfVxuICBcbiAgcHVibGljIHVwZGF0ZUdyZWV0aW5ncygpIHtcbiAgICB0aGlzLmdyZWV0aW5nc1dyYXBwZXIuaW5uZXJIVE1MID0gYCR7Z2V0UmFuZG9tR3JlZXRpbmdzKCl9LGA7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgKiBhcyBMb2NhdGlvblNlYXJjaCBmcm9tICcuLi8uLi91dGlscy9sb2NhdGlvbi1zZWFyY2gtaGFuZGxlcic7XG5pbXBvcnQgeyBEb21Xb3JrZXIgfSBmcm9tICcuLi9kb20td29ya2VyL2RvbS13b3JrZXInO1xuXG5sZXQgT05DRV9HRU5FUkFURUQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBtaW5TbGljZVJlc3VsdDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlcm5hbWVHZW5lcmF0b3Ige1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogT3B0aW9ucztcblxuICBwcml2YXRlIHJlYWRvbmx5IGRvbVdvcmtlcjogRG9tV29ya2VyO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7XG4gICAgbWluU2xpY2VSZXN1bHQ6IDIsXG4gIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZG9tV29ya2VyID0gbmV3IERvbVdvcmtlcih7XG4gICAgICBvbkZvcm1TdWJtaXQ6IHRoaXMub25Gb3JtU3VibWl0LmJpbmQodGhpcyksXG4gICAgICBvbkZvcm1SZXNldDogdGhpcy5vbkZvcm1SZXNldC5iaW5kKHRoaXMpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkVmFsdWVzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uRm9ybVN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNhdmVWYWx1ZXMoKTtcbiAgICB0aGlzLmdlbmVyYXRlKCk7XG5cbiAgICBpZiAoIU9OQ0VfR0VORVJBVEVEKSB7XG4gICAgICBPTkNFX0dFTkVSQVRFRCA9IHRydWU7XG4gICAgICB0aGlzLmRvbVdvcmtlci50b2dnbGVIaW50TWVzc2FnZShmYWxzZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRm9ybVJlc2V0KCk6IHZvaWQge1xuICAgIExvY2F0aW9uU2VhcmNoLnJlc2V0RGF0YSgpO1xuICAgIHRoaXMuZG9tV29ya2VyLmZvY3VzRmlyc3RJbnB1dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlVmFsdWVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZm9ybUlucHV0cyB9ID0gdGhpcy5kb21Xb3JrZXI7XG4gICAgY29uc3QgdmFsdWVzID0gZm9ybUlucHV0cy5yZWR1Y2UoKGFjYzogc3RyaW5nW11bXSwgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICBhY2MucHVzaChbaW5wdXQuaWQsIGlucHV0LnZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuXG4gICAgTG9jYXRpb25TZWFyY2guc2F2ZURhdGEodmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFZhbHVlcygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBMb2NhdGlvblNlYXJjaC5nZXREYXRhKCk7XG5cbiAgICBpZiAoIXZhbHVlcyB8fCAhdmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kb21Xb3JrZXIuZm9jdXNGaXJzdElucHV0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBmb3JtSW5wdXRzIH0gPSB0aGlzLmRvbVdvcmtlcjtcblxuICAgIHZhbHVlcy5mb3JFYWNoKChfOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IFsga2V5LCB2YWx1ZSBdID0gXy5zcGxpdCgnPScpO1xuICAgICAgY29uc3QgY3VycmVudElucHV0ID0gZm9ybUlucHV0cy5maW5kKGlucHV0ID0+IGlucHV0LmlkID09PSBrZXkpO1xuXG4gICAgICBpZiAoY3VycmVudElucHV0KSB7XG4gICAgICAgIGN1cnJlbnRJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZG9tV29ya2VyLmZvY3VzRm9ybVN1Ym1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzbGljZVZhbHVlUGFydCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydCA9IEhlbHBlcnMuZ2V0UmFuZG9tKDAsIHZhbHVlLmxlbmd0aCAtIHRoaXMub3B0aW9ucy5taW5TbGljZVJlc3VsdCk7XG4gICAgY29uc3Qgc2xpY2VMZW5ndGggPSBIZWxwZXJzLmdldFJhbmRvbSgxLCB2YWx1ZS5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKHN0YXJ0LCBzdGFydCArIHNsaWNlTGVuZ3RoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZSgpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5kb21Xb3JrZXIuZm9ybUlucHV0cy5tYXAoXG4gICAgICAoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHRoaXMuc2xpY2VWYWx1ZVBhcnQoaW5wdXQudmFsdWUpLnRvTG93ZXJDYXNlKCksXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmRvbVdvcmtlci5mb3JtU2V0dGluZ3Muc2h1ZmZsZSkge1xuICAgICAgdmFsdWVzID0gSGVscGVycy5zaHVmZmxlQXJyYXkodmFsdWVzKTtcbiAgICB9XG4gICAgdGhpcy5kb21Xb3JrZXIudXBkYXRlUmVzdWx0V3JhcHBlcih2YWx1ZXMuam9pbignJykpO1xuICAgIHRoaXMuZG9tV29ya2VyLnVwZGF0ZUdyZWV0aW5ncygpO1xuICB9XG59XG4iLCJpbnRlcmZhY2UgRG9tSWRzIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRE9NX0lEUzogRG9tSWRzID0ge1xuICBmb3JtOiAnZ2VuZXJhdG9yLWZvcm0nLFxuICBpbnB1dDE6ICdpbnB1dDEnLFxuICBpbnB1dDI6ICdpbnB1dDInLFxuICBpbnB1dDM6ICdpbnB1dDMnLFxuICBmb3JtU3VibWl0QnV0dG9uOiAnZ2VuZXJhdG9yLXN1Ym1pdCcsXG4gIHJlc3VsdDogJ2dlbmVyYXRvci1yZXN1bHQnLFxuICByZXN1bHRIaW50OiAnZ2VuZXJhdG9yLWhpbnQnLFxuICBncmVldGluZ3NXcmFwcGVyOiAnZ2VuZXJhdG9yLWdyZWV0aW5ncycsXG4gIHNldHRpbmdzU2h1ZmZsZTogJ3NodWZmbGUtY2hlY2tib3gnLFxufVxuIiwiaW1wb3J0IHtcbiAgZ2V0UmFuZG9tLFxufSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmludGVyZmFjZSBHcmVldGluZ3Mge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBHUkVFVElOR1MgPSBbXG4gICdIZXknLFxuICAnV2hhdFxcJ3MgdXAnLFxuICAnUHJpdmV0JyxcbiAgJ0hvd1xcJ3MgaXQgZ29pbmcnLFxuICAnRG8geW91IGxpa2UgaXQnLFxuICAnRGlkIHlvdSBzZWUgaXQnLFxuICAnQWgsIGl0XFwncyB5b3UnLFxuICAnTGlzdGVuIHRvIG15IHN0b3J5JyxcbiAgJ0lzIGl0IHlvdScsXG4gICdHb2QgYmxlc3MgeW91JyxcbiAgJ0kgbG92ZSB5b3UnLFxuICAnTG9va3MgZ3JlYXQnLFxuICAnU2F5IGl0IGFnYWluJyxcbiAgJ0RvIHlvdSByZW1lbWJlciBpdCdcbl07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21HcmVldGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBHUkVFVElOR1NbZ2V0UmFuZG9tKDAsIEdSRUVUSU5HUy5sZW5ndGggLSAxKV07XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucm91bmQoKG1heCAtIG1pbikgKiBNYXRoLnJhbmRvbSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheTogc3RyaW5nW10pIHtcbiAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbiIsImV4cG9ydCBjb25zdCBnZXREYXRhID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB3aW5kb3cubG9jYXRpb247XG5cbiAgcmV0dXJuIHNlYXJjaFxuICAgID8gc2VhcmNoLnNsaWNlKDEsIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gubGVuZ3RoKS5zcGxpdCgnJicpXG4gICAgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVEYXRhID0gZnVuY3Rpb24oZGF0YTogc3RyaW5nW11bXSkge1xuICBjb25zdCBzdHJpbmdpZnlEYXRhID0gZGF0YS5tYXAoKF86IHN0cmluZ1tdKSA9PiBfLmpvaW4oJz0nKSkuam9pbignJicpO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCB3aW5kb3cuZG9jdW1lbnQudGl0bGUsIGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtzdHJpbmdpZnlEYXRhfWApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCA9ICcnO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=