"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _indecisionApp = _interopRequireDefault(require("./components/indecisionApp"));

require("normalize.css/normalize.css");

require("./styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_indecisionApp["default"], null), document.getElementById('app'));
