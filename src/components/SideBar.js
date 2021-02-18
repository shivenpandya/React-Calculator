import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
    let style = {
        width: 0,
        opacity: 0
    };
    if(props.sideBarState == 1){
         style = {
            width: '200px',
        };
    }

    return (
        <div className="sideBarContainer" style={style}>
            <div className="sideBar-calculator">
                <h3>Calculator</h3>
                <p>Standard</p>
                <p>Scientific</p>
                <p>Programmer</p>
                <p>Date Calculation</p>
            </div>
        </div>
    )
}

export default SideBar