// ImageList - displays a list of images

import { useState, useEffect } from "react";
import Select from "react-select";

import MetaBox from "./MetaBox";

function ImageItem({image, url}) {
  const imgurl = url + image.src.match(/.*\/(images.*)/uis)[1];
  return (
    <li key={image.id}>
        <img id={image.id} src={imgurl} className="previmg" alt={image.alt} />
        <textarea 
          className="altarea" 
          id={'txt'+image.id} 
          name={'txt'+image.id} 
          defaultValue={image.alt} />
    </li>
  );
}

export default function ImageList(props) {

  // convert html object collection to an array so we can map.
  const images = [...props.images];

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
    return <ImageItem key={image.id} image={image} url={props.url}/>;
  });

  // if user selects an image, send it back to TabSwitch
  const handleSelect = (e) => {
    // const i = e.target.querySelector("img");
    // set the image state in TabSwitch
    if(e.target.tagName.toLowerCase() === 'img') {
      props.setImage(e.target);
    }
  };

  // construct li elems for ol tag
  // const image_list = images.map();

  return (
    <div id="divimglist" className="half">
      <MetaBox nsum={nsum} nblank={nblank} />
      <ul 
        id="selimage" 
        onClick={handleSelect}>
          {image_list}
    </ul>
    </div>
  );
}
