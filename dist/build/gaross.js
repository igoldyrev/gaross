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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/library.blocks/img/img.js":
/*!***************************************!*\
  !*** ./src/library.blocks/img/img.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var imgAll = document.querySelectorAll('.img');
  var imgBig = document.querySelector('.img__big');
  var imgPopup = document.querySelector('.img__popup');
  var imgClose = document.querySelector('.img__close');
  var imgButtomRight = imgPopup.querySelector('.img__button--right');
  var imgButtomLeft = imgPopup.querySelector('.img__button--left');

  var closePopup = function closePopup() {
    imgPopup.style.display = '';
    document.body.classList.remove('img__modal-open');
  };

  var getArrayImageSrc = [].map.call(imgAll, function (it) {
    return it.src;
  });

  for (var j = 0; j < getArrayImageSrc.length; j++) {
    while (getArrayImageSrc[j] === window.location.href) {
      getArrayImageSrc.pop();
    }
  }

  var findIndex = function findIndex(array, value) {
    return array.indexOf(value);
  };

  var buttonRightClick = function buttonRightClick() {
    var i = findIndex(getArrayImageSrc, imgBig.src);
    if (i === 0) {
      i = i + 1;
    } else {
      i = findIndex(getArrayImageSrc, imgBig.src) + 1;
    }
    if (i >= getArrayImageSrc.length) {
      i = 0;
    }
    imgBig.src = getArrayImageSrc[i];
  };

  var buttonLeftClick = function buttonLeftClick() {
    var i = findIndex(getArrayImageSrc, imgBig.src);
    if (i === 0) {
      i = i - 1;
    } else {
      i = findIndex(getArrayImageSrc, imgBig.src) - 1;
    }
    if (i < 0) {
      i = getArrayImageSrc.length - 1;
    }
    imgBig.src = getArrayImageSrc[i];
  };

  var openPhoto = function openPhoto(image) {
    var imageSrc = image.src;
    imgBig.src = imageSrc;
    imgPopup.style.display = 'flex';
    document.body.classList.add('img__modal-open');
  };

  imgAll.forEach(function (img) {
    if (img.src === window.location.href) {
      img.remove();
    }
    img.addEventListener('click', function () {
      openPhoto(img);
      imgButtomRight.addEventListener('click', buttonRightClick);
      imgButtomLeft.addEventListener('click', buttonLeftClick);
      imgBig.addEventListener('click', buttonRightClick);
    });
  });
  imgClose.addEventListener('click', closePopup);
})();

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var ESC_KEYCODE = 27;

  if (window.localStorage) {
    var elements = document.querySelectorAll('[name]');

    for (var i = 0, length = elements.length; i < length; i++) {
      (function (element) {
        var name = element.getAttribute('name');
        element.value = localStorage.getItem(name) || '';
        element.onkeyup = function () {
          localStorage.setItem(name, element.value);
        };
      })(elements[i]);
    }
  }

  window.onEscPress = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };
})();

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi ./src/main.js ./src/library.blocks/img/img.js ./src/style.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.js */"./src/main.js");
__webpack_require__(/*! ./src/library.blocks/img/img.js */"./src/library.blocks/img/img.js");
module.exports = __webpack_require__(/*! ./src/style.scss */"./src/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=gaross.js.map