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

var _Layout = require('../../componenets/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _localInstanceOfContract = require('../../ethereum/localInstanceOfContract.js');

var _localInstanceOfContract2 = _interopRequireDefault(_localInstanceOfContract);

var _RequestRow = require('../../componenets/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\kafcioo\\HotOrNotCrypto\\pages\\projects\\showProject.js?entry';


var viewVoters = function (_Component) {
  (0, _inherits3.default)(viewVoters, _Component);

  function viewVoters() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, viewVoters);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = viewVoters.__proto__ || (0, _getPrototypeOf2.default)(viewVoters)).call.apply(_ref, [this].concat(args))), _this), _this.upVote = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
              return _localInstanceOfContract2.default.methods.upVote(_this.props.currentProject).send({ from: accounts[0] });

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
              return _localInstanceOfContract2.default.methods.downVote(_this.props.currentProject).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(viewVoters, [{
    key: 'RenderPvotersList',
    value: function RenderPvotersList() {
      var items = this.props.posstiveVoters;
      var listItems = items.map(function (item) {
        return _react2.default.createElement(_semanticUiReact.List.Item, { key: item.toString(), __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, item);
      });
      return _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, listItems);
    }
  }, {
    key: 'RenderNvotersList',
    value: function RenderNvotersList() {
      var items = this.props.negativeVoters;
      var listItems = items.map(function (item) {
        return _react2.default.createElement(_semanticUiReact.List.Item, { key: item.toString(), __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, item);
      });
      return _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, listItems);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { celled: 'celled', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'More Details'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { floated: 'left', size: 'medium', src: this.props.projects.imageLink, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 13, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Item.Group, { style: {
          margin: "3%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Item.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_semanticUiReact.Item.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.projects.name)), _react2.default.createElement(_semanticUiReact.Item.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, this.props.projects.website)), _react2.default.createElement(_semanticUiReact.Item.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.props.projects.decryption))))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: {
          marginTop: "1%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.List, { size: 'large', style: {
          textAlign: "center"
        }, celled: 'celled', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { size: 'medium', color: 'green', basic: 'basic', onClick: this.upVote, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Up Vote'), _react2.default.createElement('h2', { style: {
          textAlign: "center"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Positive votes (', this.props.posstiveVoters.length, ')')), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, this.RenderPvotersList()))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: {
          marginTop: "1%"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_semanticUiReact.List, { size: 'large', style: {
          textAlign: "center"
        }, celled: 'celled', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { size: 'medium', color: 'red', basic: 'basic', onClick: this.downVote, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'Down Vote'), _react2.default.createElement('h2', { style: {
          textAlign: "center"
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, 'Negative votes (', this.props.negativeVoters.length, ')')), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, this.RenderNvotersList()))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
        var currentProject, projects, posstiveVoters, negativeVoters;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentProject = props.query.id;
                _context3.next = 3;
                return _localInstanceOfContract2.default.methods.projects(currentProject).call();

              case 3:
                projects = _context3.sent;
                _context3.next = 6;
                return _localInstanceOfContract2.default.methods.getPossitiveVoters(currentProject).call();

              case 6:
                posstiveVoters = _context3.sent;
                _context3.next = 9;
                return _localInstanceOfContract2.default.methods.getNegativeVoters(currentProject).call();

              case 9:
                negativeVoters = _context3.sent;
                return _context3.abrupt('return', { posstiveVoters: posstiveVoters, negativeVoters: negativeVoters, projects: projects, currentProject: currentProject });

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return viewVoters;
}(_react.Component);

exports.default = viewVoters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9qZWN0c1xcc2hvd1Byb2plY3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDb250cmFjdCIsIlJlcXVlc3RSb3ciLCJCdXR0b24iLCJMaXN0IiwiR3JpZCIsIkl0ZW0iLCJJbWFnZSIsIndlYjMiLCJMaW5rIiwidmlld1ZvdGVycyIsInVwVm90ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInByb3BzIiwiY3VycmVudFByb2plY3QiLCJzZW5kIiwiZnJvbSIsImRvd25Wb3RlIiwiaXRlbXMiLCJwb3NzdGl2ZVZvdGVycyIsImxpc3RJdGVtcyIsIm1hcCIsIml0ZW0iLCJ0b1N0cmluZyIsIm5lZ2F0aXZlVm90ZXJzIiwicHJvamVjdHMiLCJpbWFnZUxpbmsiLCJtYXJnaW4iLCJuYW1lIiwid2Vic2l0ZSIsImRlY3J5cHRpb24iLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJsZW5ndGgiLCJSZW5kZXJQdm90ZXJzTGlzdCIsIlJlbmRlck52b3RlcnNMaXN0IiwicXVlcnkiLCJpZCIsImNhbGwiLCJnZXRQb3NzaXRpdmVWb3RlcnMiLCJnZXROZWdhdGl2ZVZvdGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFRLEFBQVEsQUFBTSxBQUFNLEFBQU07O0FBQ2xDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7b04sQUF5Qkosa0ZBQVMsbUJBQUE7VUFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDUDtvQkFETyxBQUNQLEFBQU07OEJBREM7cUJBRWdCLGNBQUEsQUFBSyxJQUZyQixBQUVn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RCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQWhCTixBQUNFLEFBR0UsQUFZRSxBQUNHLEFBQUssQUFLWix3Q0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CLEdBQUc7cUJBQXZCLEFBQThCLEFBQ2Y7QUFEZSxBQUMxQjtvQkFESjtzQkFBQSxBQUdFO0FBSEY7eUJBR0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsU0FBUTtxQkFBbkIsQUFBMEIsQUFDWDtBQURXLEFBQ3RCLFdBQ0MsUUFGTCxBQUVZO29CQUZaO3NCQUFBLEFBSUU7QUFKRjt5QkFJRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsT0FBdEIsQUFBNEIsT0FBTSxPQUFsQyxBQUF3QyxTQUFRLFNBQVMsS0FBekQsQUFBOEQ7b0JBQTlEO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsOEJBQUEsY0FBQSxRQUFJO3FCQUFKLEFBQVcsQUFDSTtBQURKLEFBQ1A7b0JBREo7c0JBQUE7QUFBQTtTQUVzQix5QkFBQSxBQUFLLE1BQUwsQUFBVyxlQUZqQyxBQUVnRCxRQVZwRCxBQUlFLEFBSUUsQUFJRix1QkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBeEVWLEFBQVEsQUFFTixBQWlDRSxBQXNCRSxBQUdFLEFBWUUsQUFDRyxBQUFLLEFBUW5COzs7Ozs2RyxBQXJINEI7Ozs7O21CQUNyQjtBLGlDQUFpQixNQUFBLEFBQU0sTUFBTSxBOzt1QkFDWixrQ0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsZ0JBQTFCLEFBQTBDLEE7O21CQUEzRDtBOzt1QkFDdUIsa0NBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxnQkFBZ0IsQSxBQUFwRDs7bUJBQXZCO0E7O3VCQUN1QixrQ0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEFBQW1DLGdCQUFuQyxBQUFtRCxBOzttQkFBMUU7QTtrREFDQyxFQUFDLGdCQUFELGdCQUFpQixnQkFBakIsZ0JBQWlDLFVBQWpDLFVBQTJDLGdCQUEzQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUGMsQSxBQTBIekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd1Byb2plY3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva2FmY2lvby9Ib3RPck5vdENyeXB0byJ9