
// TabSwitch - displays whatever panels are currently available.
// Stores state of the base url (for to find imgs), text (i.e. html),
// dom, and the current image tag from the set of images

import { useState, useEffect, useRef } from "react";

import EditorCard from "./EditorCard";
import PreviewCard from "./PreviewCard";
import ImageList from "./ImageList";
import PromptForHtml from "./PromptForHtml";

export default function TabSwitch(props) {

  const [url, setUrl] = useState();
  const [text, setText] = useState();
  const [dom, setDom] = useState();
  const [image, setImage] = useState();
  const [images, setImages] = useState();

  const iFrameRef = useRef();

  console.log("TabSwitch");

  // if no html file chosen, choose one
  if (! text) {
    return (
    <>
    <PromptForHtml setText={setText} setUrl={setUrl}/>
      {/* <div id="teimain"> */}
        {/* <EditorCard text={text} setText={setText} /> */}
      {/* </div> */}
    </>
    );
  }

  // parse out the dom
  if(! dom) {
    const parser = new DOMParser();
    const idom = parser.parseFromString(text, "text/html");
    setDom(idom);
    const iimages = idom.getElementsByTagName("img");
    setImages(iimages);
  }

  // if no base url, find it as the meta tag for dcterms.source 
  if(! url) {
    const urlbase = text.match(/"dcterms\.source"\s+content="(.*?)"/ius)[1];
    const basepath = urlbase.match(/.*\//uis)[0];
    // const base = `<base ${basepath} />`;
    setUrl(basepath);
  }

  // const re_og_url = /meta property=['"]og:url["'] content=['"](.*?)['"]>/uis;
  // const og_url = text.match(re_og_url)[1];
  // console.log(og_url);

  // const re_ebooknum = /\[eBook #(\d+)/uis;
  // const ebooknum = text.match(re_ebooknum)[1];
  // console.log(ebooknum);

  // const re_etext = /<body.*?>(.*?)<\/body>/uis;
  // const etext = ebooktext.match(re_etext)[1];

  return (
    <>
      <p>{url}</p>
      <div id="teimain">
        <EditorCard text={text} setText={setText} />
        <PreviewCard url={url} dom={dom} image={image} setImage={setImage} iFrameRef = {iFrameRef} />
        <ImageList url={url} images={images} image={image} setImage={setImage}/>
      </div>
    </>
  );
}
