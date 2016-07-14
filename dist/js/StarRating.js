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

var StarRating = function (_React$Component) {
    _inherits(StarRating, _React$Component);

    function StarRating() {
        _classCallCheck(this, StarRating);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StarRating).apply(this, arguments));
    }

    _createClass(StarRating, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var model = this.props.model,
                userSubmittedRating = model.userSubmittedRating || 0;

            this.setState({
                tempRating: userSubmittedRating,
                permRating: userSubmittedRating
            });
        }
    }, {
        key: 'getFakeStars',
        value: function getFakeStars(model) {
            var _this2 = this;

            var stars = [1, 2, 3, 4, 5];

            return stars.map(function (num) {
                return _react2.default.createElement(
                    'span',
                    {
                        key: num,
                        className: 'fake-star-' + model.starSize + ' fake-star-' + num,
                        'data-star-id': num,
                        onMouseEnter: _this2.mouseEnterFakeStars.bind(_this2),
                        onClick: _this2.fakeStarClicked.bind(_this2) },
                    _react2.default.createElement('span', {
                        className: 'fake-hint-wrap hint--top hint--always',
                        'data-hint': model.ratingHints[_this2.state.tempRating] })
                );
            });
        }
    }, {
        key: 'mouseEnterFakeStars',
        value: function mouseEnterFakeStars(e) {
            this.setState({ tempRating: e.target.dataset.starId * 2 });
        }
    }, {
        key: 'mouseLeaveFakeStars',
        value: function mouseLeaveFakeStars() {
            this.setState({ tempRating: this.state.permRating ? this.state.permRating : 0 });
        }
    }, {
        key: 'fakeStarClicked',
        value: function fakeStarClicked(e) {
            var question = this.props.model.question;

            // set permanent rating
            this.setState({ permRating: e.target.dataset.starId * 2 });

            // check for followup
            if (typeof question.followup === 'undefined') {
                return;
            }

            // display follow up question
            this.props.displayFollowUp(question);
        }
    }, {
        key: 'render',
        value: function render() {
            var viewModel = this.props.model,
                fakeStars = this.getFakeStars(viewModel);

            return _react2.default.createElement(
                'div',
                { className: 'star-rating-container', onMouseLeave: this.mouseLeaveFakeStars.bind(this) },
                _react2.default.createElement('input', { type: 'hidden', name: viewModel.hiddenFieldName, value: this.state.permRating }),
                _react2.default.createElement(
                    'span',
                    { className: 'star-rating-s' + viewModel.starSize + ' rate-' + this.state.tempRating },
                    this.state.tempRating
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'fake-stars-container' },
                    fakeStars
                )
            );
        }
    }]);

    return StarRating;
}(_react2.default.Component);

exports.default = StarRating;