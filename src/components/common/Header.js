/**
 * Created by lewisjames-odwin on 16/10/2016.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <header className="container hidden">
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {
                    " | "
                }
                <Link to="/about" activeClassName="active">About</Link>
                {
                    " | "
                }
                <Link to="/courses" activeClassName="active">Courses</Link>
            </nav>
        </header>
    );
};

export default Header;