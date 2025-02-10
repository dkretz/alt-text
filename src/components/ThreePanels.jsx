// ThreePanels -
// opens with no html yet, nor anything derived therefrom.

import { useState, useEffect, useRef } from "react";

import EditorCard from "./EditorCard";
import PreviewCard from "./PreviewCard";
import ImageList from "./ImageList";

export default function ThreePanels(props) {
  // const [dom, setDom] = useState();
  // const [url, setUrl] = useState();
  // const [images, setImages] = useState();


  /*
  switch(props.inputMode) {
      case "file":
        return <PromptForHtmlFile setHtml={setHtml} />;
        break;
      case "ebook":
        return <PromptForBookId setHtml={setHtml} />;
        alert("Deferred pending Gutenberg API to fetch from a repository");
        break;
      case "url":
        return <PromptForUrl setHtml={setHtml} />;
        break;
      case "html":
        alert("TBD");
        break;
      case "pooh":
        fetchPooh();
        return null;
        break;
      default:
        console.log("node:", inputMode);
        alert("Unknown Input Mode");
        throw new Error("Unknown input mode");
        break;
  }

  if (!dom) {
    const parser = new DOMParser();
    const idom = parser.parseFromString(props.html, "text/html");
    setDom(idom);
    return null;
  }

  if (!url) {
    const ipath = dom.querySelectorAll("meta[name='dcterms.source']")[0]
      .content;
    setUrl(new URL(ipath));
    return null;
  }

  if (!images) {
    setImages(Array.from(dom.getElementsByTagName("img")));
    return null;
  }
    */

  console.log("got to three panels");

  return (
    <>
      <div
        id="teimain"
        className="card"
      >
        <EditorCard
          html={props.html}
          setHtml={props.setHtml}
        />
          <PreviewCard
            baseUrl={props.baseUrl}
            html={props.html}
            // dom={props.dom}
            image={props.image}
            setImage={props.setImage}
          />
          <ImageList
            baseUrl={props.baseUrl}
            images={props.images}
            image={props.image}
            setImage={props.setImage}
          />
      </div>
    </>
  );
}
