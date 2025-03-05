import React from "react";
import TwisterTitle from "./TwisterTitle";

// import ebook_text from "
// Test with this:
// https://ebookfoundation.org/cache/epub/67098/67098-h.html

export default function PromptForUrl(props) {
  const TEST_URL = "https://ebookfoundation.org/cache/epub/67098/67098-h.html";

  const handleSubmit = (e) => {
    const urlval = $("pgurl").value;
    fetch($(urlval), {
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
        // 'Access-Control-Allow-Origin: '*',
      },
    })
      .then((res) => {
        return res.text();
      })
      .then((val) => {
        props.setHtml(val);
      });
  };

  return (
    <>
      <TwisterTitle />
      <div className="container">
        <label htmlFor="pgurl">Enter URL </label>
        <input
          type="text"
          size="80"
          name="pgurl"
          id="pgurl"
        />
        <button
          id="btn-submit"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}
