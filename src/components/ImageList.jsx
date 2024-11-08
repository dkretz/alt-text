// ImageList - displays a list of images

import { useState, useEffect } from "react";
import Select from "react-select";

import ImageModal from "./ImageModal";

function ImageItem(props) {
  const imgsrc = new URL(new URL(props.image.src).pathname.substring(1), props.url.href).href;
  const imgalt = (props.image.alt === "" ? "none" : props.image.alt) ;

  function handleImageClick(e) {
    props.setImage(e.target);
  }

  return (
    <>
        <img id={props.image.id} src={imgsrc} className="previmg" alt={imgalt} onClick={handleImageClick} />
        <div id={'div'+props.image.id} className="alt-block" >
        {imgalt}
        </div>
    </>
  );
}

export default function ImageList(props) {

  // convert html object collection to an array so we can map.
  const images = [...props.images];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let nsum = 0;
  let nblank = 0;


  if (props.images.length === 0) {
    console.log("No images");
    return "";
  }

  const image_list = images.map((image) => {
    nsum += 1;
    if (image.alt === "") {
      nblank += 1;
    }
    return <ImageItem key={image.id} url={props.url} image={image} setImage={props.setImage} />;
  });

  // if user selects an image, send it back to TabSwitch
  const handleSelect = (e) => {
    
    console.log(handleSelect, e.target);
    if(e.target.tagName.toLowerCase() === 'img') {
      props.setImage(e.target);
    }
    else if(e.target.className.toLowerCase() === 'alt-block') {
      setModalIsOpen(true);
    }
  };

  const handleListClick = ( e => {
    console.log(e.target);
  })


  return (
    <div id="divimglist" className="half">
      <ImageModal url={props.url} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} image={props.image}
        onDoubleClick={handleSelect} />
    <ol>
          {image_list}
    </ol>
    </div>
  )
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  