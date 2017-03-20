import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <div className="logo">
                        <h1><Link to="/">react.webnalist.com</Link></h1>
                    </div>
                </nav>
            </div>
        );
    }
}
