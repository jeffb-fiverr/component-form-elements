import React from 'react';

class Dropdown extends React.Component {

    componentWillMount() {
        this.setState({
          "activeOption" : this.props.model.defaultText,
          "activeValue" : null,
          "dropdownOpen" : false
        });

        this.dropdownChoices = this.getDropdownChoices(this.props.model);
    }

    toggleDropdown(e) {
        e.preventDefault();

        this.setState({"dropdownOpen" : !this.state.dropdownOpen});
    }

    chooseDropdownChoice(e) {
        e.preventDefault();

        const chosenOptionData = e.target.dataset,
              optionLabel = chosenOptionData.label,
              optionValue = chosenOptionData.value;

        this.setState({
            "activeOption" : optionLabel,
            "activeValue" : optionValue,
            "dropdownOpen" : false
        });
    }

    getDropdownChoices(model) {

        return model.options.map((option, key) => {
            return (
                <li key={key}>
                    <a
                        href="#!"
                        className="js-gtm-event-auto"
                        data-gtm-category="gig-page-triple"
                        data-gtm-action="click"
                        data-gtm-label="reviews-most-recent"
                        data-reviews-type="all"
                        rel="noindex, nofollow"
                        data-value={option.value}
                        data-label={option.label}
                        onClick={this.chooseDropdownChoice.bind(this)}>
                        {option.label}
                    </a>
                </li>
            );
        });
    }

    render() {

        return (
            <div className={'fake-dropdown js-gig-review-dropdown ' + (this.state.dropdownOpen ? 'open' : '')}>
                <a href="#!" className="dropdown-toggle" data-toggle="dropdown" rel="noindex, nofollow" onClick={this.toggleDropdown.bind(this)}>{this.state.activeOption}</a>
                <input type="hidden" name={this.props.model.hiddenInputName} value={this.state.activeValue} />
                <ul className="dropdown-menu" role="menu">
                    {this.dropdownChoices}
                </ul>
            </div>
        );
    }
}

export default Dropdown;