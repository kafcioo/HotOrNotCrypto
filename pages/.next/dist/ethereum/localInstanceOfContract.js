'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _HotOrNotCrypto = require('./build/HotOrNotCrypto.json');

var _HotOrNotCrypto2 = _interopRequireDefault(_HotOrNotCrypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_HotOrNotCrypto2.default.interface), '0xce56a1eb5aa25d0ac77989c57773c8de3da2bd6d');
exports.default = instance;
// address of good contract 0xbdd312aa8ab364bb44811b049fbc1aec8b306fa9
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxsb2NhbEluc3RhbmNlT2ZDb250cmFjdC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiY29udHJhY3QiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVyx5QkFBUyxBQUFwQixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUlBO2tCQUFlLEFBQWY7QUFDQSIsImZpbGUiOiJsb2NhbEluc3RhbmNlT2ZDb250cmFjdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9rYWZjaW9vL0hvdE9yTm90Q3J5cHRvIn0=