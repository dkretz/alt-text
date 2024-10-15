import { useState, useEffect } from "react";

import MetaBox from "./MetaBox";

export default function ImageList(props) {


  if(! props.text) {
    return "";
  }

  const parser = new DOMParser();
  const txtdom = parser.parseFromString(props.text, "text/html");
  const imgs = txtdom.getElementsByTagName("img");
  const nsum = 100;
  const nblank = 25;
  if(imgs.length === 0) {
    console.log("No images");
    return "";
  }

  // get an array so we can map.
  const images = [...imgs];

  const handleSelect = (e) => {
    const i = e.target.querySelector("img");
    props.setImg(i);
  }
  const image_list = images.map(
    (img) => <li key={img.id}>alt-text here
      <img src={img.src} 
           name={img.id} 
           className={"previmg"}
           alt={img.alt}/></li>
    );


    return (
      <div id="divimglist" className="half" >
        <MetaBox nsum={nsum} nblank={nblank} />
        <ol id="selimage" onClick={handleSelect}>
          {image_list}
        </ol>
      </div>
    );
}
