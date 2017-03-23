/**
 * Created by lewisjames-odwin on 15/11/2016.
 */

import React, {PropTypes} from 'react';
import * as constants from '../../Constants';
import './AudioButtons.css';


class AudioButtons extends React.Component {

    constructor(props) {
        super(props);
        //initial state goes here
    }


    render() {

        return (

            <div>
                {constants.isObjectEmpty(this.props.selectedBookObject) || this.props.selectedPage == 0 ?
                    <div></div>
                    :
                    <div className="playBtn btn-group btn-group-justified">
                        <a className="btn btn-default btn-lg" onClick={this.props.onClickPlayBtn}>
                            <i className="material-icons"><span id="play-icon">play_arrow</span></i>
                        </a>
                        <a className="btn btn-default btn-lg" onClick={this.props.onClickChangePlaybackSpeed}><span
                            id="speed">Normal</span> SPEED
                        </a>

                    </div>
                }
            </div>
        );
    }
}

AudioButtons.propTypes = {
    selectedBookObject: React.PropTypes.Object,
    playBtnImg: React.PropTypes.string,
    selectedPage: React.PropTypes.integer,
    onClickPlayBtn: React.PropTypes.Object,
    onClickChangePlaybackSpeed: React.PropTypes.Object
};


export default AudioButtons;