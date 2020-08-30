import React, {useEffect,useState}  from "react";
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
  console.log('yeah9')
  console.log(props.seen);
  const renderDeckPreview = (src,title,deck) => {
    console.log(src);
    return (
      <Deck src={src} alt={title} onClick={props.togglePop(deck)}/>
    );
  };

  const [decks,setDecks] = useState([]);
  const [noDecks, setnoDecks] = useState(0);

  useEffect(() => {
    let deckNum = 20;
    let data = [...Array(deckNum).keys()];
    console.log(data);
    //let previewPath = '../no-preview-available.png'; # gitlab
    setDecks(data.map(
      deck => {
        let src = previewPath;
        let title = `preview_${deck}`;
        return renderDeckPreview(src,title,deck);
      }
    ));
    setnoDecks(data.length);
  },[])


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
      {console.log('yeah2')}
      {console.log(props.seen)}
      {props.seen ? <PopUp toggle={props.togglePop} id={props.id}/> : null}
      {console.log('yeah3')}
      {console.log(props.seen)}
      {noDecks}
      {console.log('yeah7')}
      {console.log(props.seen)}
    </div>
  );
};

export default Gallery;