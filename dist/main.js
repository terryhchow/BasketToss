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

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction Ball(ctx) {\n    this.x = ctx.x;\n    this.y = ctx.y;\n    this.throw = false\n}\n\nBall.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)\n    ctx.fillStyle = \"red\";\n    ctx.closePath();\n    ctx.fill()\n}\n\nBall.prototype.throw = function (ctx) {\n    if (ctx.throw === true) {\n        this.y += 2\n    }\n}\n\n\n\nmodule.exports = Ball;\n\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/baskets.js":
/*!************************!*\
  !*** ./src/baskets.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction Basket() {\n    this.pos_x = (Math.random() * 700);\n    this.pos_y = (Math.random() * 400 ) + 20;\n    // this.vel = ctx.vel;\n    this.radius = Math.random() * 20;\n    this.color = \"green\";\n}\n\nBasket.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos_x, this.pos_y, 20, 0, 2 * Math.PI)\n    ctx.fillStyle = \"black\";\n    ctx.closePath();\n    ctx.fill()\n    ctx.lineWidth = 5\n    ctx.strokeStyle = \"orange\"\n    ctx.stroke()\n}\n\n// Basket.prototype.move = function(ctx) {\n//     this.pos[0] += this.vel[0]\n//     this.pos = [(pos[0] + this.DIM_X) % this.DIM_X, (pos[1] + this.DIM_Y) % this.DIM_Y]\n// }\n\n// }\n\n\n\nmodule.exports = Basket;            \n\n//# sourceURL=webpack:///./src/baskets.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Ball = __webpack_require__(/*! ./ball */ \"./src/ball.js\")\nconst Basket = __webpack_require__(/*! ./baskets */ \"./src/baskets.js\")\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 700;\n    canvasEl.height = 500;\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n\n    // Render the ping pong ball\n    window.ball = Ball\n    const ball = new Ball({\n        x : 325,\n        y : 490\n    })\n    ball.draw(ctx)\n    \n    // Generate basket at random\n    window.basket = Basket\n    const basket1 = new Basket()\n    basket1.draw(ctx)\n\n    // Move the ball\n    document.addEventListener(\"keydown\", (event) => {\n        switch (event.keyCode) {\n            case 37:\n                ball.x -= 8;\n                break;\n            case 39:\n                ball.x += 8;\n                break;\n            case 32:\n                this.throw = true\n                break;\n        }\n        canvasEl.width = canvasEl.width\n        ball.draw(ctx)\n        basket1.draw(ctx)\n    })\n\n\n\n    \n    console.log(\"YOU GOT THIS TERRY DO NOT GIVE UP\")\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });