import React from "react";
import './Scroll.css'

const Scroll = ({ children }) => {
    return (
        <div className="scroller" style={{ overflowY: 'scroll', border: '2px solid black', height: '500px' }}>
            {children}
        </div>
    );
}

export default Scroll;