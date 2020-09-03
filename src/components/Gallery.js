import React, { useEffect, useState, setState } from "react";
//import NoImages from "./NoImages";
//import Image from "./Image";
import Deck from "./Deck";
import PopUp from "./PopUp";
import previewPath from "../no-preview-available.png";
import DeckModal from "./DeckModal";

const Gallery = (sent) => {
  const {seen,handleSeen,id,handleId,show,handleClose,handleShow} = sent;

  const togglePop = (i) => {
    console.log("hehe");
    console.log("i=", i, "id=", id,"seen",seen);
    console.log("isTrue? = ", id === null);
      handleSeen();
      handleId(i);
      handleShow();
    // if (id === -1) {
    //   console.log("if i =", i);
    //   return(
    //   setSeen(!seen),
    //   setId(i),
    //   handleShow()
    //   );
    // } else if (i === id) {
    //   console.log("else if");
    //   return(
    //   setSeen(!seen),
    //   setId(-1),
    //   handleClose()
    //   );
    // }
    console.log("after i=", i, "id=", id,"seen",seen);
    // return;
  };
  /*
  renderSquare(i) {
    return (<Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}/>);
  }
  */
  //console.log('yeah9')
  //console.log(props.seen);
  const renderDeckPreview = (src, title, deck) => {
    console.log(src);
    return <Deck src={src} alt={title} onClick={() => togglePop(deck)} />;
  };

  const [decks, setDecks] = useState([]);
  const [noDecks, setnoDecks] = useState(0);

  useEffect(() => {

    let deckNum = 20;
    let data = [...Array(deckNum).keys()];
    console.log("data", data);
    //let previewPath = '../no-preview-available.png'; # gitlab
    setDecks(
      data.map((deck) => {
        let src = previewPath;
        let title = `preview_${deck}`;
        return renderDeckPreview(src, title, deck);
      })
    );
    setnoDecks(data.length);
  }, []);

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
    <div className="photo-container">
      <ul>{decks}</ul>
      {console.log("before popUp", seen)}
      {console.log("show = ", show,"seen = ",seen,"id=",id)}
      {seen ? <PopUp toggle={() => togglePop()} id={id} /> : null}
      {noDecks}
      <DeckModal id={id} handleClose={() => handleClose()} show={show} />
    </div>
  );
};

export default Gallery;
