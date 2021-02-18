import React from 'react'
import './Top.css'
import { List, ClockHistory } from 'react-bootstrap-icons';

const Top = (props) => {
    return (
        <div className="topContainer">
            <h2>Calculator</h2>
            <div className="subTopContainer">
                <div className="sideBar" onClick={() => props.toggleSideBarState()}>
                    <List />
                </div>
                <div className="history">
                    <ClockHistory />
                </div>
            </div>
        </div>
    )
}

export default Top
