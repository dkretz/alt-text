// TabSwitch - displays whatever panels are currently available.
// Stores state of the base url (for to find imgs), text (i.e. html),
// dom, and the current image tag from the set of images

import { useState, useEffect, useRef } from "react";

import EditorCard from "./EditorCard";
import PreviewCard from "./PreviewCard";
import ImageList from "./ImageList";

// Props are: html = HTML content (as from a file or a text fetch) - html5, utf8.
//            LLM results in for form of 1 or more arrays of alt-text strings, json arrays of arrays of strings

export default function ExamineHtml(props) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(props.html, "text/html");

  // if no base url, find it as the meta tag for dcterms.source
  const urlBase = props.html.match(/"dcterms\.source"\s+content="(.*?)"/isu)[1];

  const iurl = new URL(urlBase);
  props.setUrl(iurl);

  return (
    <>
      <div id="teimain">
        <EditorCard
          html={props.html}
        />
        <PreviewCard
          urlBase={urlBase}
          html={props.html}
          image={props.image}
          setImage={props.setImage}
        />
        <ImageList
          urlBase={urlBase}
          images={props.images}
          image={props.image}
          setImage={props.setImage}
        />
      </div>
    </>
  );
}
