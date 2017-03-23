/**
 * Created by lewisjames-odwin on 19/10/2016.
 */

import React, {PropTypes} from 'react';
import './SliderPage.css';


class SliderPage extends React.Component {

    constructor(props) {
        super(props);

    }

    //----- Lifecycle Methods ------------------------------------------------------------------------------------------


    render() {

        return (
            <div className="swiper-slide">
                <div className="mutoon-part"
                     id={this.props.part}>
                    <div className="row">
                        {
                            this.props.part == 0 ?
                                <span dir="ltr">&nbsp;</span> :
                                <h1 className="col-xs-12 text-center title">
                                    <span dir="ltr">{this.props.part} / {this.props.size - 1}</span>
                                </h1>
                        }
                    </div>

                    <div className="row">
                        <div className="col-xs-12 arabic-text" dir="rtl">
                            <div>{this.props.arabic}</div>
                        </div>
                        <div className="col-xs-12 english-text" dir="ltr">
                            <div>{this.props.english}</div>
                        </div>
                    </div>
                    <br/>

                </div>
            </div>
        );
    }


}

SliderPage.propTypes = {
    part: React.PropTypes.string,
    size: React.PropTypes.string,
    arabic: React.PropTypes.string,
    english: React.PropTypes.english
};


export default SliderPage;