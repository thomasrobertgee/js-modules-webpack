/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ce9a35911802d83d65544499c98b10bd.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);