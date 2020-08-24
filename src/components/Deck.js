import React from "react";
//import previewPath from '../no-preview-available.png'
const Deck = props => {
    //let previewPath = '../no-preview-available.png';
    return (
        <li>
            <button> <img src={props.src} alt={props.alt} /*onClick={props.onClick}*/ /> </button>
        </li>
    );
};

export default Deck;