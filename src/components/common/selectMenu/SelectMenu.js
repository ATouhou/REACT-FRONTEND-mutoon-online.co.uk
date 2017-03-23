/**
 * Created by lewisjames-odwin on 16/10/2016.
 */
import React, {PropTypes} from 'react';
import './SelectMenu.css';

class SelectMenu extends React.Component {

    render() {

        return (
            <div className="form-group">
                <label className="hidden" htmlFor={this.props.htmlFor}>{this.props.title}
                </label>
                <div className="select-wrapper">
                    <i className="material-icons">arrow_drop_down</i>
                    <select className="select-menu form-control" id={this.props.htmlFor} onChange={this.props.onChange}>
                        <option disabled="disabled" selected>{this.props.disabledOption}</option>
                        {
                            this.props.options.map(function (option, i) {
                                return option;
                            })
                        }
                    </select>
                </div>
            </div>

        );
    }

}

SelectMenu.propTypes = {
    htmlFor: React.PropTypes.string,
    title: React.PropTypes.string,
    onChange: React.PropTypes.Object,
    disabledOption: React.PropTypes.string,
    options: React.PropTypes.Object
};


export default SelectMenu;