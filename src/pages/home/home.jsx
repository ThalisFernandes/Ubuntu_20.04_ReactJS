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
import settingsIcon from '../../imgs/settings.svg';
import GitHubModal from "../../components/modals/GitHubModal";
import FileExplorerModal from "../../components/modals/FileExplorerModal";
import ConfigModal from "../../components/modals/ConfigModal";
export default function Home(){
    let folder = PressIcons(null, FolderIcon);
    const [showTerminal, setShowTerminal] = useState(false);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showGitHubModal, setShowGitHubModal] = useState(false);
    const [showFileExplorer, setShowFileExplorer] = useState(false);
    const [showConfigModal, setShowConfigModal] = useState(false);


    
    return (
        <div id="HomeMainDiv">

            <Header />
            <div id={homeStyle.downSide}>
                <div>
                <div className={homeStyle.ContainerElement}>
                        <div className={homeStyle.icon} onClick={()=>showTerminal === true? setShowTerminal(false) : setShowTerminal(true)}>
                            <img src={TerminalIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>setShowFileExplorer(true)}>
                            <img src={FolderIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>setShowGitHubModal(true)}>
                            <img src={chrome} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>setShowConfigModal(true)}>
                            <img src={settingsIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                </div>
                </div>
                <div id={homeStyle.secondGrid}>
                    {showAboutMe ? <TalentDb /> : ''}
                    { showTerminal ? <Terminator /> : ""}
                </div>
            </div>
            
            {/* Modais */}
            <GitHubModal 
                isOpen={showGitHubModal} 
                onClose={() => setShowGitHubModal(false)} 
            />
            <FileExplorerModal 
                isOpen={showFileExplorer} 
                onClose={() => setShowFileExplorer(false)} 
            />
            <ConfigModal 
                isOpen={showConfigModal} 
                onClose={() => setShowConfigModal(false)} 
            />
        </div>
    )
}