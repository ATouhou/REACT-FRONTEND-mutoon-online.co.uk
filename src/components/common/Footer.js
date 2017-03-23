import React, {PropTypes} from 'react';

//Language Import
import LocalizedStrings from 'react-localization';
import LanguageStrings from '../common/Language/Language.js';
var ls = LanguageStrings.data;
ls = new LocalizedStrings(ls);
//End Language Import



const Footer = () => {
    return (
        <div className="container">
            <div className="inner-container">
                <br />
                <footer className="text-center">
                    <p>{ls.FooterHelper}</p>
                    <a href="https://www.messenger.com/t/adamtouhou" target="_blank">Feedback&nbsp;&nbsp;<i
                        className="material-icons">feedback</i></a>
                    <br/>
                </footer>
            </div>
        </div>
    );
};

export default Footer;