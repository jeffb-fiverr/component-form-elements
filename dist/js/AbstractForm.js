'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractForm = function (_React$Component) {
    _inherits(AbstractForm, _React$Component);

    function AbstractForm() {
        _classCallCheck(this, AbstractForm);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AbstractForm).apply(this, arguments));
    }

    _createClass(AbstractForm, [{
        key: 'doSomething',
        value: function doSomething() {
            console.info('oh my damn, its working!');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var viewModel = this.props.model,
                childrenWithProps = _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    doSomething: _this2.doSomething
                });
            });

            return _react2.default.createElement(
                'form',
                { method: viewModel.formMethod, action: viewModel.formAction },
                childrenWithProps
            );
        }
    }]);

    return AbstractForm;
}(_react2.default.Component);

exports.default = AbstractForm;