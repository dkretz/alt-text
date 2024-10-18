// PreviewCard - displays the entire ebook from synthesized html
//    using the original head section plus base tag (to find imgs)
//    and the current state of the body section

import {useState } from "react";
import Frame, { useFrame } from "react-frame-component";


const InnerComponent = () => {
  // Hook returns iframe's window and document instances from Frame context
  const { document, window } = useFrame();

  // You can now use the document and window instances of the iframe
  // For example, you can manipulate the iframe's content or attributes
  console.log("iframe document:", document);
  console.log("iframe window:", window);

  return null;
};

export default function PreviewCard(props) {
  // const [doc, setDoc] = useState();

  // user clicks on an image from the page - sync to image list
  // so image list can be focused.
  // check target for an img tag
  const handleImgSelect = (i) => {
    props.setImage(i.targetd);
  };

  // if(props.image) {
    // doc.getElementById.scrollIntoView();
  // }

  // add the base tag to the head section
  const urlbase = props.url.match(/(.*)\//uis)[1];
  const base = `<base href="${urlbase}" />`;
  const vhead = props.dom.head.innerHTML + base;
  // const vhead = props.dom.head.innerHTML;

  const vrepl = `"$1${props.url}/$2"`;
  const vbody = props.dom.body.innerHTML.replace(/(<img.*?src=")(.*?)"/uisg, vrepl);
  return (
    <div className="half" id="divpreview" onClick={handleImgSelect}>
      <Frame
        id="pgframe"
        ref={props.iFrameRef}
        // head={vhead}
        initialContent={vbody}
        onClick={handleImgSelect}
      >
        <InnerComponent onClick={handleImgSelect} />
      </Frame>
    </div>
  );
}
