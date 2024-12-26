import ReactModal from "react-modal-resizable-draggable";

export default function ImageModal(props) {

  if (!props.image) {
    return "";
  }


  const handleClose = (e) => {
    props.closeModal();
  };

  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        initWidth={800}
        initHeight={400}
        className="modal-custom-class"
      >
      <img alt={props.image.alt} src={props.image.src} />

  
        <button onClick={handleClose}>Close modal</button>
      </ReactModal>
    </div>
  );
}
