import React from "react";
import IconsStyle from './pressIcon.module.css';
export default function PressIcons (state, FolderIcon){return (
        <>
            <div className={IconsStyle.icon} onClick={()=>state}>
                    <img src={FolderIcon} alt="" className={IconsStyle.imgIcon} />
                </div>
        </>
    )}