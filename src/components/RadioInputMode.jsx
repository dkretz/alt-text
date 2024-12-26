import React, { useState } from "react";

/*
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "green",
        textAlign: "center",
    },
    radioButton: {
        padding: "12px 16px",
        borderRadius: "8px",
        margin: "8px",
        border: "2px solid #007BFF",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "280px",
        cursor: "pointer",
        transition:
            "background-color 0.3s, color 0.3s",
    },
    selected: {
        background: "#007BFF",
        color: "#fff",
        borderColor: "#007BFF",
    },
    list: {
        listStyleType: "none",
        padding: 0,
        textAlign: "center",
    },
};
*/

export default function RadioInputMode(props) {
  const _SOURCES = [
    { code: "url", name: "URL" },
    { code: "ebook", name: "PG Book #" },
    { code: "file", name: "Local File" },
    { code: "manual", name: "Paste HTML" },
    { code: "pooh", name: "Winnie-the-Pooh" },
  ];

  // when a src is selected, pass it up to the parent
  function handleButton(e) {
    props.setInputMode(e.target.id);
    console.log(e.target.id);
  }

  const input_sources = _SOURCES.map((src) => {
    return (
      <li
        display="inline"
        key={src.code}
      >
        <button
          id={src.code}
          className="btnsource"
          onClick={handleButton}
        >
          {src.name}
        </button>
      </li>
    );
  });

  return (
    <div id="div-input">
      <h3 id="input-header">Input From: </h3>
      <ul className="srcButtons">{input_sources}</ul>
    </div>
  );
}
