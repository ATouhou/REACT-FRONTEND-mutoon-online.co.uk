/**
 * Created by lewisjames-odwin on 29/10/2016.
 */

import React, {PropTypes} from 'react';
const spinnerSVG = require('./../../../images/spinner.svg');
import './LoadingSpinner.css';

const LoadingSpinner = () => {

        return (
            <div className="loading-spinner text-center">
                <div className="inner-wrapper">
                    <img src={spinnerSVG} width={70}/>
                    <h4>Loading...</h4>
                </div>
            </div>
        );
};

export default LoadingSpinner;