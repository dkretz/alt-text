// eb-edit/src/App.jsx


import React, {useState} from "react";

// import { pg_url_for_book } from "/src/helpers.js";
import "./App.css";
import TabSwitch from "./components/TabSwitch";
import PromptForHtmlFile from "./components/PromptForHtmlFile";
import RadioInputMode from "./components/RadioInputMode";
// import PromptForBookId from "./components/PromptForBookId";

function App() {

  const [inputMode, setInputMode] = useState();
  const [id, setId] = useState();
  const [html, setHtml] = useState();
  const [url, setUrl] = useState();

  
  if(! inputMode) {
    return (<RadioInputMode setInputMode={setInputMode} />);
  }
  // const [url, setUrl] = useState('https://www.gutenberg.org/files/67098/67098-h/67098-h.htm');
  // const url = pg_url_for_book(id);

  /*
  if(! id) {
    return (
    <>
    <PromptForBookId setId={setId} />
    </>
  )};

  function testfetch(url) {
      fetch(url)
      .then(rsp => {
        console.log("status: ", rsp.status);
        return rsp.text();
      })
      .then( data => {
        console.log("status: ", data);
      })
  }
  */

  /*
  function fetch_html_for_book (url) {
      // fetch(url)
      fetch(url)
      .then((response) => {
        console.log("response: ", response.statusText);
        return response.text();
      })
      .then((data) => {
        console.log("data: ", data);
        setHtml(data);
      })
      .catch(( e => {
        console.log("Error: ", e);
      }));
  }
  // console.log("fetch ", url);
  // const text = fetch_html_for_book(url);

  if(! url) {
    setUrl(faux_url);
    console.log("url: ", faux_url);
  }
  
  if(! html) {
    fetch_html_for_book(faux_url);
  }
  */


  if(html) {
  return (
    <>
    <div id="App">
      <h2 className="hdr2">Text Twister</ h2>
      <TabSwitch html={html} setHtml={setHtml} />
    </div>
    </>
  )};


  return <PromptForHtmlFile setHtml={setHtml} />;
}

export default App;
