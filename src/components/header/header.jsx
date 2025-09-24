import React from "react";
import HeaderStyle from './header.module.css';
import { FaCaretDown } from "react-icons/fa"; 
import { GoUnmute } from "react-icons/go";
import { FaWifi, FaBatteryFull } from "react-icons/fa";
export default function Header (){
    let dateObj = date();
    return (
        <div id="MainElement">
            <div className={HeaderStyle.HeaderArea}>
                <div className={HeaderStyle.rightElement}>
                    <span className={HeaderStyle.span}>Activities</span>
                </div>
                <div className={HeaderStyle.centerElements}>
                    <div className={HeaderStyle.dateTime}>
                        <span>{dateObj.weekDay} {dateObj.day} {dateObj.mes} {dateObj.time}</span>
                    </div>
                </div>
                <div className={HeaderStyle.iconsLeft}>
                    <FaWifi className={HeaderStyle.headerIcon} />
                    <GoUnmute className={HeaderStyle.headerIcon} />
                    <FaBatteryFull className={HeaderStyle.headerIcon} />
                    <FaCaretDown className={HeaderStyle.headerIcon} />
                </div>
            </div>
        </div>
    );
};

function date (){
    let months = {
        0: "Jan",
        1: "Fev",
        2: "Mar",
        3: "Abr",
        4: "Mai",
        5: "Jun",
        6: "Jul",
        7: "Ago",
        8: "Set",
        9: "Out",
        10: "Nov",
        11: "Dez"
    }
    
    let weekDays = {
        0: "Dom",
        1: "Seg",
        2: "Ter", 
        3: "Qua",
        4: "Qui",
        5: "Sex",
        6: "Sáb"
    }
    
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let weekDay = date.getDay();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    
    return {
        mes: months[month], 
        day: day,
        weekDay: weekDays[weekDay],
        time: `${hours}:${minutes}`
    }
}
