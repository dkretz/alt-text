import { useState, useEffect } from "react";

export default function ImageCard(props) {


  return (
    <div id="divimg">
        <div id="divimgcanvas">
          <img
            className="previmg"
            id="imgpage"
            src={props.imgurl}
            // onLoad={handleImgChange}
            alt=""
          />
          <canvas id="imgcvs"></canvas>
        </div>
      <p>Image url: {props.imgurl}</p>
    </div>
  );
}
