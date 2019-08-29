import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

// STYLING
import './Header.css'; 

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <header>
                    <Toolbar>
                        <img
                            className="logo"
                            src="images/pokemon-logo.png"
                            alt="pokemon"
                        />
                        <h1 className="hidden">Pokemon</h1>

                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Mechanics</li>
                                <li>Species</li>
                                <li>Trainer Registration</li>
                            </ul>
                        </nav>
                    </Toolbar>
                </header>
            </AppBar>
        );
    }
}

export default Header;
