import React from "react";

// import ebook_text from "./ebook.jsx";

export default function PromptForHtmlText(props) {

  function handleHtmlText(e) {
    console.log("handle text");
    props.setHtml(htmlText);
  }

return (
    <>
    <input type="button" onClick={handleHtmlText} />
    <label>
      Paste HTML text:
      <textarea name="htmlText" rows={20} cols={100} />
    </label>
    </>
  );
};