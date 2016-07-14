import React from 'react';

class AbstractForm extends React.Component {

    displayFollowUp(question) {
        console.info('question/followup information', question);
    }

    render() {

        const viewModel = this.props.model,
              childrenWithProps = React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, {
                      displayFollowUp: this.displayFollowUp
                  })
              });


        return (
            <form method={viewModel.formMethod} action={viewModel.formAction}>
                {childrenWithProps}
            </form>
        );
    }
}

export default AbstractForm;