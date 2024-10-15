import React from "react";

// import ebook_text from "./ebook.jsx";

export default function PromptForHtml(props) {
  function handleHtmlFile(e) {
    console.log("handle");
    const hfile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const ebook_text = reader.result;
      props.setText(ebook_text);
    };
    reader.readAsText(hfile);
    $("ebook").value = "";
  }

  return (
    <>
      <input type="file" name="ebook" id="ebook" onChange={handleHtmlFile} />
    </>
  );
}
