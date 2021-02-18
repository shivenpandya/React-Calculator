import React, {useState} from 'react';
import './Display.css';

const Display = ( props ) => {

    return (
        <div className="displayContainer">
            <div className="value">
                {props.val}
            </div>
        </div>
    )
}

export default Display
