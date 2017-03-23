import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

//Language Import
import LocalizedStrings from 'react-localization';
import LanguageStrings from '../common/Language/Language.js';
var ls = LanguageStrings.data;
ls = new LocalizedStrings(ls);
//End Language Import
//

const Header = () => {
    return (
        <header className="container col-md-10 col-md-offset-5" style={{zIndex: 500}} >
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {
                    " | "
                }
                <Link to="/about" activeClassName="active">About</Link>
                {
                    " | "
                }
                <Link to="/settings" activeClassName="active">Settings</Link>
                {
                    " | "
                }
                <Link to="/statistics" activeClassName="active">Hifdh log</Link>
            </nav>
        </header>
    );
};





export default Header;