import {useContext} from "react";

export default function TwisterTitle(props) {

  return (
    <div id="twister_title">

      <h4>{props.version}</h4>
      <h2 className="hdr2">Alt-Text Twister</h2>
    </div>
  );
}
