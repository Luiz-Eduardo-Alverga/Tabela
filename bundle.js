/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Aluno.js":
/*!**********************!*\
  !*** ./src/Aluno.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Aluno\": () => (/* binding */ Aluno)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nvar Aluno = /*#__PURE__*/function () {\n  function Aluno(nome, matricula, nota1, nota2, nota3) {\n    _classCallCheck(this, Aluno);\n    this.nome = nome;\n    this.matricula = matricula;\n    this.nota1 = Number(nota1);\n    this.nota2 = Number(nota2);\n    this.nota3 = Number(nota3);\n  }\n  _createClass(Aluno, [{\n    key: \"calculaMedia\",\n    value: function calculaMedia() {\n      return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);\n    }\n  }]);\n  return Aluno;\n}();\n\n//# sourceURL=webpack://tabelas/./src/Aluno.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"adicionarLinha\": () => (/* binding */ adicionarLinha)\n/* harmony export */ });\nfunction adicionarLinha(tabela) {\n  var value1 = nome.value;\n  var value2 = matricula.value;\n  var value3 = Number(nota1.value);\n  var value4 = Number(nota2.value);\n  var value5 = Number(nota3.value);\n  var media = (value3 + value4 + value5) / 3;\n  var linha = document.createElement(\"tr\");\n  var coluna1 = document.createElement(\"td\");\n  var coluna2 = document.createElement(\"td\");\n  var coluna3 = document.createElement(\"td\");\n  var coluna4 = document.createElement(\"td\");\n  var coluna5 = document.createElement(\"td\");\n  var coluna6 = document.createElement(\"td\");\n  var coluna7 = document.createElement(\"td\");\n  var button = document.createElement(\"button\");\n  button.setAttribute(\"class\", \"btnTabela delete\");\n  button.textContent = \"Deletar\";\n  linha.appendChild(coluna1).textContent = value1;\n  linha.appendChild(coluna2).textContent = value2;\n  linha.appendChild(coluna3).textContent = value3;\n  linha.appendChild(coluna4).textContent = value4;\n  linha.appendChild(coluna5).textContent = value5;\n  linha.appendChild(coluna6).textContent = media.toFixed(1);\n  coluna7.appendChild(button);\n  linha.appendChild(coluna7);\n  tabela.appendChild(linha);\n  nome.value = \"\";\n  matricula.value = \"\";\n  nota1.value = \"\";\n  nota2.value = \"\";\n  nota3.value = \"\";\n}\n\n//# sourceURL=webpack://tabelas/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Aluno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Aluno */ \"./src/Aluno.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\nvar nome = document.getElementById(\"nome\");\nvar matricula = document.getElementById(\"matricula\");\nvar nota1 = document.getElementById(\"nota1\");\nvar nota2 = document.getElementById(\"nota2\");\nvar nota3 = document.getElementById(\"nota3\");\nvar btn = document.getElementById(\"btnForm\");\nvar tabela = document.getElementById(\"boletim\");\nvar alunos = [];\nbtn.onclick = function () {\n  if (nome.value.length == 0 || matricula.value.length != 3 || nota1.value >= 10 || nota2.value >= 10 || nota3.value >= 10) {\n    alert(\"Preencha os dados corretamente\");\n  } else {\n    var aluno = new _Aluno__WEBPACK_IMPORTED_MODULE_0__.Aluno();\n    aluno.nome = nome.value;\n    aluno.matricula = matricula.value;\n    aluno.nota1 = Number(nota1.value);\n    aluno.nota2 = Number(nota2.value);\n    aluno.nota3 = Number(nota3.value);\n    var media = ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3).toFixed(2);\n    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.adicionarLinha)(tabela);\n    alunos.push({\n      nome: aluno.nome,\n      matricula: aluno.matricula,\n      media: media\n    });\n    console.log(alunos);\n  }\n};\ntabela.onclick = function (event) {\n  if (event.target.classList.contains(\"delete\")) {\n    if (confirm(\"Deseja deletar os dados desse aluno?\")) {\n      event.target.parentElement.parentElement.remove();\n    }\n  }\n};\n\n//# sourceURL=webpack://tabelas/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;