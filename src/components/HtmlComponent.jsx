/*
HtmlComponent -

// props: eBook, url, filePath, html,
//        setBaseHrml, setUrl, filePath, html,

If url provided, fetch it and get html and baseUrl
If eBook provided, query the API and get html and baseUrl
If filePath provided, get html and baseUrl from html
If html provided, get baseUrl from html

*/

import { useEffect, useState } from "react";

import ThreePanels from "./ThreePanels";

export default function HtmlComponent(props) {
  // const [dom, setDom] = useState();
  // const [images, setImages] = useState();
  const [image, setImage] = useState();
  // const [baseUrl, setBaseUrl] = useState();

  const dirname = (path) => {
    return path.substring(0, path.lastIndexOf("/") + 1);
  };

  const parser = new DOMParser();
  const idom = parser.parseFromString(props.html, "text/html");

  const ipath = idom.querySelectorAll("meta[name='dcterms.source']")[0].content;
  const ibase = new URL(dirname(ipath));

  console.log("base url will be ", ibase.pathname);
  const baseUrl = new URL(ibase);
  // setDom( idom );

  const images = Array.from(idom.getElementsByTagName("img"));
  console.log("images count: ", images.length);

  useEffect(() => {console.log("image changed", image)}, [image]);

  return (
    <>
      <ThreePanels
        html={props.html}
        setHtml={props.setHtml}
        baseUrl={baseUrl}
        images={images}
        image={image}
        setImage={setImage}
      />
    </>
  );
}
