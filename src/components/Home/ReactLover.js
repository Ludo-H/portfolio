import React from 'react';
import Logo from '../../logo.svg';

const ReactLover = () => {
    return (
        <div className='reactLover'>
            <p>Je suis Ludo, un développeur front-end qui aime beaucoup <strong>React </strong>!</p>
            <img src={Logo} alt="React logo" />
        </div>
    );
};

export default ReactLover;