import React from "react";

// import ebook_text from "./ebook.jsx";

export default function PromptForHtmlFile(props) {

  function handleHtmlFile(e) {
    const hfiles = e.target.files;
    if (hfiles.length === 0) {
      throw new Error("No files");
    }

    const hfile = hfiles[0];


    const reader = new FileReader();
    reader.onload = ( e  => {
      const ebook_text = reader.result;
      props.setHtml(ebook_text);
    });
    reader.readAsText(hfile);
    $("ebook").value = "";
  }

  return (
    <>
      <h3 htmlFor="ebook">Local HTML File</h3>
      <div id="divurl">
        <input
          type="file"
          name="ebook"
          id="ebook"
          onChange={handleHtmlFile}
        />
      </div>
    </>
  );
}
