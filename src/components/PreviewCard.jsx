//
// todo
// trap image selection from frame and call {props.setImage}
//   and ...
// changing props.image should look it up and scrollIntoView

import React, { useRef, useEffect, useState } from "react";
import Frame, { FrameContextConsumer, useFrame } from "react-frame-component";
// props: html
export default function PreviewCard(props) {
  const liref = useRef();

  const handleDivSelect = (e) => {
    // console.log("Div Select", e);
  };
  const handleIframeLoad = (e) => {
    // console.log("Iframe Load", e);
  };
  const handleFrameClick = (e) => {
    // console.log("Iframe click", e);
  };

  const ibase = props.baseUrl.substring(
    0,
    props.baseUrl.lastIndexOf("/")
  ) ?? "";
  const ihtml = props.html.replace(
    /<\/head>/isu,
    `"<base href=${ibase}/></head>"`
  );
  // console.log("base href: ", ibase);

  function handleImageClick(e) {
    // console.log("clicked ", e.target.id);
    props.setImage(e.target);
    e.preventDefault();
  }

  useEffect(() => {
    if (props.image) {
      $(props.image.id).scrollIntoView(
        { behavior: "smooth",
          block: "center" });
      // liref.current.document.getElementById(props.image.id).scrollIntoView();
    }
  }, [props.image]);

  return (
    <div
      id="divpreview"
      className="card"
      onClick={handleDivSelect}
      onLoad={handleIframeLoad}
    >
      <Frame
        ref={liref}
        id="pvwframe"
        name="pvwframe"
        initialContent={ihtml}
        src={props.url}
        onClick={handleFrameClick}
        onLoad={handleIframeLoad}
      >
        <FrameContextConsumer>
          {({ document, window }) => {
            const iimgs = document.getElementsByTagName("img");
            for (let iimg of iimgs) {
              iimg.addEventListener("click", handleImageClick);
            }
            if (props.image) {
              document.getElementById(props.image.id).scrollIntoView(
                { behavior: "smooth", block: "center" }   
              );
            }
          }}
        </FrameContextConsumer>
      </Frame>
    </div>
  );
}
