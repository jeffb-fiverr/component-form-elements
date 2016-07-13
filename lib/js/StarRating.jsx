import React from 'react';

class StarRating extends React.Component {

    componentWillMount() {
        this.setState({ name: this.props.model.name });
    }

    render() {
        return (
            <div>{this.state.name}</div>
        );
    }
}

export default StarRating;