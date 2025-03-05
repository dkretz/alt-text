// eb-edit/src/App.jsx
/*
this should only repaint if input mode changes 
or input html, ebook#, url, or html changes,

There are two ways to get the url base:   
  provided by the user, (mode url or pooh)
  or embedded in the html file (mode file, html, ebook# )


Input modes: html, url, ebook# pooh, or file
)
 */

import React, { useState, useRef } from "react";
import "./App.css";

import HtmlComponent from "./components/HtmlComponent";
import TwisterTitle from "./components/TwisterTitle";
import ThreePanels from "./components/ThreePanels";
import PromptForHtmlFile from "./components/PromptForHtmlFile";
import RadioInputMode from "./components/RadioInputMode";
import PromptForBookId from "./components/PromptForBookId";
import PromptForUrl from "./components/PromptForUrl";

// a component to fetch the pooh htmlfrom virtual
// file in the public directory
function Pooh(props) {
  // const pooh_url = new URL("pooh/pg67098-images.html?url", import.meta.url);
  const pooh_url = "pooh/pg67098-images.html?url";
  // props.setUrl(pooh_url.href);
  fetch(pooh_url)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      props.setHtml(text);
      console.log("pooh url ", pooh_url);
    });
  return null;
}

// export const ApiUrl = createContext("https://www.gutenberg.org/api");
// export const BaseUrl = createContext(null);
// const ImageContext = createContext();

// a component to set the input mode
function SourceMode(props) {
  return <RadioInputMode 
    setInputMode={props.setInputMode} />;
}

function App() {
  const version = "0.2.01";

  const [inputMode, setInputMode] = useState();

  // const [url, setUrl] = useState();
  const [eBook, setEBook] = useState();
  const [html, setHtml] = useState();
  const [filePath, setFilePath] = useState();
  // const [dom, setDom] = useState();
  const [images, setImages] = useState();
  // //////////////////////
  // const [image, setImage] = useState();
  // //////////////////////

  if (!inputMode) {
    return (
      <>
        <TwisterTitle version={version} />
        <SourceMode
          setInputMode={setInputMode}
        />
      </>
    );
  }

  // console.log("App", inputMode, html );

  // Will return input mode - html, file, pooh, url, or html.

  if (!html) {
    switch (inputMode) {
      case "file":
        return (
          <PromptForHtmlFile
            setHtml={setHtml}
            setFilePath={setFilePath}
          />
        );
        break;
      case "ebook":
        return <PromptForBookId setHtml={setEBook} />;
        break;
      case "url":
        return (
          <PromptForUrl
            setHtml={setHtml}
            // setUrl={setUrl}
          />
        );
        break;
      case "html":
        return <PromptForHtmlText setHtml={setHtml} />;
        break;
      case "pooh":
          // setUrl("pooh");
        return (
          <Pooh
            setHtml={setHtml}
          />
        );
        break;
      default:
        console.log("mode:", inputMode);
        alert("Unknown Input Mode");
        throw new Error("Unknown input mode");
        break;
    }
  }


  return (
    <HtmlComponent
      inputMode={inputMode}
      html={html}
      setHtml={setHtml}
      filePath={filePath}
      // dom={dom}
      // setDom={setDom}
      // images={images}
      // setImages={setImages}
    />
  );

  /*
  return (
    <div id="App">
      <ThreePanels
        html={html}
        setHtml={setHtml}
        url={url}
        dom={dom}
        images={images}
        image={image}
        setImage={setImage}
      />
    </div>
  );
  */
}

export default App;
