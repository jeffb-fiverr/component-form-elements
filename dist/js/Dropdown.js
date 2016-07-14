"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown() {
        _classCallCheck(this, Dropdown);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).apply(this, arguments));
    }

    _createClass(Dropdown, [{
        key: "componentWillMount",
        value: function componentWillMount() {

            var model = this.props.model,
                userChoice = model.userChoice;

            this.setState({
                "activeOption": userChoice ? userChoice.label : this.props.model.defaultText,
                "activeValue": userChoice ? userChoice.value : "",
                "dropdownOpen": false
            });

            this.dropdownChoices = this.getDropdownChoices(this.props.model);
        }
    }, {
        key: "toggleDropdown",
        value: function toggleDropdown(e) {
            e.preventDefault();

            this.setState({ "dropdownOpen": !this.state.dropdownOpen });
        }
    }, {
        key: "chooseDropdownChoice",
        value: function chooseDropdownChoice(e) {
            e.preventDefault();

            var chosenOptionData = e.target.dataset,
                optionLabel = chosenOptionData.label,
                optionValue = chosenOptionData.value;

            this.setState({
                "activeOption": optionLabel,
                "activeValue": optionValue,
                "dropdownOpen": false
            });
        }
    }, {
        key: "getDropdownChoices",
        value: function getDropdownChoices(model) {
            var _this2 = this;

            return model.options.map(function (option, key) {
                return _react2.default.createElement(
                    "li",
                    { key: key },
                    _react2.default.createElement(
                        "a",
                        {
                            href: "#!",
                            className: "js-gtm-event-auto",
                            "data-gtm-category": "gig-page-triple",
                            "data-gtm-action": "click",
                            "data-gtm-label": "reviews-most-recent",
                            "data-reviews-type": "all",
                            rel: "noindex, nofollow",
                            "data-value": option.value,
                            "data-label": option.label,
                            onClick: _this2.chooseDropdownChoice.bind(_this2) },
                        option.label
                    )
                );
            });
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: 'fake-dropdown js-gig-review-dropdown ' + (this.state.dropdownOpen ? 'open' : '') },
                _react2.default.createElement(
                    "a",
                    { href: "#!", className: "dropdown-toggle", "data-toggle": "dropdown", rel: "noindex, nofollow", onClick: this.toggleDropdown.bind(this) },
                    this.state.activeOption
                ),
                _react2.default.createElement("input", { type: "hidden", name: this.props.model.hiddenInputName, value: this.state.activeValue }),
                _react2.default.createElement(
                    "ul",
                    { className: "dropdown-menu", role: "menu" },
                    this.dropdownChoices
                )
            );
        }
    }]);

    return Dropdown;
}(_react2.default.Component);

exports.default = Dropdown;