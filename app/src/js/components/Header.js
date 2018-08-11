import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                    <div className="header__top">
                    </div>
                    <div className="header__bottom">
                        <div className="container">
                            <h1>New event</h1>
                        </div>
                    </div>
            </header>
        );
    }
}