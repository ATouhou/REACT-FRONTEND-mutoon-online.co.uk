/**
 * Created by lewisjames-odwin on 15/11/2016.
 */

import React, {PropTypes} from 'react';
import * as constants from '../../Constants';

class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        //initial state goes here
    }


    render() {

        return (
            <div>

                {constants.isObjectEmpty(this.props.selectedBookObject) || this.props.selectedBookObject["part_" + this.props.selectedPage] == undefined ?
                        <div></div>
                        :
                        this.props.selectedPage == 0 ? <div></div> :
                            <div className="row">
                                <div className="col-xs-12 text-center">
                                    <audio preload="auto"
                                           src={this.props.selectedBookObject["part_" + this.props.selectedPage].audioUrl}>
                                        Your browser does not support the audio.
                                    </audio>
                                </div>

                            </div>
                }
            </div>
        );
    }
}

AudioPlayer.propTypes = {
    selectedBookObject: React.PropTypes.Object,
    selectedPage: React.PropTypes.integer
};


export default AudioPlayer;