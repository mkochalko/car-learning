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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Car {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n        this.vec = 0;\n        this.vel = [0, 0];\n        this.acc = 0;\n        this.width = 40;\n        this.height = 80;\n    }\n\n    show() {\n        fill(255, 0, 0)\n        stroke(0)\n        rect(this.x, this.y, this.width, this.height)\n\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = \"red\";\n        \n        drawRotatedRect(this.x, this.y, this.width, this.height, this.vec)\n\n        function drawRotatedRect(x, y, width, height, degrees) {\n            ctx.save();\n\n            ctx.beginPath();\n            ctx.translate(x + width / 2, y + height / 2);\n            ctx.rotate(degrees);\n            ctx.fillRect(-width / 2, -height / 2, width, height);\n\n            ctx.fillStyle = \"red\";\n\n            ctx.restore();\n        }\n    }\n\n\n    move(ctx) {\n        this.vel[0] += this.acc;\n        this.vel[1] += this.acc;\n        this.x += this.vel[0];\n        this.y += this.vel[1];\n        this.draw(ctx)\n    }\n\n    power(impulse, dir) {\n        if (dir === 'up') {\n            this.vel[0] += impulse[0] + this.vec;\n            this.vel[1] += impulse[1] + this.vec;\n        } else {\n            this.vec += impulse[0]\n        }\n    };\n}\n\nmodule.exports = Car;\n\n//# sourceURL=webpack:///./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_car__WEBPACK_IMPORTED_MODULE_0__);\n\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    let canvasEle = document.getElementById('game-canvas');\n    canvasEle.width = window.innerWidth;\n    canvasEle.height = window.innerHeight\n    let ctx = canvasEle.getContext(\"2d\");\n    ctx.fillStyle = \"gray\";\n    ctx.fillRect(0, 0, canvasEle.width, canvasEle.height);\n    let view = new View(ctx, canvasEle.width, canvasEle.height)\n    view.start()\n    console.log('test')\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Car = __webpack_require__(/*! ./car */ \"./src/car.js\")\n\nclass View {\n    constructor(ctx, width, height) {\n        this.car = new Car(500, 500);\n        this.ctx = ctx;\n        this.width = width;\n        this.height = height;\n        this.keys = {\n            up: [0, -1],\n            left: [-(Math.PI / 20)],\n            right: [Math.PI / 20],\n        }\n    }\n\n    start() {\n        setInterval(() => {\n            this.step(this.ctx)\n            this.draw(this.ctx)\n        }, 20);\n        this.bindKeyHandlers()\n    }\n\n    bindKeyHandlers() {\n        const car = this.car;\n\n        let keys = Object.keys(this.keys);\n        for (let dir of keys) {\n            let move = this.keys[dir];\n            console.log(move)\n            key(dir, () => {\n                car.power(move, dir)\n            })\n        }\n    }\n\n    step(ctx) {\n        this.car.move(ctx);\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, this.width, this.height);\n        ctx.fillStyle = 'gray'\n        ctx.fillRect(0, 0, this.width, this.height);\n        ctx.clearRect(10, 10, 100, 100)\n        ctx.fillStyle = 'blue'\n        ctx.fillRect(10, 10, 100, 100)\n\n        this.car.draw(ctx);\n    }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });