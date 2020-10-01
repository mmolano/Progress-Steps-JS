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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress */ \"./src/js/progress.js\");\n\nvar nextButton = document.getElementById('next-button');\nvar previousButton = document.getElementById('previous-button');\nObject(_progress__WEBPACK_IMPORTED_MODULE_0__[\"mobileProgress\"])(true, 0);\nObject(_progress__WEBPACK_IMPORTED_MODULE_0__[\"progress\"])(true, 0);\nvar m = 0;\nnextButton.addEventListener('click', function (e) {\n  e.preventDefault();\n\n  if (m !== 2) {\n    m++;\n  }\n\n  Object(_progress__WEBPACK_IMPORTED_MODULE_0__[\"mobileProgress\"])(true, m);\n  Object(_progress__WEBPACK_IMPORTED_MODULE_0__[\"progress\"])(true, m);\n  console.log(m);\n});\npreviousButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  Object(_progress__WEBPACK_IMPORTED_MODULE_0__[\"mobileProgress\"])(false, m);\n  Object(_progress__WEBPACK_IMPORTED_MODULE_0__[\"progress\"])(false, m);\n\n  if (m !== 0) {\n    m--;\n  }\n\n  console.log(m);\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/progress.js":
/*!****************************!*\
  !*** ./src/js/progress.js ***!
  \****************************/
/*! exports provided: progress, mobileProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"progress\", function() { return progress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mobileProgress\", function() { return mobileProgress; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction progress(next, param) {\n  var stepSentence = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var sentence = [{\n    step0: 'step 1',\n    step1: 'step 2',\n    step2: 'step 3'\n  }];\n\n  var progressText = _toConsumableArray(document.querySelectorAll(\".step p\"));\n\n  var progressCheck = _toConsumableArray(document.querySelectorAll(\".step .ovSelect\"));\n\n  var bullet = _toConsumableArray(document.querySelectorAll(\".step .bullet\"));\n\n  var current = param;\n\n  for (var _i = 0; _i < progressText.length; _i++) {\n    progressText[_i].innerHTML = sentence[stepSentence]['step' + _i];\n  }\n\n  if (next === true && bullet[current - 1]) {\n    bullet[current - 1].classList.add(\"active\");\n    bullet[current].classList.add(\"preg\");\n    progressCheck[current - 1].classList.remove(\"active\");\n\n    if (bullet[current - 1].classList.contains(\"backStep\")) {\n      bullet[current - 1].classList.remove(\"backStep\");\n    }\n\n    progressCheck[current].classList.add(\"active\");\n    progressText[current - 1].classList.add(\"active\");\n    progressText[current].classList.add(\"active\");\n    current += 1;\n  } else if (next === false) {\n    bullet[current - 1].classList.remove(\"active\");\n    bullet[current - 1].classList.add(\"backStep\");\n    bullet[current].classList.remove(\"preg\");\n    progressCheck[current].classList.remove(\"active\");\n    progressCheck[current - 1].classList.add(\"active\");\n    progressText[current].classList.remove(\"active\");\n    progressText[current - 1].classList.add(\"active\");\n    current -= 1;\n  }\n}\nfunction mobileProgress(next, param) {\n  var bg = _toConsumableArray(document.querySelectorAll(\".steps\"));\n\n  var current = param;\n\n  if (next === true && bg[current - 1]) {\n    bg[current - 1].classList.add(\"active\");\n    bg[current].classList.add(\"active\");\n    current += 1;\n  } else if (next === false) {\n    bg[current].classList.remove(\"active\");\n    bg[current].classList.add(\"backStep\");\n    current -= 1;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/progress.js?");

/***/ })

/******/ });