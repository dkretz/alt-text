// ImageList - displays a list of images

import { useState, useEffect } from "react";

import ImageModal from "./ImageModal";

// props - image url  handleEditClick handleImageClick
function ImageItem(props) {

  // console.log(new URL(props.src).pathname.substring(1));
  // console.log(new URL(import.meta.url));

  // const imgsrc = new URL(
    // new URL(props.src).pathname.substring(1),
    // import.meta.url).href;

    // const imgsrc = new URL(
      // new URL(props.src).pathname,
      // new URL(import.meta.url).origin + "/pooh/"
    // ).href;


    console.log(new URL(props.src).pathname);
    console.log(new URL(import.meta.url).origin);
  console.log("imgsrc: ", imgsrc);

  return (
    <>
      <div
        id={"div" + props.id}
        className="alt-block"
      >
        <img
          id={props.id}
          key={props.id}
          src={props.src}
          className="previmg"
          alt={props.alt}
          onClick={props.handleImageClick}
        />
        <div className="divalt">
          {props.alt}
          <button
            id={"btn" + props.id}
            name={"btn" + props.id}
            className="btn-edit"
            onClick={props.handleEditClick}
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
  // const images = [...props.images];
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const saveModal = (newAlt) => {
    if(props.image) {
      newImages = props.images.map((img) => {
        if (img.id === props.image.id) {
          newImage = {...img, alt: newAlt};
          return newImage;
        }
        return img;
      });
    props.setImages(newImages);
    }
  }

  if (props.images.length === 0) {
    alert("No images at ImageList");
    return "";
  }

  const handleSetImage = (img) => {
    props.setImage(img);
  };

  const handleEditClick = (e) => {
    // console.log("handleEditClick: ", e, e.target.id);
    handleSetImage(e.target.parentNode.parentNode.querySelector("img"));
    openModal();
  };

  // if user selects an image, send it back to TabSwitch
  const handleImageClick = (e) => {
    // console.log("handleImageClick", e.target.id);
    props.setImage(e.target);
  };

  useEffect(() => {
    if (props.image) {
      $(props.image.id).scrollIntoView(
        { behavior: "smooth", 
          block: "center" });
    }
  }, [props.image]);

  const imglist = props.images.map((image) => {
    return (
      <ImageItem
        src={image.src}
        alt={image.alt}
        key={image.id}
        id={image.id}
        baseUrl={props.baseUrl}
        handleImageClick={handleImageClick}
        handleEditClick={handleEditClick}
      />
    );
  });

  return (
    <>
      <div
        id="divimglist"
        className="card"
      >
        {imglist}
      </div>
      <ImageModal
        image={props.image}
        closeModal={closeModal}
        saveModal={saveModal}
        modalIsOpen={modalIsOpen}
        />
    </>
  );
  return (
    <i>
      <ImageItem image={i} />
    </i>
  );
}
