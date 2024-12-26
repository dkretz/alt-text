import React from "react";

// import ebook_text from "./ebook.jsx";

export default function PromptForBookId(props) {
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
        id="ebookid" /> 
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </>
  );
}
