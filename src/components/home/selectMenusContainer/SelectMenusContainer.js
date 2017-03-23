/**
 * Created by lewisjames-odwin on 15/11/2016.
 */

import React, {PropTypes} from 'react';
import * as constants from '../../Constants';
import SelectMenu from '../../common/selectMenu/SelectMenu';


class SelectMenusContainer extends React.Component {

    constructor(props) {
        super(props);
        //initial state goes here
    }


    render() {

        return (

            <div className="select-menus-container ">
                <div className="row">
                    <div className={constants.isObjectEmpty(this.props.selectedBookObject) ? "col-sm-8 col-sm-offset-2 col-xs-12 col-md-offset-3 col-md-6" : "col-xs-8"}>
                        <SelectMenu htmlFor={"categoryList"} options={[this.props.renderCategoryOptions]}
                                    onChange={this.props.onChangeBookSelectMenu}
                                    title={constants.isObjectEmpty(this.props.selectedBookObject) ? "" : "Book"}
                                    disabledOption={constants.isObjectEmpty(this.props.selectedBookObject) ? "Please tap here to select a book..." : "Please choose..."}/>

                    </div>
                    <div className=" col-xs-4">
                        {constants.isObjectEmpty(this.props.selectedBookObject) ? <div></div>
                            :
                            <SelectMenu htmlFor={"pageList"} options={[this.props.renderPageOptions]}
                                        onChange={this.props.onChangePageSelectMenu} title={"Page"}
                                        disabledOption={"Please choose..."}/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}


SelectMenusContainer.propTypes = {
    renderCategoryOptions: React.PropTypes.Object,
    onChangeBookSelectMenu: React.PropTypes.Object,
    onChangePageSelectMenu: React.PropTypes.Object,
    renderPageOptions: React.PropTypes.Object,
    selectedBookObject: React.PropTypes.Object,
    selectedPage: React.PropTypes.integer
};

export default SelectMenusContainer;