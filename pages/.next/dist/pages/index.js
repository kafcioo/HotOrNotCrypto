'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _reactjsPopup = require('reactjs-popup');

var _reactjsPopup2 = _interopRequireDefault(_reactjsPopup);

var _semanticUiReact = require('semantic-ui-react');

var _localInstanceOfContract = require('../ethereum/localInstanceOfContract.js');

var _localInstanceOfContract2 = _interopRequireDefault(_localInstanceOfContract);

var _Layout = require('../componenets/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _RequestRow = require('../componenets/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\kafcioo\\HotOrNotCrypto\\pages\\index.js?entry';


var ProjectIndex = function (_Component) {
  (0, _inherits3.default)(ProjectIndex, _Component);

  function ProjectIndex() {
    (0, _classCallCheck3.default)(this, ProjectIndex);

    return (0, _possibleConstructorReturn3.default)(this, (ProjectIndex.__proto__ || (0, _getPrototypeOf2.default)(ProjectIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProjectIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      return this.props.sorted_projects.map(function (sorted_projects, key) {
        return _react2.default.createElement(_RequestRow2.default, {
          id: key + 1,
          key: key,
          sorted_projects: sorted_projects,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_semanticUiReact.Table, { selectable: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(HeaderCell, { width: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Position'), _react2.default.createElement(HeaderCell, { width: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Logo'), _react2.default.createElement(HeaderCell, { width: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Name'), _react2.default.createElement(HeaderCell, { width: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'Votes'), _react2.default.createElement(HeaderCell, { width: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' Up Vote'), _react2.default.createElement(HeaderCell, { width: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, ' Down Vote'), _react2.default.createElement(HeaderCell, { width: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'More Details'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, this.renderRow())));
    }
  }], [{
    key: 'getInitialProps',

    // Get list of Project from smart contract (ETH)
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var getNumberOfvoters, getProjects, projectsList, sorted_projects;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _localInstanceOfContract2.default.methods.getNumberOfvoters().call();

              case 2:
                getNumberOfvoters = _context.sent;
                _context.next = 5;
                return _localInstanceOfContract2.default.methods.getProjects().call();

              case 5:
                getProjects = _context.sent;
                _context.next = 8;
                return _promise2.default.all(Array(parseInt(getProjects)).fill().map(function (element, index) {
                  return _localInstanceOfContract2.default.methods.projects(index).call();
                }));

              case 8:
                projectsList = _context.sent;
                sorted_projects = _lodash2.default.orderBy(projectsList, ['votes'], ['desc']);

                console.log(sorted_projects);
                //const sorted_users = _.sortBy(projectsList, ['index', 'votes']);
                return _context.abrupt('return', { sorted_projects: sorted_projects, getNumberOfvoters: getNumberOfvoters, getProjects: getProjects });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProjectIndex;
}(_react.Component);

exports.default = ProjectIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBvcHVwIiwiQnV0dG9uIiwiVGFibGUiLCJJbWFnZSIsIkNvbnRyYWN0IiwiTGF5b3V0IiwiTGluayIsIlJlcXVlc3RSb3ciLCJfIiwiUHJvamVjdEluZGV4IiwicHJvcHMiLCJzb3J0ZWRfcHJvamVjdHMiLCJtYXAiLCJrZXkiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvdyIsIm1ldGhvZHMiLCJnZXROdW1iZXJPZnZvdGVycyIsImNhbGwiLCJnZXRQcm9qZWN0cyIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImluZGV4IiwicHJvamVjdHMiLCJwcm9qZWN0c0xpc3QiLCJvcmRlckJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBTyxBQUFNOztBQUN0QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7OztnQ0FvQk8sQUFDVDtrQkFFRSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixJQUFJLFVBQUEsQUFBQyxpQkFBRCxBQUFpQixLQUFNLEFBQ3REOytCQUFPLEFBQUM7Y0FDRCxNQURBLEFBQ0ksQUFDVDtlQUZLLEFBRUMsQUFDTjsyQkFISyxBQUdhOztzQkFIYjt3QkFBUCxBQUFPLEFBTVY7QUFOVTtBQUNMLFNBREs7QUFIVCxBQUVFLEFBU0wsT0FUSzs7Ozs2QkFVRztVQUFBLEFBRUEsU0FGQSxBQUVnQyx1QkFGaEMsQUFFQTtVQUZBLEFBRVEsTUFGUixBQUVnQyx1QkFGaEMsQUFFUTtVQUZSLEFBRWEsYUFGYixBQUVnQyx1QkFGaEMsQUFFYTtVQUZiLEFBRXlCLE9BRnpCLEFBRWdDLHVCQUZoQyxBQUV5QixBQUVoQzs7NkJBQVEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFFTjtBQUZNO0FBQUEsT0FBQSxrQkFFTixBQUFDLHdDQUFNLFlBQVAsTUFBa0IsTUFBbEIsQUFBdUI7b0JBQXZCO3NCQUFBLEFBQ0k7QUFESjt5QkFDSyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw2QkFBQyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQUhGLEFBR0UsQUFDQSx5QkFBQyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQUpGLEFBSUUsQUFDQSwwQkFBQyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQUxGLEFBS0UsQUFDQSw2QkFBQyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQU5GLEFBTUUsQUFDQSwrQkFBQyxjQUFELGNBQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUE7QUFBQTtTQVRSLEFBQ0ksQUFDRSxBQU9FLEFBR0osbUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsY0FkTixBQUFRLEFBRU4sQUFZSSxBQUFPLEFBQUssQUFJakI7OztTQXJERDs7Ozs7Ozs7Ozs7dUJBRWdDLGtDQUFBLEFBQVMsUUFBVCxBQUFpQixvQkFBakIsQSxBQUFxQzs7bUJBQS9EO0E7O3VCQUNvQixrQ0FBQSxBQUFTLFFBQVQsQUFBaUIsYyxBQUFqQixBQUErQjs7bUJBQW5EO0E7O3lDQUNxQixBQUFRLFVBQzdCLFNBQU4sQUFBTSxBQUFTLGNBQWYsQUFDQyxPQURELEFBRUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVMsQUFDdEI7eUJBQU8sa0NBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDekM7QUFMMEIsQSxBQUMzQixpQkFBQSxDQUQyQjs7bUJBQXJCO0Esd0NBTUE7QSxrQ0FBa0IsaUJBQUEsQUFBRSxRQUFGLEFBQVUsY0FBYyxDQUF4QixBQUF3QixBQUFDLFVBQVUsQyxBQUFuQyxBQUFtQyxBQUFDLEFBQzNEOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNmOztpREFDVSxFQUFFLGlCQUFGLGlCQUFrQixtQkFBbEIsbUJBQW9DLGFBQXBDLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmaUIsQSxBQXlEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMva2FmY2lvby9Ib3RPck5vdENyeXB0byJ9