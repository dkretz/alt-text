import React, { useEffect, useState } from "react";
import TwisterTitle from "./TwisterTitle";

export default function RadioInputMode(props) {
  const _SOURCES = [
    { code: "url", name: "URL" },
    { code: "ebook", name: "PG Book #" },
    { code: "file", name: "Local File" },
    { code: "html", name: "Paste HTML" },
    { code: "pooh", name: "Winnie-the-Pooh" },
  ];
  const [inputMode, setInputMode] = useState();

  useEffect(() => {
    if (inputMode) {
      props.setInputMode(inputMode);
    }
  }, [inputMode]);

  // const handleKey = (k) => {
  // console.log("key ", k);
  // };
  // when a src is selected, pass it up to the parent
  const handleButton = (e) => {
    setInputMode(e.target.id);
  };

  const input_sources = _SOURCES.map((src) => {
    return (
      <button
        id={src.code}
        className="btnsource"
        onClick={handleButton}
        key={src.code}
      >
        {src.name}
      </button>
    );
  });


  return (
    <>
      <div
        id="div-input"
        className="divinput"
      >
        <h3 id="input-header">Input From: </h3>
        <div
          id="div-radio"
          className="divradio"
        >
          <ul className="srcButtons">{input_sources}</ul>
        </div>
      </div>
    </>
  );
}
