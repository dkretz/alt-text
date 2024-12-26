import React, {useState} from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function EditionRadio (props) {

    const handleRadio = e => {
        e.preventDefault();
        console.log(e.target.value);
        debugger;
        props.setEdition(e.target.value);
    };

    return (
        <ToggleButtonGroup
                value={props.edition}
                defaultValue="eb03"
                className="cFlex"
                id="edition-radio-group" onChange={handleRadio}>
            <ToggleButton value="eb03">Third Edition</ToggleButton>
            <ToggleButton value="eb07">seventh Edition</ToggleButton>
            <ToggleButton value="eb09">Ninth Edition</ToggleButton>
            <ToggleButton value="eb11">Eleventh Edition</ToggleButton>
        </ToggleButtonGroup>
    );
};
