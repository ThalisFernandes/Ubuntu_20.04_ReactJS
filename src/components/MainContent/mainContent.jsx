import React from "react";


export default function MainComponent ({Children}){
    return(
        <div className="MainContentDiv">
            {Children}
        </div>
    )
}