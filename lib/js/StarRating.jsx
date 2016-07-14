import React from 'react';

class StarRating extends React.Component {

    componentWillMount() {
        const model = this.props.model,
              userSubmittedRating = model.userSubmittedRating || 0;

        this.setState({
          tempRating: userSubmittedRating,
          permRating: userSubmittedRating
        });
    }

    getFakeStars(model) {
        const stars = [1,2,3,4,5];

        return stars.map((num) => {
            return (
                <span
                    key={num}
                    className={'fake-star-' + model.starSize + ' fake-star-' + num}
                    data-star-id={num}
                    onMouseEnter={this.mouseEnterFakeStars.bind(this)}
                    onClick={this.fakeStarClicked.bind(this)}>
                        <span
                            className="fake-hint-wrap hint--top hint--always"
                            data-hint={model.ratingHints[this.state.tempRating]}/>
                </span>
            );
        });
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
        const viewModel = this.props.model,
              fakeStars = this.getFakeStars(viewModel);

        return (
            <div className="star-rating-container" onMouseLeave={this.mouseLeaveFakeStars.bind(this)}>
                <input type="hidden" name={viewModel.hiddenFieldName} value={this.state.permRating}  />
                <span className={'star-rating-s' + viewModel.starSize + ' rate-' + this.state.tempRating}>
                    {this.state.tempRating}
                </span>

                <div className="fake-stars-container">
                    {fakeStars}
                </div>
            </div>
        );
    }
}

export default StarRating;