/**
 * Created by lewisjames-odwin on 16/10/2016.
 */

import React, {PropTypes} from 'react';


import Header from '../components/common/Header';
import Footer from '../components/common/Footer';




class App extends React.Component {

    render() {

        return (

            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;