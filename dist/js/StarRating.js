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

var StarRating = function (_React$Component) {
    _inherits(StarRating, _React$Component);

    function StarRating() {
        _classCallCheck(this, StarRating);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StarRating).apply(this, arguments));
    }

    _createClass(StarRating, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({ tempRating: 0, permRating: 0 });
        }
    }, {
        key: "mouseEnterFakeStars",
        value: function mouseEnterFakeStars(e) {
            this.setState({ tempRating: e.target.dataset.starId * 2 });
        }
    }, {
        key: "mouseLeaveFakeStars",
        value: function mouseLeaveFakeStars() {
            this.setState({ tempRating: this.state.permRating ? this.state.permRating : 0 });
        }
    }, {
        key: "fakeStarClicked",
        value: function fakeStarClicked(e) {
            // set permanent rating
            this.setState({ permRating: e.target.dataset.starId * 2 });

            // check for followup
            // this.props.checkForFollowUp(this.props.model);
            this.props.doSomething();
        }
    }, {
        key: "render",
        value: function render() {
            var viewModel = this.props.model;

            return _react2.default.createElement(
                "div",
                { className: "star-rating-container", onMouseLeave: this.mouseLeaveFakeStars.bind(this) },
                _react2.default.createElement("input", { type: "hidden", name: viewModel.hiddenFieldName, value: this.state.permRating }),
                _react2.default.createElement(
                    "span",
                    { className: 'star-rating-s' + viewModel.starSize + ' rate-' + this.state.tempRating },
                    this.state.tempRating
                ),
                _react2.default.createElement(
                    "div",
                    { className: "fake-stars-container" },
                    _react2.default.createElement("span", {
                        className: 'fake-star-' + viewModel.starSize + ' fake-star-1',
                        "data-star-id": "1",
                        onMouseEnter: this.mouseEnterFakeStars.bind(this),
                        onClick: this.fakeStarClicked.bind(this) }),
                    _react2.default.createElement("span", {
                        className: 'fake-star-' + viewModel.starSize + ' fake-star-2',
                        "data-star-id": "2",
                        onMouseEnter: this.mouseEnterFakeStars.bind(this),
                        onClick: this.fakeStarClicked.bind(this) }),
                    _react2.default.createElement("span", {
                        className: 'fake-star-' + viewModel.starSize + ' fake-star-3',
                        "data-star-id": "3",
                        onMouseEnter: this.mouseEnterFakeStars.bind(this),
                        onClick: this.fakeStarClicked.bind(this) }),
                    _react2.default.createElement("span", {
                        className: 'fake-star-' + viewModel.starSize + ' fake-star-4',
                        "data-star-id": "4",
                        onMouseEnter: this.mouseEnterFakeStars.bind(this),
                        onClick: this.fakeStarClicked.bind(this) }),
                    _react2.default.createElement("span", {
                        className: 'fake-star-' + viewModel.starSize + ' fake-star-5',
                        "data-star-id": "5",
                        onMouseEnter: this.mouseEnterFakeStars.bind(this),
                        onClick: this.fakeStarClicked.bind(this) })
                )
            );
        }
    }]);

    return StarRating;
}(_react2.default.Component);

exports.default = StarRating;