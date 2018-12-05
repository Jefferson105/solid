webpackHotUpdate("static/development/pages/clientes.js",{

/***/ "./pages/clientes.js":
/*!***************************!*\
  !*** ./pages/clientes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_NavMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavMenu */ "./components/NavMenu.js");
/* harmony import */ var _components_Crescer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Crescer */ "./components/Crescer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles */ "./components/styles.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    background-color: #1B4E85;\n    color: #FFF;\n    font-weight: bold;\n    font-size: 1rem;\n    border-radius: 25px;\n    padding: .5rem 1.5rem;\n    margin-top: 1rem;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: #1B4E85;\n    font-weight: bold;\n    font-size: 1.5rem;\n    margin: 1rem 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 2rem 6rem 2rem 3rem;\n    width: 70%;\n    box-sizing: border-box;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-image: ", ";\n    background-size: cover;\n    width: 30%;\n    clip-path: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    box-shadow: 0 0 20px 0 rgba(0,0,0,.2);\n    border-radius: 10px;\n    margin-bottom: 3rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;\n    max-width: 1000px;\n    margin: 5rem auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ListClients = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul(_templateObject());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li(_templateObject2());
var FigItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].figure(_templateObject3(), function (props) {
  return "url(".concat(props.url, ")");
}, function (props) {
  return props.right ? "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)";
});
var ClienteInfo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
var LogoCliente = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject5());
var ClienteTxt = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p(_templateObject6());
var ClientButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject7());

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "container container__sobre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isFixed: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles__WEBPACK_IMPORTED_MODULE_5__["HeaderMini"], {
        url: "/static/img/header-clientes.jpg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles__WEBPACK_IMPORTED_MODULE_5__["HeaderTitle"], {
        color: "#FFF"
      }, "Veja como a Solid vem ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "transformando empresas")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonHeader"], {
        mini: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styles__WEBPACK_IMPORTED_MODULE_5__["IconHeader"], {
        mini: true,
        src: "/static/img/expand-button.svg"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListClients, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FigItem, {
        url: "/static/img/cliente1.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClienteInfo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoCliente, {
        src: "/static/img/abclogo.jpg"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClienteTxt, null, "Veja como a Solid ajudou a ABC Cargas a sair do preju\xEDzo para o lucro de R$ 6 milh\xF5es, em 1 ano"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientButton, null, "Download Case"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Crescer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state;
})(Home));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/clientes")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=clientes.js.2954159bd658a69fff98.hot-update.js.map