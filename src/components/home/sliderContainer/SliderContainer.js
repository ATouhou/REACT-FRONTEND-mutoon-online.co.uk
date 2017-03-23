/**
 * Created by lewisjames-odwin on 19/10/2016.
 */

import React, {PropTypes} from 'react';
import SliderPage from '../sliderPage/SliderPage';
import './SliderContainer.css';
import '../../../../node_modules/swiper/dist/css/swiper.css';
import * as constants from '../../Constants';
const logoSVG = require('./../../../images/mutoon-online-logo.svg');


class SliderContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const renderSliderContainer = () => {

            let sliderContainerRows = [];

            for (let i = 0; i <= Object.keys(this.props.selectedBookObject).length; i++) {

                try {

                    let selectedBookObject = this.props.selectedBookObject["part_" + Number.parseInt(i)];

                    sliderContainerRows.push(
                        <SliderPage key={i}
                                    part={selectedBookObject.part}
                                    arabic={selectedBookObject.arabic}
                                    english={selectedBookObject.english}
                                    audioUrl={selectedBookObject.audioUrl}
                                    size={Object.keys(this.props.selectedBookObject).length}
                        />);

                } catch (err) {
                    console.log(err);
                }
            }
            return sliderContainerRows;
        };

        return (
            <div className="inner-container">
                <div className="container container-slider">
                    {
                        constants.isObjectEmpty(this.props.selectedBookObject) ?
                        <div>
                            <img src={logoSVG} alt="Mutoon Online Logo" className="center-block logo"/>
                        </div>
                        :
                        <div>
                            <div id="book-content">
                                <div className="swiper-container" dir="rtl">
                                    <div className="swiper-wrapper">
                                        {renderSliderContainer()}
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

SliderContainer.propTypes = {
    selectedBookObject: React.PropTypes.Object,
    part: React.PropTypes.string,
    arabic: React.PropTypes.string,
    english: React.PropTypes.string,
    audioUrl: React.PropTypes.string
};

export default SliderContainer;