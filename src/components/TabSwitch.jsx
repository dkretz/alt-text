import { useState, useEffect, useRef } from "react";

import EditorCard from "./EditorCard";
import PreviewCard from "./PreviewCard";
import ImageList from "./ImageList";
import PromptForHtml from "./PromptForHtml";

export default function TabSwitch(props) {

  const [url, setUrl] = useState();
  const [text, setText] = useState();
  const [dom, setDom] = useState();
  const [img, setImg] = useState();

  const iFrameRef = useRef();

  console.log("TabSwitch");

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

  /*
  useEffect( ( img => {
    const ifdoc = iFrameRef.document;
    ifdoc.getElementById(img.id).scrollIntoView();
  }, [img]));
  */

  
  if(! dom) {
    const parser = new DOMParser();
    const idom = parser.parseFromString(text, "text/html");
    setDom(idom);
  }

  if(! url) {
    const iurlsrc = text.match(/"dcterms\.source"\s+content="(.*?)"/ius)[1];
    setUrl(iurlsrc);
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
      <div id="teimain">
        <EditorCard text={text} setText={setText} />
        <PreviewCard url={url} dom={dom} img={img} iFrameRef={iFrameRef} />
        <ImageList url={url} text={text} img={img} setImg={setImg}/>
      </div>
    </>
  );
}
