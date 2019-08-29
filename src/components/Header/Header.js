import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <img src="images/pokemon-logo.png" alt="pokemon" />
                <h1>Pokemon</h1>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Mechanics</li>
                        <li>Species</li>
                        <li>Trainer Registration</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
