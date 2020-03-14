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
        console.log(this.greetingsWrapper);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL2FwcC5zY3NzP2ViNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZG9tLXdvcmtlci9kb20td29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3VzZXJuYW1lLWdlbmVyYXRvci91c2VybmFtZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS1pZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dyZWV0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9jYXRpb24tc2VhcmNoLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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RUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDM0csQ0FBQyxDQUFDO0FBRUssTUFBTSxTQUFTLEdBQUc7SUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCZkaXNwbGF5PXN3YXAmc3Vic2V0PWN5cmlsbGljKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLXJlZDogI2U4NTg0ZTsgfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4uZ2VuZXJhdG9yLWZvcm0ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxcbiAgLmdlbmVyYXRvci1mb3JtX19sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuZ2VuZXJhdG9yLWZvcm1fX2xhYmVsOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAuZ2VuZXJhdG9yLWZvcm1fX2xhYmVsIC5nZW5lcmF0b3ItZm9ybV9faW5wdXQge1xcbiAgICAgIG1hcmdpbi10b3A6IDRweDsgfVxcbiAgLmdlbmVyYXRvci1mb3JtX19sYWJlbC1hc3Rlcml4IHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7IH1cXG4gIC5nZW5lcmF0b3ItZm9ybV9fbGFiZWxfc2V0dGluZ3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuZ2VuZXJhdG9yLWZvcm1fX2lucHV0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cXG4gIC5nZW5lcmF0b3ItZm9ybV9fY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuICAuZ2VuZXJhdG9yLWZvcm1fX3N1Ym1pdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmVkKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dCAwczsgfVxcbiAgICAuZ2VuZXJhdG9yLWZvcm1fX3N1Ym1pdDpob3ZlciB7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpOyB9XFxuICAuZ2VuZXJhdG9yLWZvcm1fX3Jlc2V0IHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5nZW5lcmF0b3ItZm9ybV9fYWRkaXRpb25hbC1zZXR0aW5ncyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuZ2VuZXJhdG9yLWZvcm0ge1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLmdlbmVyYXRvci1mb3JtIC5nZW5lcmF0b3ItZm9ybV9faW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5nZW5lcmF0b3ItcmVzdWx0IHtcXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDsgfVxcbiAgLmdlbmVyYXRvci1yZXN1bHRfX2hpbnQge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gIC5nZW5lcmF0b3ItcmVzdWx0X19ncmVldGluZ3Mge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuZ2VuZXJhdG9yLXJlc3VsdF9fdmFsdWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAyNTAlO1xcbiAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmdlbmVyYXRvci1yZXN1bHQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMjhweDsgfVxcbiAgICAgIC5nZW5lcmF0b3ItcmVzdWx0IC5nZW5lcmF0b3ItcmVzdWx0X19oaW50IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDsgfVxcbiAgICAgIC5nZW5lcmF0b3ItcmVzdWx0IC5nZW5lcmF0b3ItcmVzdWx0X192YWx1ZSB7XFxuICAgICAgICBmb250LXNpemU6IDE1MCU7IH0gfVxcblxcbi5hcHAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuYXBwIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfSB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFVzZXJuYW1lR2VuZXJhdG9yIH0gZnJvbSBcIi4vaGVscGVycy91c2VybmFtZS1nZW5lcmF0b3IvdXNlcm5hbWUtZ2VuZXJhdG9yXCI7XG5pbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBuZXcgVXNlcm5hbWVHZW5lcmF0b3IoKTtcbn0pO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQge1xuICBET01fSURTLFxufSBmcm9tICcuLi8uLi91dGlscy9kb20taWRzJztcbmltcG9ydCB7XG4gIGdldFJhbmRvbUdyZWV0aW5ncyxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2dyZWV0aW5nc1wiO1xuaW1wb3J0IHtcbiAgZ2V0UmFuZG9tLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIG9uRm9ybVN1Ym1pdDogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbiAgb25Gb3JtUmVzZXQ6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBGb3JtU2V0dGluZ3Mge1xuICBba2V5OiBzdHJpbmddOiBib29sZWFuXG59XG5cbmV4cG9ydCBjbGFzcyBEb21Xb3JrZXIge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgb25Gb3JtU3VibWl0LFxuICAgIG9uRm9ybVJlc2V0LFxuICB9OiBPcHRpb25zKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uRm9ybVN1Ym1pdCk7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0Jywgb25Gb3JtUmVzZXQpO1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtKCk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMuZm9ybSkgYXMgSFRNTEZvcm1FbGVtZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBmb3JtSW5wdXRzKCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XG4gICAgY29uc3QgeyBlbGVtZW50cyB9ID0gdGhpcy5mb3JtO1xuICAgIGNvbnN0IGlucHV0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC5yb2xlID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGlucHV0cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnB1dHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvcm1TZXR0aW5ncygpOiBGb3JtU2V0dGluZ3Mge1xuICAgIGNvbnN0IHNodWZmbGVDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMuc2V0dGluZ3NTaHVmZmxlKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNodWZmbGU6IHNodWZmbGVDaGVja2JveCA/IHNodWZmbGVDaGVja2JveC5jaGVja2VkIDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBmb3JtU3VibWl0KCk6IEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRE9NX0lEUy5mb3JtU3VibWl0QnV0dG9uKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdWx0V3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMucmVzdWx0KSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ3JlZXRpbmdzV3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERPTV9JRFMuZ3JlZXRpbmdzV3JhcHBlcikgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlSGludE1lc3NhZ2UoaGludFZpc2libGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCByZXN1bHRIaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRE9NX0lEUy5yZXN1bHRIaW50KTtcbiAgICBjb25zdCBncmVldGluZ3NXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRE9NX0lEUy5ncmVldGluZ3NXcmFwcGVyKTtcblxuICAgIGlmIChyZXN1bHRIaW50KSB7XG4gICAgICByZXN1bHRIaW50LnN0eWxlLmRpc3BsYXkgPSBoaW50VmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChncmVldGluZ3NXcmFwcGVyKSB7XG4gICAgICBncmVldGluZ3NXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBoaW50VmlzaWJsZSA/ICdub25lJyA6ICdibG9jayc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzRmlyc3RJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1JbnB1dHNbMF0uZm9jdXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c0Zvcm1TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtU3VibWl0LmZvY3VzKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlUmVzdWx0V3JhcHBlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXN1bHRXcmFwcGVyLmlubmVySFRNTCA9IHZhbHVlO1xuICB9XG4gIFxuICBwdWJsaWMgdXBkYXRlR3JlZXRpbmdzKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JlZXRpbmdzV3JhcHBlcik7XG4gICAgdGhpcy5ncmVldGluZ3NXcmFwcGVyLmlubmVySFRNTCA9IGAke2dldFJhbmRvbUdyZWV0aW5ncygpfSxgO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBIZWxwZXJzIGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0ICogYXMgTG9jYXRpb25TZWFyY2ggZnJvbSAnLi4vLi4vdXRpbHMvbG9jYXRpb24tc2VhcmNoLWhhbmRsZXInO1xuaW1wb3J0IHsgRG9tV29ya2VyIH0gZnJvbSAnLi4vZG9tLXdvcmtlci9kb20td29ya2VyJztcblxubGV0IE9OQ0VfR0VORVJBVEVEOiBib29sZWFuID0gZmFsc2U7XG5cbmludGVyZmFjZSBPcHRpb25zIHtcbiAgbWluU2xpY2VSZXN1bHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJuYW1lR2VuZXJhdG9yIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IE9wdGlvbnM7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkb21Xb3JrZXI6IERvbVdvcmtlcjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge1xuICAgIG1pblNsaWNlUmVzdWx0OiAyLFxuICB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmRvbVdvcmtlciA9IG5ldyBEb21Xb3JrZXIoe1xuICAgICAgb25Gb3JtU3VibWl0OiB0aGlzLm9uRm9ybVN1Ym1pdC5iaW5kKHRoaXMpLFxuICAgICAgb25Gb3JtUmVzZXQ6IHRoaXMub25Gb3JtUmVzZXQuYmluZCh0aGlzKSxcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFZhbHVlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZvcm1TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zYXZlVmFsdWVzKCk7XG4gICAgdGhpcy5nZW5lcmF0ZSgpO1xuXG4gICAgaWYgKCFPTkNFX0dFTkVSQVRFRCkge1xuICAgICAgT05DRV9HRU5FUkFURUQgPSB0cnVlO1xuICAgICAgdGhpcy5kb21Xb3JrZXIudG9nZ2xlSGludE1lc3NhZ2UoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkZvcm1SZXNldCgpOiB2b2lkIHtcbiAgICBMb2NhdGlvblNlYXJjaC5yZXNldERhdGEoKTtcbiAgICB0aGlzLmRvbVdvcmtlci5mb2N1c0ZpcnN0SW5wdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVZhbHVlcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGZvcm1JbnB1dHMgfSA9IHRoaXMuZG9tV29ya2VyO1xuICAgIGNvbnN0IHZhbHVlcyA9IGZvcm1JbnB1dHMucmVkdWNlKChhY2M6IHN0cmluZ1tdW10sIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgYWNjLnB1c2goW2lucHV0LmlkLCBpbnB1dC52YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcblxuICAgIExvY2F0aW9uU2VhcmNoLnNhdmVEYXRhKHZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRWYWx1ZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWVzID0gTG9jYXRpb25TZWFyY2guZ2V0RGF0YSgpO1xuXG4gICAgaWYgKCF2YWx1ZXMgfHwgIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZG9tV29ya2VyLmZvY3VzRmlyc3RJbnB1dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZm9ybUlucHV0cyB9ID0gdGhpcy5kb21Xb3JrZXI7XG5cbiAgICB2YWx1ZXMuZm9yRWFjaCgoXzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBbIGtleSwgdmFsdWUgXSA9IF8uc3BsaXQoJz0nKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbnB1dCA9IGZvcm1JbnB1dHMuZmluZChpbnB1dCA9PiBpbnB1dC5pZCA9PT0ga2V5KTtcblxuICAgICAgaWYgKGN1cnJlbnRJbnB1dCkge1xuICAgICAgICBjdXJyZW50SW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRvbVdvcmtlci5mb2N1c0Zvcm1TdWJtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2xpY2VWYWx1ZVBhcnQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSBIZWxwZXJzLmdldFJhbmRvbSgwLCB2YWx1ZS5sZW5ndGggLSB0aGlzLm9wdGlvbnMubWluU2xpY2VSZXN1bHQpO1xuICAgIGNvbnN0IHNsaWNlTGVuZ3RoID0gSGVscGVycy5nZXRSYW5kb20oMSwgdmFsdWUubGVuZ3RoKTtcblxuICAgIHJldHVybiB2YWx1ZS5zbGljZShzdGFydCwgc3RhcnQgKyBzbGljZUxlbmd0aCk7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGUoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlcyA9IHRoaXMuZG9tV29ya2VyLmZvcm1JbnB1dHMubWFwKFxuICAgICAgKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB0aGlzLnNsaWNlVmFsdWVQYXJ0KGlucHV0LnZhbHVlKS50b0xvd2VyQ2FzZSgpLFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5kb21Xb3JrZXIuZm9ybVNldHRpbmdzLnNodWZmbGUpIHtcbiAgICAgIHZhbHVlcyA9IEhlbHBlcnMuc2h1ZmZsZUFycmF5KHZhbHVlcyk7XG4gICAgfVxuICAgIHRoaXMuZG9tV29ya2VyLnVwZGF0ZVJlc3VsdFdyYXBwZXIodmFsdWVzLmpvaW4oJycpKTtcbiAgICB0aGlzLmRvbVdvcmtlci51cGRhdGVHcmVldGluZ3MoKTtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIERvbUlkcyB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IERPTV9JRFM6IERvbUlkcyA9IHtcbiAgZm9ybTogJ2dlbmVyYXRvci1mb3JtJyxcbiAgaW5wdXQxOiAnaW5wdXQxJyxcbiAgaW5wdXQyOiAnaW5wdXQyJyxcbiAgaW5wdXQzOiAnaW5wdXQzJyxcbiAgZm9ybVN1Ym1pdEJ1dHRvbjogJ2dlbmVyYXRvci1zdWJtaXQnLFxuICByZXN1bHQ6ICdnZW5lcmF0b3ItcmVzdWx0JyxcbiAgcmVzdWx0SGludDogJ2dlbmVyYXRvci1oaW50JyxcbiAgZ3JlZXRpbmdzV3JhcHBlcjogJ2dlbmVyYXRvci1ncmVldGluZ3MnLFxuICBzZXR0aW5nc1NodWZmbGU6ICdzaHVmZmxlLWNoZWNrYm94Jyxcbn1cbiIsImltcG9ydCB7XG4gIGdldFJhbmRvbSxcbn0gZnJvbSBcIi4vaGVscGVyc1wiO1xuXG5pbnRlcmZhY2UgR3JlZXRpbmdzIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgR1JFRVRJTkdTID0gW1xuICAnSGV5JyxcbiAgJ1doYXRcXCdzIHVwJyxcbiAgJ1ByaXZldCcsXG4gICdIb3dcXCdzIGl0IGdvaW5nJyxcbiAgJ0RvIHlvdSBsaWtlIGl0JyxcbiAgJ0RpZCB5b3Ugc2VlIGl0JyxcbiAgJ0FoLCBpdFxcJ3MgeW91JyxcbiAgJ0xpc3RlbiB0byBteSBzdG9yeScsXG4gICdJcyBpdCB5b3UnLFxuICAnR29kIGJsZXNzIHlvdScsXG4gICdJIGxvdmUgeW91JyxcbiAgJ0xvb2tzIGdyZWF0JyxcbiAgJ1NheSBpdCBhZ2FpbicsXG4gICdEbyB5b3UgcmVtZW1iZXIgaXQnXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tR3JlZXRpbmdzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gR1JFRVRJTkdTW2dldFJhbmRvbSgwLCBHUkVFVElOR1MubGVuZ3RoIC0gMSldO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJvdW5kKChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXk6IHN0cmluZ1tdKSB7XG4gIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG4iLCJleHBvcnQgY29uc3QgZ2V0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gd2luZG93LmxvY2F0aW9uO1xuXG4gIHJldHVybiBzZWFyY2hcbiAgICA/IHNlYXJjaC5zbGljZSgxLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLmxlbmd0aCkuc3BsaXQoJyYnKVxuICAgIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlRGF0YSA9IGZ1bmN0aW9uKGRhdGE6IHN0cmluZ1tdW10pIHtcbiAgY29uc3Qgc3RyaW5naWZ5RGF0YSA9IGRhdGEubWFwKChfOiBzdHJpbmdbXSkgPT4gXy5qb2luKCc9JykpLmpvaW4oJyYnKTtcblxuICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgd2luZG93LmRvY3VtZW50LnRpdGxlLCBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7c3RyaW5naWZ5RGF0YX1gKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNldERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggPSAnJztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9