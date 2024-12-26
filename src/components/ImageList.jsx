// ImageList - displays a list of images

import { useState, useEffect } from "react";

import ImageModal from "./ImageModal";

function ImageItem(props) {
  const imgsrc = new URL(
    new URL(props.image.src).pathname.substring(1),
    props.url.href
  ).href;
  const imgalt = props.image.alt === "" ? "none" : props.image.alt;

  const handleEditButton = (e => {
    console.log("handleEditButton", e.target.id);
    props.handleEditClick(e);
  })


  return (
    <>
      <div
        id={"div" + props.image.id}
        className="alt-block"
      >
        <img
          id={props.image.id}
          src={imgsrc}
          className="previmg"
          alt={imgalt}
          onClick={props.handleImageClick}
        />
        <div className="divalt">
        {imgalt}
        <button
          id={"btn" + props.image.id}
          name={"btn" + props.image.id}
          className="btn-edit"
          onClick={handleEditButton}
        >
          Edit
        </button>
        </div>
      </div>
    </>
  );
}

export default function ImageList(props) {
  // convert html object collection to an array so we can map.
  const images = [...props.images];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (props.images.length === 0) {
    console.log("No images");
    return "";
  }

  const openModal = (() => setModalIsOpen(true));
  const closeModal = (() => setModalIsOpen(false));

  const handleEditClick = (e => {
    console.log(e, e.target.id);
    props.setImage(
      e.target.parentNode.parentNode.querySelector("img")
    );
    openModal();
    // const iimage = e.target.parentNode.querySelect("img");
    // props.setImage(iimage);
    // props.handleEditClick();
  });

  // if user selects an image, send it back to TabSwitch
  const handleImageClick = ((e) => {
    console.log("handleImageClick", e.target.id);
    props.setImage(e.target);
  });

  const image_list = images.map((image) => {

    return (
      <ImageItem
        key={image.id}
        url={props.url}
        image={image}
        setImage={props.setImage}
        handleEditClick={handleEditClick}
        closeModal={closeModal}
        handleImageClick={handleImageClick}
      />
    );
  });

  return (
    <div
      id="divimglist"
      className="half"
    >
      <ImageModal
        url={props.url}
        image={props.image}
        closeModal={closeModal}
        isOpen={modalIsOpen}
      />
      {image_list}
    </div>
  );
}
