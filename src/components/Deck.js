import React from "react";
//import previewPath from '../no-preview-available.png'
const Deck = props => {
    //let previewPath = '../no-preview-available.png';
    return (
        <li>
            {console.log('yeah5')}
            <button /*onClick={props.onClick}*/> <img src={props.src} alt={props.alt}  /> </button>
            {console.log('yeah6')}
        </li>
    );
};

export default Deck;