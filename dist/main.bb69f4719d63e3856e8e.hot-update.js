/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson18_part1"]("main",{

/***/ "./src/modules/sandForm.js":
/*!*********************************!*\
  !*** ./src/modules/sandForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// eslint-disable-next-line no-unused-vars\nvar sandForm = function sandForm() {\n  var errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var popup = document.querySelector('.popup');\n  var form = document.getElementById('form1'),\n      formEnd = document.getElementById('form2'),\n      formPopUp = document.getElementById('form3');\n  var formInput = form.querySelectorAll('input'),\n      formInputEnd = formEnd.querySelectorAll('input'),\n      formInputPopUp = formPopUp.querySelectorAll('input');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;'; //валидация\n\n  var validData = function validData() {\n    var phoneMask = /[^0-9+]/;\n    var nameMask = /[^А-Яа-яЁё\\s]/; // eslint-disable-next-line no-useless-escape\n\n    var messageMask = /[^А-Яа-яЁё\\s\\d\\.\\,\\!\\:\\?]/;\n    formInput.forEach(function (item) {\n      return validation(item);\n    });\n    formInputEnd.forEach(function (item) {\n      return validation(item);\n    });\n    formInputPopUp.forEach(function (item) {\n      return validation(item);\n    });\n\n    function validation(itemValid) {\n      itemValid.addEventListener('input', function () {\n        if (itemValid.name === 'user_phone') {\n          itemValid.value = itemValid.value.replace(phoneMask, '');\n          itemValid.setAttribute('pattern', \"[0-9+]{11,}\");\n        } else if (itemValid.name === 'user_name') {\n          itemValid.value = itemValid.value.replace(nameMask, '');\n          itemValid.setAttribute('pattern', '[А-Яа-яЁё\\\\s]{2,50}');\n        } else if (itemValid.name === 'user_message') {\n          itemValid.value = itemValid.value.replace(messageMask, '');\n        } else if (itemValid.name === 'user_email') {\n          itemValid.value = itemValid.value.replace(/[А-Яа-яЁё]/, '');\n          itemValid.setAttribute('pattern', '[\\\\w-]+@[\\\\w-]+\\\\.\\\\w{2,3}');\n        }\n      });\n    }\n  };\n\n  validData();\n\n  var formClear = function formClear(formElem) {\n    formElem.forEach(function (item) {\n      if (item.type === 'text' || item.type === 'email' || item.type === 'tel') {\n        item.value = '';\n      }\n    });\n    setTimeout(function () {\n      return statusMessage.textContent = '';\n    }, 4000);\n  }; // отслеживание первой формы\n\n\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.append(statusMessage);\n    statusMessage.textContent = loadMessage;\n    statusMessage.style.cssText = 'color: #fff;';\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    }); // eslint-disable-next-line no-use-before-define\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      formClear(formInput);\n    })[\"catch\"](function (error) {\n      console.error(error);\n      statusMessage.textContent = errorMessage;\n      formClear(formInput);\n    });\n  }); // отслеживание последней формы\n\n  formEnd.addEventListener('submit', function (event) {\n    event.preventDefault();\n    formEnd.append(statusMessage);\n    statusMessage.textContent = loadMessage;\n    statusMessage.style.cssText = 'color: #fff;';\n    var formData = new FormData(formEnd);\n    var bodyEnd = {};\n    formData.forEach(function (val, key) {\n      bodyEnd[key] = val;\n    }); // eslint-disable-next-line no-use-before-define\n\n    postData(bodyEnd).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      formClear(formInputEnd);\n    })[\"catch\"](function (error) {\n      console.error(error);\n      statusMessage.textContent = errorMessage;\n      formClear(formInputEnd);\n    });\n  }); // отслеживание попап формы\n\n  formPopUp.addEventListener('submit', function (event) {\n    event.preventDefault();\n    formPopUp.append(statusMessage);\n    statusMessage.textContent = loadMessage;\n    statusMessage.style.cssText = 'color: #19b5fe;';\n    var formData = new FormData(formPopUp);\n    var bodyPopUp = {};\n    formData.forEach(function (val, key) {\n      bodyPopUp[key] = val;\n    }); // eslint-disable-next-line no-use-before-define\n\n    postData(bodyPopUp).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n      formClear(formInputPopUp);\n    })[\"catch\"](function (error) {\n      console.error(error);\n      statusMessage.textContent = errorMessage;\n      formClear(formInputPopUp);\n      setTimeout(function () {\n        return popup.style.display = 'none';\n      }, 4000);\n    });\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sandForm);\n\n//# sourceURL=webpack://lesson18_part1/./src/modules/sandForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "f40d23179eee61644c41"
/******/ 	})();
/******/ 	
/******/ }
);