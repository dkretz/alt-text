import React, { useState } from "react";

// import ebook_text from "./ebook.jsx";
//
// https://ebookfoundation.org/cache/epub/`${ebook}`/`${ebook}`-h.html

const ebook = 67098;
const EBOOK_TEMPLATE = `https://ebookfoundation.org/cache/epub/${ebook}/${ebook}-h.html`;

console.log(EBOOK_TEMPLATE);

export default function PromptForBookId(props) {
  const [ebookId, setEbookId] = useState();
  function handleSubmit(e) {
    const id = ebookid.value;
    props.setId(id);
    console.log("handle bookid", e.target.id);
  }

  return (
    <>
      <label htmlFor="ebookid">Enter Book ID</label>
      <input
        type="number"
        name="ebookid"
        id="ebookid"
      />
      <input
        type="button"
        name="btn-submit"
        onClick={handleSubmit}
      >
        Submit
      </input>
      <input
        type="button"
        name="btn-cancel"
        onClick={handleSubmit}
      >
        Submit
      </input>
    </>
  );
}
