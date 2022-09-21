import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <h2>Ludo</h2>
            <div className='logos'>
                <a target='_blank' rel="noreferrer" href="https://github.com/Ludo-H"><i className="fa-brands fa-github"></i></a>
                <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ludovic-hund-1b2194248/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </header>
    );
};

export default Header;