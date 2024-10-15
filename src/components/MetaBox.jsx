
import React from "react";

export default function MetaBox(props) {
    return (
        <div className="meta" id="divmeta">
            <p>Image/alt-text counts</p>
            <p>Total: {props.nsum}  Empty: {props.nblank}  Other:  {props.nsum - props.nblank}</p>
        </div>
    )
}