import React, {Component} from 'react';
import '../stylesheets/filterBox.css';

class FilterBox extends Component {

    constructor(props) {
        super(props);
        this.onFilterChange = this._onFilterChange.bind(this);
    }

    render() {
        return(
            <div className="comments-body__filter">
                <input type="text" placeholder="Search" onChange={this.onFilterChange}/>
            </div>
        );
    }

    _onFilterChange(e) {
        this.props.onFilterChange(e.target.value);
    }
}

FilterBox.propTypes = {
    onFilterChange: React.PropTypes.func
}

export default FilterBox;