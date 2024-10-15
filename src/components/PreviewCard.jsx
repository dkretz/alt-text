import { useState, useRef, useEffect } from "react";
import Frame, {FrameContextConsumer, useFrame} from "react-frame-component";

export default function PreviewCard(props) {

  // const iref = useRef();

  const handleImgSelect = ( i => {
    debugger;
    props.setImg(i);
  });

  // const vhead = props.dom.head.innerHTML + `<base href='${props.url}'>`;
  const vhead = props.dom.head.innerHTML;

  return (
    <div className="half" id="divpreview" onClick={handleImgSelect}>
    <Frame
      id="pgframe"
      ref={props.iFrameRef}
      head={props.dom.head.innerHTML}
      initialContent={props.dom.body.innerHTML}
      onClick={handleImgSelect}
      />
    </div>
  );
}


/*
const InnerComponent = () => {
  // Hook returns iframe's window and document instances from Frame context
  const { document, window } = useFrame();

  // You can now use the document and window instances of the iframe
  // For example, you can manipulate the iframe's content or attributes
  console.log('iframe document:', document);
  console.log('iframe window:', window);

  return null;
};

const FrameWithUseFrame = () => (
  <Frame>
    <InnerComponent />
  </Frame>
);
*/
