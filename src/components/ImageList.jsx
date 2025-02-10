// ImageList - displays a list of images

import { useState, useEffect } from "react";

import ImageModal from "./ImageModal";

// props - image url  handleEditClick handleImageClick
function ImageItem(props) {
  const imgsrc = new URL(
    new URL(props.src).pathname.substring(1),
    props.baseUrl
  );

  return (
    <>
      <div
        id={"div" + props.id}
        className="alt-block"
      >
        <img
          id={props.id}
          key={props.id}
          src={imgsrc}
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
            // onClick={props.handleEditClick}
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

  if (props.images.length === 0) {
    console.log("No images");
    alert("No images)");
    return "";
  }

  const handleSetImage = (img) => {
    props.setImage(img);
  };

  const handleEditClick = (e) => {
    console.log("handleEditClick: ", e, e.target.id);
    handleSetImage(e.target.parentNode.parentNode.querySelector("img"));
    openModal();
    // const iimage = e.target.parentNode.querySelect("img");
    // props.setImage(iimage);
    // props.handleEditClick();
  };

  // if user selects an image, send it back to TabSwitch
  const handleImageClick = (e) => {
    console.log("handleImageClick", e.target.id);
    props.setImage(e.target);
  };

  useEffect(() => {
    if (props.image) {
      $(props.image.id).scrollIntoView({ behavior: "smooth", block: "center" });
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
      />
    );
    // <ImageItem image={img} />;
    // image={props.image}
    // handleImageClick={handleImageClick}
    // handleEditClick={handleEditClick}
  });

  return (
    <>
      <div
        id="divimglist"
        className="card"
      >
        {imglist}
      </div>
    </>
  );
  return (
    <i>
      <ImageItem image={i} />
    </i>
  );
  // return (
  // <div
  // id="divimglist"
  // className="half"
  // >
  // <>{imglist}</>
  // </div>
  // );
}
