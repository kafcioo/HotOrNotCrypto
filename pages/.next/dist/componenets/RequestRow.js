'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _localInstanceOfContract = require('../ethereum/localInstanceOfContract.js');

var _localInstanceOfContract2 = _interopRequireDefault(_localInstanceOfContract);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\kafcioo\\HotOrNotCrypto\\componenets\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.upVote = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return _localInstanceOfContract2.default.methods.upVote(_this.props.sorted_projects.id).send({
                from: accounts[0]

              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.downVote = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return _localInstanceOfContract2.default.methods.downVote(_this.props.sorted_projects.id).send({
                from: accounts[0]

              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      //const {id, name, votes} =this.props;

      return _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.id)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, ' ', _react2.default.createElement(_semanticUiReact.Image, { src: this.props.sorted_projects.imageLink,
        size: 'tiny',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.props.sorted_projects.name)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.sorted_projects.votes)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, ' ', _react2.default.createElement(_semanticUiReact.Button, { size: 'small', color: 'green', icon: 'thumbs up outline', basic: true, onClick: this.upVote, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, ' Up Vote ')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, ' ', _react2.default.createElement(_semanticUiReact.Button, { size: 'small', color: 'red', basic: true, onClick: this.downVote, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, ' Down Vote ')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_routes.Link, { route: '/projects/' + this.props.sorted_projects.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { size: 'small', color: 'blue', basic: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Details '))));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzXFxSZXF1ZXN0Um93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJJbWFnZSIsIndlYjMiLCJDb250cmFjdCIsIkxpbmsiLCJSZXF1ZXN0Um93IiwidXBWb3RlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwicHJvcHMiLCJzb3J0ZWRfcHJvamVjdHMiLCJpZCIsInNlbmQiLCJmcm9tIiwiZG93blZvdGUiLCJSb3ciLCJDZWxsIiwiaW1hZ2VMaW5rIiwibmFtZSIsInZvdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFPLEFBQU87O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFZOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O29OLEFBRUosa0ZBQVMsbUJBQUE7VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDVDtvQkFEUyxBQUNULEFBQU07OEJBREc7cUJBRWUsY0FBQSxBQUFLLElBRnBCLEFBRWUsQUFBUzs7aUJBQXpCO0FBRkMsa0NBQUE7OEJBQUE7dURBR0QsQUFBUyxRQUFULEFBQWlCLE9BQU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxnQkFBbkMsQUFBbUQsSUFBbkQsQUFBdUQ7c0JBQ3JELFNBSkQsQUFHRCxBQUE0RCxBQUMxRCxBQUFTOztBQURpRCxBQUNoRSxlQURJOztpQkFIQztpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBLGVBUVAsQSxvRkFBVyxvQkFBQTtVQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNYO29CQURXLEFBQ1gsQUFBTTsrQkFESztxQkFFYSxjQUFBLEFBQUssSUFGbEIsQUFFYSxBQUFTOztpQkFBekI7QUFGRyxtQ0FBQTsrQkFBQTt1REFHSCxBQUFTLFFBQVQsQUFBaUIsU0FBUyxNQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFyQyxBQUFxRCxJQUFyRCxBQUF5RDtzQkFDdkQsU0FKQyxBQUdILEFBQThELEFBQzVELEFBQVM7O0FBRG1ELEFBQ2xFLGVBREk7O2lCQUhHO2lCQUFBOytCQUFBOztBQUFBO21CQUFBO0E7Ozs7OzZCQVlQO1VBQUEsQUFDQyxNQURELEFBQ2EsdUJBRGIsQUFDQztVQURELEFBQ00sT0FETixBQUNhLHVCQURiLEFBQ00sQUFDYjtBQUNDOzs2QkFFRSxjQUFEOztvQkFBQTtzQkFBQSxBQUNDO0FBREQ7QUFBQSxPQUFBLGtCQUNFLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQURqQixBQUNDLEFBQU0sQUFBZ0IsQUFDdEIsc0JBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQU8scUJBQUEsQUFBQyx3Q0FBTSxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQXZCLEFBQXVDLEFBQzFDO2NBREcsQUFDRTs7b0JBREY7c0JBRlIsQUFFQyxBQUFPLEFBR0w7QUFISzsyQkFHSixjQUFEOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFBTCxBQUFXLGdCQUx6QixBQUtHLEFBQU0sQUFBZ0MsQUFDeEMsd0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEseUJBQU0sY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxnQkFOdkIsQUFNQyxBQUFNLEFBQWdDLEFBQ3RDLHlCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFPLHFCQUFBLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsT0FBckIsQUFBMkIsU0FBUSxNQUFuQyxBQUF3QyxxQkFBb0IsT0FBNUQsTUFBa0UsU0FBUyxLQUEzRSxBQUFnRjtvQkFBaEY7c0JBQUE7QUFBQTtTQVBSLEFBT0MsQUFBTyxBQUNQLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFPLHFCQUFBLEFBQUMseUNBQU8sTUFBUixBQUFhLFNBQVEsT0FBckIsQUFBMkIsT0FBTSxPQUFqQyxNQUF1QyxTQUFTLEtBQWhELEFBQXFEO29CQUFyRDtzQkFBQTtBQUFBO1NBUlIsQUFRQyxBQUFPLEFBQ0wsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyxzQkFBcUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBdEMsQUFBc0Q7b0JBQXREO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHlDQUFPLE1BQVIsQUFBYSxTQUFRLE9BQXJCLEFBQTJCLFFBQU8sT0FBbEM7b0JBQUE7c0JBQUE7QUFBQTtTQWJOLEFBRUMsQUFTRyxBQUNFLEFBQ0EsQUFPUDs7Ozs7QUE3Q3dCLEEsQUFnRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva2FmY2lvby9Ib3RPck5vdENyeXB0byJ9