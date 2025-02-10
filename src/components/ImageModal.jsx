import ReactModal from "react-modal-resizable-draggable";

export default function ImageModal(props) {

  if (!props.image) {
    return "";
  }


  const handleCancel = (e) => {
    props.closeModal();
  };

  const handleSave = (e) => {
    props.saveModal();
  };


  const handleTextArea = ( e => {
    console.log(e.value);
  } );

  const handleChkDec = ( e => {
    console.log(e.value);
  } );

  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
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
        value={props.image.alt}
        onChange={handleTextArea}
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
