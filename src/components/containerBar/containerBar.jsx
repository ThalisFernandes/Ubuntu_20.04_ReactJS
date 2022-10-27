import React, { Children } from "react";
import containerStyle from './container.module.css';
import FolderIcon from '../../imgs/nautilus.png'
import Terminal from   '../../imgs/terminal.png'
export default function ApplicationBar ({Children}){
    return (
        <>
            <div className={containerStyle.ContainerElement}>
                {Children}
            </div>
            
        </>
    )
}