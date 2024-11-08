//
// todo
// trap image selection from frame and call {props.setImage}
//   and ...
// changing props.image should look it up and scrollIntoView

import React, {useRef, useEffect, useState} from "react";
import Frame, {FrameContextConsumer, useFrame} from "react-frame-component";
// props: html 
export default function PreviewCard(props) {

  const liref = useRef();

  const handleDivSelect = (e) => {
    console.log("Div Select", e);
  };
  const handleIframeLoad = (e) => {
    console.log("Iframe Load", e);
  };
  const handleFrameClick = (e) => {
    console.log("Iframe click", e);
  };

  const ibase = props.url.href.substring(0, props.url.href.lastIndexOf('/'));
  const ihtml = props.html.replace(/<\/head>/uis,`"<base href=${ibase}/></head>"`);

  function handleImageClick(e) {
    console.log("clicked ", e.target.id);
    props.setImage(e.target);
  }

  useEffect(() => {
    if(props.image) {
      $(props.image.id).scrollIntoView();
      // liref.current.document.getElementById(props.image.id).scrollIntoView();
    }
  }, [props.image])

  return (
    <div 
      className="half" 
      id="divpreview" 
      onClick={handleDivSelect}
      onLoad={handleIframeLoad}>
    <Frame 
      ref={liref} 
      id="pvwframe" 
      initialContent={ihtml}
      src={props.url} 
      onClick={handleFrameClick}
      onLoad={handleIframeLoad}>
        <FrameContextConsumer>
        {
        ({document, window}) => {
          console.log("document - props.image is ", props.image);
          const iimgs = document.getElementsByTagName("img");
          for(let iimg of iimgs) {
            iimg.addEventListener("click", handleImageClick);
          }
          if(props.image) {
            document.getElementById(props.image.id).scrollIntoView();
          }
        }
        }
        </FrameContextConsumer>
    </Frame>
    </div>
  );
}
