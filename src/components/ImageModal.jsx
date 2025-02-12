import { useState } from "react"
import ReactModal from "react-modal-resizable-draggable";

export default function ImageModal(props) {

  if (!props.image) {
    return "";
  }

  const [taText, setTaText] = useState(props.image.alt);


  const handleCancel = (e) => {
    props.closeModal();
  };

  const handleSave = (e) => {
    saveModal();
  };


  const handleChkDec = ( e => {
    console.log(e.value);
  } );

  const handleModalLoad = (e) => { console.log("modal loading"); }

  const saveModal = () => {
    if($("ta-alt").value !== props.image.alt) {
      props.saveModal($("ta-alt").value);
    };
    props.closeModal();
  };

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setTaText(e.target.value);
  }

  return (
    <div onLoad={handleModalLoad}>
      <ReactModal
        isOpen={props.modalIsOpen}
        initWidth={800}
        initHeight={400}
        className="modal-custom-class"
      >
      <img  
        id="img-modal" 
        name="img-modal" 
        alt={props.image.alt} 
        src={props.image.src} />
      <textarea 
        id="ta-alt"
        name="ta-alt"
        value={taText}
        onChange={(e) => setTaText(e.target.value)}
        />
        <label 
          htmlFor="chkdec">Decorative Label
        </label>
        <input 
          id="chkdec"
          name="chkdec"
          type="checkbox"
          onChange={handleChkDec}
        />
        <button
          id="btn-modal-save"
          name="btn-modal-save"
          onClick={handleSave}>
            Save
        </button>
        <button
          id="btn-modal-cancel"
          name="btn-modal-cancel"
          onClick={handleCancel}>
            Cancel
        </button>
      </ReactModal>
    </div>
  );
}
