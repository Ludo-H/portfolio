import React from 'react';
import sticker from '../../sticker.png';

const Photo = () => {
    return (
        <div className='photo'>
            <img src={sticker} alt="Ludo hero" />
        </div>
    );
};

export default Photo;