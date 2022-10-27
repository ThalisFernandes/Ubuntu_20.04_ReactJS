import React from "react";
import HeaderStyle from './header.module.css';
import { FaCaretDown } from "react-icons/fa"; 
import { GoTerminal, GoUnmute } from "react-icons/go";
export default function Header (){
    let dateObj = date();
    return (
        <div id="MainElement">
            <div className={HeaderStyle.HeaderArea}>
                <div className={HeaderStyle.rightElement}>
                    <span className={HeaderStyle.span}>Activities</span>
                </div>
                <div className={HeaderStyle.centerElements}>
                    <div className="flex ">
                        <span><GoTerminal /> Terminal <FaCaretDown /></span>
                    </div>
                    {dateObj.mes}
                </div>
                <div className={HeaderStyle.iconsLeft}>
                    <GoUnmute />

                    <FaCaretDown />
                </div>
            </div>
        </div>
    );
};

function date (){
    let months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Abr",
        5: "Mai",
        6: "Jun",
        7: "Jul",
        8: "Ago",
        9: "Set",
        10: "Out",
        11: "Nov",
        12: "Dec"
    }
    let date = new Date();

    let month = date.getMonth();
     return {mes: months[month], day: "teste"}
}
