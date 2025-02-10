import React, { useEffect } from "react";
import TwisterTitle from "./TwisterTitle";
// import ExamineHtml from "./ExamineHtml"

export default function PromptForHtmlFile(props) {

  const [html, setHtml] = React.useState();
  const [filePath, setFilePath] = React.useState();

  useEffect(() => {
    props.setHtml(html);
    props.setFilePath(filePath);
  },[html, filePath]);


  function handleHtmlFile(e) {
    const hfiles = e.target.files;
    if (hfiles.length === 0) {
      throw new Error("No html file selected");
    }

    const hfile = hfiles[0];
    console.log("File is ", hfile);
    setFilePath(hfile);

    const reader = new FileReader();
    reader.onload = (e) => {
      setHtml(reader.result);
    };
  
    reader.readAsText(hfile);
    // <meta name="dcterms.source" content="https://www.gutenberg.org/fi|<meta name="dcterms.modified" content="2024-09-27T16:44:51.74971
    // <link rel="dcterms.isFormatOf" href="http://www.gutenberg.org/ebo|<meta name="dc.rights" content="Public domain in the USA.">
    // <meta property="og:url" content="https://www.gutenberg.org/cache/|<link rel="dcterms.isFormatOf" href="http://www.gutenberg.org/eb
    // <meta property="og:image" content="https://www.gutenberg.org/cach|<meta name="dc.creator" content="Milne, A. A. (Alan Alexander), 
  }
  return (
    <>
    <TwisterTitle />
      <div id="div-input" className="divinput">
      <label className="file-input-label">Local Ebook HTML File</label>
      <br />
      <br />
        <input
          id="ebookfile"
          type="file"
          accept=".html, .htm"
          title="HTML File"
          name="ebookfile"
          className="file-input"
          onChange={handleHtmlFile}
        />
      </div>
    </>
  );
}
