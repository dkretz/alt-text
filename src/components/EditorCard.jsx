import { useState, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/keybinding-vim";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";


export default function EditorCard(props) {
  const refEditor = useRef();
  const [backfind, setBackfind] = useState();
  
  const aceLoad = (e) => {
  // $("divace").classList.remove("half");
    $("ebeditor").style.height = "100%";
  };

  const handleSave = (e) => {
    console.log(e);
    props.setText(refEditor.current.getValue());
    /*
    const pbody = JSON.stringify({
      query: "save_volume",
      edition: props.edition,
      volume: props.volume,
      save_text: refEditor.current.editor.getValue(),
    }
  );

    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: pbody,
    };

    fetch("https://www.donkretz.com/eb/fetchapi.php", opts)
      .then((rsp) => rsp.json())
      .then((data) => console.log(data.status));
    */
  };

  function SaveButton({ handleSave }) {
    return (
      <button id="go_button" onClick={handleSave} className="lfloat">
        Save
      </button>
    );
  }

  /**
   *  change page image if appropriate
   */

  const handleCursorMove = useDebouncedCallback((e) => {
    if(! refEditor || ! refEditor.current) {
      return;
    }

    let srch = refEditor.current.editor.$search;

    // debugger;

    const re = 'xml:id="(.*?)"';
    refEditor.current.editor.find(re, {
      backwards: true,
      preventScroll: true,
      wrap: false,
      skipCurrent: false,
      regExp: true,
    });

    setBackfind(srch.find(refEditor.current.editor.session));
    if (!backfind) {
      return;
    }

    // srch.set({ backwards: false,
    //  skipCurrent: true,
    //  });

    // setNextfind(srch.find(ed.session));
    // setBackfind(backfind ?? nextfind);

    // let found = ed.session.doc.getLine(backfind.start.row);
    // let xmlid = found.match(re);
    // let pgseq = parseInt(xmlid[1].substring(10, 14));
    // console.debug(pgseq);
    // props.setPgseq(pgseq);

    /**
     * 
    srch.set({ backwards: false,
      if(! backfind) {
      return;
    }
              ekipCurrent: true, });
    // setNextfind(srch.find(ed.session));
     */
  });

  const handleTextChange = (e) => {
    const id = e.match(/\[eBook #(\d+)\]/)[1];
    const imgpath = ` src="https://www.gutenberg.org/cache/epub/${id}/images`;
    const ace_text = e.replace(/\ssrc="images/g, imgpath);
    props.setText(ace_text);
  };

  return (
    <div id="divace" className="half">
      <div id="divlefthdr">
        <SaveButton handleSave={handleSave} />
      </div>
      <AceEditor
        // onClick={handleClick}
        ref={refEditor}
        mode="xml"
        keyboardHandler="vim"
        name="ebeditor"
        width="100%"
        editorProps={{ height: "80vh" }}
        // onScroll={aceScroll}
        // onResize={aceResize}
        onLoad={aceLoad}
        // onSelectionChange={handleSelectionChange}
        onCursorChange={handleCursorMove}
        onChange={handleTextChange}
        value={props.text}
        setOptions={{ useWorker: false, fontSize: 16 }}
        theme="github"
      />
    </div>
  );
}
