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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.blocks/letter/letter.js":
/*!********************************************!*\
  !*** ./src/common.blocks/letter/letter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var imgLetters = document.querySelectorAll('.letter__img');
  var imgBig = document.querySelector('.img__big');
  var imgPopup = document.querySelector('.img__popup');
  var imgClose = document.querySelector('.img__close');
  var imgButtonRight = imgPopup.querySelector('.img__button--right');
  var imgButtonLeft = imgPopup.querySelector('.img__button--left');

  var closePopup = function closePopup() {
    imgPopup.style.display = '';
    document.body.classList.remove('img__modal-open');
  };

  var getArrayImageSrc = [].map.call(imgLetters, function (it) {
    return it.href;
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
    var imageSrc = image.href;
    imgBig.src = imageSrc;
    imgPopup.style.display = 'flex';
    document.body.classList.add('img__modal-open');
  };

  imgLetters.forEach(function (img) {
    if (img.href === window.location.href) {
      img.remove();
    }
    img.addEventListener('click', function (evt) {
      evt.preventDefault();
      openPhoto(img);
      imgButtonRight.addEventListener('click', buttonRightClick);
      imgButtonLeft.addEventListener('click', buttonLeftClick);
      imgBig.addEventListener('click', buttonRightClick);
    });
  });
  imgClose.addEventListener('click', closePopup);
})();

/***/ }),

/***/ "./src/common.blocks/license/license.js":
/*!**********************************************!*\
  !*** ./src/common.blocks/license/license.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var imgLicenses = document.querySelectorAll('.license__img');
  var imgBig = document.querySelector('.img__big');
  var imgPopup = document.querySelector('.img__popup');
  var imgClose = document.querySelector('.img__close');
  var imgButtonRight = imgPopup.querySelector('.img__button--right');
  var imgButtonLeft = imgPopup.querySelector('.img__button--left');

  var closePopup = function closePopup() {
    imgPopup.style.display = '';
    document.body.classList.remove('img__modal-open');
  };

  var getArrayImageSrc = [].map.call(imgLicenses, function (it) {
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

  imgLicenses.forEach(function (img) {
    if (img.src === window.location.href) {
      img.remove();
    }
    img.addEventListener('click', function () {
      openPhoto(img);
      imgButtonRight.addEventListener('click', buttonRightClick);
      imgButtonLeft.addEventListener('click', buttonLeftClick);
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
/*!************************************************************************************************************************!*\
  !*** multi ./src/main.js ./src/common.blocks/letter/letter.js ./src/common.blocks/license/license.js ./src/style.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.js */"./src/main.js");
__webpack_require__(/*! ./src/common.blocks/letter/letter.js */"./src/common.blocks/letter/letter.js");
__webpack_require__(/*! ./src/common.blocks/license/license.js */"./src/common.blocks/license/license.js");
module.exports = __webpack_require__(/*! ./src/style.scss */"./src/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=gaross.js.map