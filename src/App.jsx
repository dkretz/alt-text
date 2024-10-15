// eb-edit/src/App.jsx

// text is retEditor.current.editor.getValue()

import React from "react";

import "./App.css";
import TabSwitch from "./components/TabSwitch";

function App() {



  return (
    <>
    <div id="App">
      <h2 className="hdr2">Text Twister</ h2>
      <TabSwitch />
    </div>
    </>
  );
}

export default App;
