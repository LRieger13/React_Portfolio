import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Dev and Admin</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Web Administration"]}
                    typeSpeed={40}
                    backSpeed={60}
                />
            </div>
        </div>

    )
}

export default Header
