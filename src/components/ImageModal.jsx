import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function ImageModal(props) {
  if (! props.image || !props.modalIsOpen) {
    return "";
  }

  const imgsrc = new URL(url.href, props.image.src).href;
  return (
    <Dialog
      onClose={() => props.setModalIsOpen(false)}
      open={props.modalIsOpen}
    >
      <DialogTitle>Image Alt-Text</DialogTitle>
      <DialogContent>
        <img src={imgsrc} />
        <textarea 
            defaultValue={props.image.alt ?? 'none'}
            id="modaltext"
            className="altarea"
            name="modaltextid" />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => props.setModalIsOpen(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
