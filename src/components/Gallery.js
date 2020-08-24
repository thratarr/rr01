import React from "react";
//import NoImages from "./NoImages";
//import Image from "./Image";
import Deck from "./Deck";
import PopUp from "./PopUp";
import previewPath from '../no-preview-available.png'



const Gallery = props => {
  

  /*
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}/>);
  }
  */
 const renderDeckPreview = (src,title) => {
  console.log(src);
  return (
    <Deck src={src} alt={title} onClick={props.togglePop(props.id)}/>
  );
};


  let deckNum = 20;
  let data = [...Array(deckNum).keys()];
  console.log(data);
  //let previewPath = '../no-preview-available.png'; # gitlab
  let decks = data.map(
    deck => {
      let src = previewPath;
      let title = `preview_${deck}`;
      return renderDeckPreview(src,title);
    }
  );
      
  let noDecks;
/*
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  */
  return (
    <div className='photo-container'>
      <ul>{decks}</ul>
      {props.seen ? <PopUp toggle={props.togglePop} id={props.id}/> : null}
      {noDecks}
    </div>
  );
};

export default Gallery;