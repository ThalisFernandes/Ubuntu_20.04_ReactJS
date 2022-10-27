import React, {useState} from "react";
import Header from "../../components/header/header";
import homeStyle from './home.module.css';
import {AppBar} from '@mui/material'
import ApplicationBar from "../../components/containerBar/containerBar";
import Terminator from "../../components/terminal/terminal";
import MainComponent from "../../components/MainContent/mainContent";
import TalentPy from "../../components/talents/talentpy";
import  TalentJs from "../../components/talents/talentjs";
import TalentDb from "../../components/talents/talentdb";
import FolderIcon from '../../imgs/nautilus.png';
import TerminalIcon from '../../imgs/terminal.png'
import PressIcons from "../../components/press_Icons/pressIcons";
import chrome from '../../imgs/chrome.png';
export default function Home(){
    let folder = PressIcons(null, FolderIcon);
    const [showTerminal, setShowTerminal] = useState(false);
    const [showAboutMe, setShowAboutMe] = useState(false);


    
    return (
        <div id="HomeMainDiv">

            <Header />
            <div id={homeStyle.downSide}>
                <div>
                <div className={homeStyle.ContainerElement}>
                        <div className={homeStyle.icon} onClick={()=>showTerminal === true? setShowTerminal(false) : setShowTerminal(true)}>
                            <img src={TerminalIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>{}}>
                            <img src={FolderIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>showAboutMe === true? setShowAboutMe(false): setShowAboutMe(true)}>
                            <img src={chrome} alt="" className={homeStyle.imgIcon} />
                        </div>
                </div>
                </div>
                <div id={homeStyle.secondGrid}>
                    {showAboutMe ? <TalentDb /> : ''}
                    { showTerminal ? <Terminator /> : ""}
                </div>
            </div>
        </div>
    )
}