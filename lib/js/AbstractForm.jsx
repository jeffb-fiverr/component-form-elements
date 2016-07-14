import React from 'react';

class AbstractForm extends React.Component {

    componentWillMount() {
        this.childrenWithProps = this.getChildrenWithProps();
    }

    displayFollowUp(question) {
        console.info('question/followup information', question);
    }

    getChildrenWithProps() {
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                displayFollowUp: this.displayFollowUp
            });
        });
    }

    render() {

        const viewModel = this.props.model;

        return (
            <form method={viewModel.formMethod} action={viewModel.formAction}>
                {this.childrenWithProps}
            </form>
        );
    }
}

export default AbstractForm;