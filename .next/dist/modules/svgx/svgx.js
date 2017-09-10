'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flushToSvgSymbols = flushToSvgSymbols;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stringHash = require('string-hash');

var _stringHash2 = _interopRequireDefault(_stringHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Les/Sites/svgx/modules/svgx/svgx.js';


var svgs = [];

function flushToSvgSymbols() {
  var symbols = svgs.map(function (el, i) {
    return _react2.default.createElement('symbol', (0, _extends3.default)({
      id: 'svgx-12345'
    }, el.props, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }));
  });
  return _react2.default.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    style: { display: 'none' },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, symbols);
}

if (process.browser) {
  window.flush = flushToSvgSymbols;
  window.react = _reactDom2.default;
}

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      mount(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      unmount(this);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('use', {
        xlinkHref: '#svgx-12345' // this needs to be a hash of the svg synmbol
        , __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }));
      // return null
      // this will eventually render the <use xlinkHref="">
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;


function mount(n) {
  svgs.push(n);
  return;
}

function unmount(n) {
  var i = svgs.indexOf(n);
  if (i < 0) {
    return;
  }

  svgs.splice(i, 1);
  return;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvc3ZneC9zdmd4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJoYXNoIiwic3ZncyIsImZsdXNoVG9TdmdTeW1ib2xzIiwic3ltYm9scyIsIm1hcCIsImVsIiwiaSIsInByb3BzIiwiZGlzcGxheSIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwiZmx1c2giLCJyZWFjdCIsIm1vdW50IiwidW5tb3VudCIsIm4iLCJwdXNoIiwiaW5kZXhPZiIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNTyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5oQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sT0FBTixBQUFhLEFBRWI7O0FBQU8sNkJBQTZCLEFBQ2xDO01BQU0sZUFBVSxBQUFLLElBQUksVUFBQSxBQUFDLElBQUQsQUFBSyxHQUFNLEFBQ2xDOztVQUNFLEFBQ0s7QUFBSCxPQUNJLEdBRk4sQUFFUztXQUZULEFBR087O2tCQUhQO29CQURGLEFBQ0UsQUFNSDtBQU5HO0FBR0UsTUFIRjtBQUZKLEFBQWdCLEFBU2hCLEdBVGdCO3lCQVVkLGNBQUE7V0FBQSxBQUNRLEFBQ047V0FBTyxFQUFFLFNBRlgsQUFFUyxBQUFXOztnQkFGcEI7a0JBQUEsQUFJRztBQUpIO0FBQ0UsR0FERixFQURGLEFBQ0UsQUFPSDs7O0FBRUQsSUFBSSxRQUFKLEFBQVksU0FBUyxBQUNuQjtTQUFBLEFBQU8sUUFBUCxBQUFlLEFBQ2Y7U0FBQSxBQUFPLEFBQVEsQUFDaEI7Ozs7Ozs7Ozs7Ozs7O3lDQUdzQixBQUNuQjtZQUFBLEFBQU0sQUFDUDs7Ozt3Q0FFbUIsQUFFbkI7OzsyQ0FFc0IsQUFDckI7Y0FBQSxBQUFRLEFBQ1Q7Ozs7NkJBRVEsQUFDUDs2QkFDRSxjQUFBO2VBQUEsQUFDUTs7b0JBRFI7c0JBQUEsQUFHRTtBQUhGO0FBQ0UsT0FERjttQkFHRSxBQUNZLGNBRFosQUFDMEI7QUFBeEI7b0JBREY7c0JBSkosQUFDRSxBQUdFLEFBS0o7QUFMSTs7QUFNSjtBQUNEOzs7OztBQXpCMEIsQTs7Ozs7QUE0QjdCLFNBQUEsQUFBUyxNQUFULEFBQWUsR0FBRyxBQUNoQjtPQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7QUFDRDs7O0FBRUQsU0FBQSxBQUFTLFFBQVQsQUFBaUIsR0FBRyxBQUNsQjtNQUFNLElBQUksS0FBQSxBQUFLLFFBQWYsQUFBVSxBQUFhLEFBQ3ZCO01BQUksSUFBSixBQUFRLEdBQUcsQUFDVDtBQUNEO0FBRUQ7O09BQUEsQUFBSyxPQUFMLEFBQVksR0FBWixBQUFlLEFBQ2Y7QUFDRCIsImZpbGUiOiJzdmd4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9MZXMvU2l0ZXMvc3ZneCJ9