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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jokes = __webpack_require__(1);

var _jokes2 = _interopRequireDefault(_jokes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = document.getElementById("info");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  This class is just added to show you how you can use ES6 exports
  Observe, in index.js, how you can import
*/

var Jokes = function () {
    function Jokes(initialData) {
        _classCallCheck(this, Jokes);

        this._jokes = initialData;
    }

    _createClass(Jokes, [{
        key: "addJoke",
        value: function addJoke(joke) {
            this._jokes.push(joke);
        }
    }, {
        key: "getJokeById",
        value: function getJokeById(i) {
            return this._jokes[i];
        }
    }, {
        key: "getJokes",
        value: function getJokes() {
            return this._jokes;
        }
    }]);

    return Jokes;
}();

//Setup some dummy test persons


var initialData = ["A day without sunshine is like, night.", "At what age is it appropriate to tell my dog that he's adopted?", "I intend to live forever, or die trying"];

var jokes = new Jokes(initialData);
window.jokes = jokes; //Only for debugging

exports.default = jokes;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjI0ZDI3NmNlYmViZDhiZDFmZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qb2tlcy5qcyJdLCJuYW1lcyI6WyJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkpva2VzIiwiaW5pdGlhbERhdGEiLCJfam9rZXMiLCJqb2tlIiwicHVzaCIsImkiLCJqb2tlcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOzs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7SUFLTUMsSztBQUNGLG1CQUFZQyxXQUFaLEVBQXdCO0FBQUE7O0FBQ3BCLGFBQUtDLE1BQUwsR0FBY0QsV0FBZDtBQUNIOzs7O2dDQUVPRSxJLEVBQUs7QUFDVCxpQkFBS0QsTUFBTCxDQUFZRSxJQUFaLENBQWlCRCxJQUFqQjtBQUNIOzs7b0NBRVdFLEMsRUFBRztBQUNYLG1CQUFPLEtBQUtILE1BQUwsQ0FBWUcsQ0FBWixDQUFQO0FBQ0g7OzttQ0FFVTtBQUNQLG1CQUFPLEtBQUtILE1BQVo7QUFDSDs7Ozs7O0FBR0w7OztBQUNBLElBQU1ELGNBQWMsQ0FDaEIsd0NBRGdCLEVBRWhCLGlFQUZnQixFQUdoQix5Q0FIZ0IsQ0FBcEI7O0FBTUEsSUFBTUssUUFBUSxJQUFJTixLQUFKLENBQVVDLFdBQVYsQ0FBZDtBQUNBTSxPQUFPRCxLQUFQLEdBQWVBLEtBQWYsQyxDQUFzQjs7a0JBRVBBLEsiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjI0ZDI3NmNlYmViZDhiZDFmZmEiLCJpbXBvcnQgam9rZXMgZnJvbSBcIi4vam9rZXNcIjtcclxuXHJcbnZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXHJcbiAgVGhpcyBjbGFzcyBpcyBqdXN0IGFkZGVkIHRvIHNob3cgeW91IGhvdyB5b3UgY2FuIHVzZSBFUzYgZXhwb3J0c1xyXG4gIE9ic2VydmUsIGluIGluZGV4LmpzLCBob3cgeW91IGNhbiBpbXBvcnRcclxuKi9cclxuXHJcbmNsYXNzIEpva2VzIHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhKXtcclxuICAgICAgICB0aGlzLl9qb2tlcyA9IGluaXRpYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEpva2Uoam9rZSl7XHJcbiAgICAgICAgdGhpcy5fam9rZXMucHVzaChqb2tlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRKb2tlQnlJZChpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pva2VzW2ldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRKb2tlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fam9rZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vU2V0dXAgc29tZSBkdW1teSB0ZXN0IHBlcnNvbnNcclxuY29uc3QgaW5pdGlhbERhdGEgPSBbXHJcbiAgICBcIkEgZGF5IHdpdGhvdXQgc3Vuc2hpbmUgaXMgbGlrZSwgbmlnaHQuXCIsXHJcbiAgICBcIkF0IHdoYXQgYWdlIGlzIGl0IGFwcHJvcHJpYXRlIHRvIHRlbGwgbXkgZG9nIHRoYXQgaGUncyBhZG9wdGVkP1wiLFxyXG4gICAgXCJJIGludGVuZCB0byBsaXZlIGZvcmV2ZXIsIG9yIGRpZSB0cnlpbmdcIixcclxuICBdXHJcblxyXG5jb25zdCBqb2tlcyA9IG5ldyBKb2tlcyhpbml0aWFsRGF0YSk7XHJcbndpbmRvdy5qb2tlcyA9IGpva2VzOyAvL09ubHkgZm9yIGRlYnVnZ2luZ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgam9rZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pva2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==