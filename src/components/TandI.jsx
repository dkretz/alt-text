import { useState, useEffect } from "react";

import EditorCard from "./EditorCard";
import ImageCard from "./ImageCard";

// kp-eb0301
export default function TextAndImage(props) {

  const [edition, setEdition] = useState(props.edition);
  const [volume, setVolume] = useState(props.volume);
  const [pgseq, setPgseq] = useState();
  const [imgurl, setImgurl] = useState();
  const [text, setText] = useState();
  const qry = 'https://www.donkretz.com/eb/fetchapi.php?query=save_volume';


  useEffect( () => {
    console.log("Text changed");
  }, [text])

  useEffect( () => {
    console.log("edition or volume changed");
    const qry = `https://www.donkretz.com/eb/fetchsrv.php?query=volume_text&edition=${edition}&volume=${volume}`;
    fetch(qry)
      .then((rsp) => rsp.json())
      .then((data) => {
        setText(data.text);
      });
    }, [edition, volume]);

  useEffect( () => {
    // debugger;
    const qry_xmlid = `https://www.donkretz.com/eb/fetchsrv.php?query=pgseq_imageurl&edition=${edition}&volume=${volume}&pgseq=${pgseq}`;
    if(pgseq) {
    fetch(qry_xmlid)
      .then((rsp) => rsp.json())
      .then((data) => {
        console.log("pgseq/image changed: " + pgseq + "/" + data.imgurl);
        setImgurl(data.imgurl);
        setPgseq(pgseq);
      });
    };
    }, [pgseq, imgurl]);
  

  // debugger;

  if(imgurl) {
    return (
      <>
      <div id="teimain">
        <EditorCard text={text} setText={setText} setPgseq={setPgseq} edition={edition} volume={volume} pgseq={pgseq} />
        <ImageCard pgseq={pgseq} imgurl={imgurl} />
      </div>
      </>
    );
  }
  else {
    return (
      <div id="teimain">
        <EditorCard text={text} setText={setText} setPgseq={setPgseq} edition={edition} volume={volume} pgseq={pgseq} />
      </div>
    );

  }
}
