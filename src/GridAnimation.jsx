import React, { useRef, useEffect } from 'react';
import './GridAnimation.css';

function GridAnimation() {
    return(
    <div className='container'>
        <div className="grid-container">
            <div className="plane">
                <div className="grid"></div>
                <div className="glow"></div>
            </div>
            <div className="plane">
                <div className="grid"></div>
                <div className="glow"></div>
            </div>
        </div>
    </div>
    )
}

export default GridAnimation;