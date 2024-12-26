// TabSwitch - displays whatever panels are currently available.
// Stores state of the base url (for to find imgs), text (i.e. html),
// dom, and the current image tag from the set of images

import { useState, useEffect, useRef } from "react";

import EditorCard from "./EditorCard";
import PreviewCard from "./PreviewCard";
import ImageList from "./ImageList";
import PromptForHtml from "./PromptForHtmlFile";

// the only prop is html

export default function TabSwitch(props) {
  const [dom, setDom] = useState();
  const [url, setUrl] = useState();
  const [image, setImage] = useState();
  const [images, setImages] = useState();

  const iFrameRef = useRef();

  // parse out the dom and the array of images
  if (!dom) {
    const parser = new DOMParser();
    const idom = parser.parseFromString(props.html, "text/html");
    setDom(idom);
    setImages(idom.querySelectorAll("img"));
    // setImages(idom.getElementsByTagName("img"));
  }

  // if no base url, find it as the meta tag for dcterms.source
  if (!url) {
    const iurl = props.html.match(/"dcterms\.source"\s+content="(.*?)"/isu)[1];
    const u = new URL(iurl);
    setUrl(u);
  }

  useEffect((img) => {
    console.log("in TabSwitch ", img);
  }, []);

  return (
    <>
      <div id="teimain">
        <EditorCard
          html={props.html}
          setHtml={props.setHtml}
        />
        <PreviewCard
          url={url}
          html={props.html}
          dom={dom}
          image={image}
          setImage={setImage}
        />
        <ImageList
          url={url}
          images={images}
          image={image}
          setImage={setImage}
        />
      </div>
    </>
  );
}
