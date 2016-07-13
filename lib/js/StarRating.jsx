import React from 'react';

class StarRating extends React.Component {

    componentWillMount() {
        this.setState({ tempRating: 0, permRating: 0 });
    }

    mouseEnterFakeStars(e) {
        this.setState({ tempRating : (e.target.dataset.starId * 2) });
    }

    mouseLeaveFakeStars() {
        this.setState({ tempRating : (this.state.permRating) ? this.state.permRating : 0 });
    }

    fakeStarClicked(e) {
        // set permanent rating
        this.setState({ permRating : (e.target.dataset.starId * 2) });

        // check for followup
        // this.props.checkForFollowUp(this.props.model);
        this.props.doSomething();
    }

    render() {
        const viewModel = this.props.model;

        return (
            <div className="star-rating-container" onMouseLeave={this.mouseLeaveFakeStars.bind(this)}>
                <input type="hidden" name={viewModel.hiddenFieldName} value={this.state.permRating}  />
                <span className={'star-rating-s' + viewModel.starSize + ' rate-' + this.state.tempRating}>{this.state.tempRating}</span>

                <div className="fake-stars-container">
                    <span
                        className={'fake-star-' + viewModel.starSize + ' fake-star-1'}
                        data-star-id="1"
                        onMouseEnter={this.mouseEnterFakeStars.bind(this)}
                        onClick={this.fakeStarClicked.bind(this)} />
                    <span
                        className={'fake-star-' + viewModel.starSize + ' fake-star-2'}
                        data-star-id="2"
                        onMouseEnter={this.mouseEnterFakeStars.bind(this)}
                        onClick={this.fakeStarClicked.bind(this)} />
                    <span
                        className={'fake-star-' + viewModel.starSize + ' fake-star-3'}
                        data-star-id="3"
                        onMouseEnter={this.mouseEnterFakeStars.bind(this)}
                        onClick={this.fakeStarClicked.bind(this)} />
                    <span
                        className={'fake-star-' + viewModel.starSize + ' fake-star-4'}
                        data-star-id="4"
                        onMouseEnter={this.mouseEnterFakeStars.bind(this)}
                        onClick={this.fakeStarClicked.bind(this)} />
                    <span
                        className={'fake-star-' + viewModel.starSize + ' fake-star-5'}
                        data-star-id="5"
                        onMouseEnter={this.mouseEnterFakeStars.bind(this)}
                        onClick={this.fakeStarClicked.bind(this)} />
                </div>
            </div>
        );
    }
}

export default StarRating;