import React from 'react';

class AbstractForm extends React.Component {

    doSomething() {
        console.info('oh my damn, its working!');
    }

    render() {

        const viewModel = this.props.model,
              childrenWithProps = React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, {
                      doSomething: this.doSomething
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