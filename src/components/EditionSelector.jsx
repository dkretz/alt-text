
import React from "react";

function Edition(edition) {
    
    const {code, editionName} = edition;

    return <div>
        <h1>Edition</h1>
        <p>{code} {editionName}</p>
    </div>
};

export default Edition;