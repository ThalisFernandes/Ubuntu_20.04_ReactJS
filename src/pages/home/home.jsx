import React, {useState} from "react";
import Header from "../../components/header/header";
import homeStyle from './home.module.css';
import {AppBar} from '@mui/material'
import ApplicationBar from "../../components/containerBar/containerBar";
import MainComponent from "../../components/MainContent/mainContent";
import TalentPy from "../../components/talents/talentpy";
import  TalentJs from "../../components/talents/talentjs";
import TalentDb from "../../components/talents/talentdb";
import FolderIcon from '../../imgs/nautilus.png';
import PressIcons from "../../components/press_Icons/pressIcons";
import chrome from '../../imgs/chrome.png';
import settingsIcon from '../../imgs/settings.svg';
import GitHubModal from "../../components/modals/GitHubModal";
import FileExplorerModal from "../../components/modals/FileExplorerModal";
import ConfigModal from "../../components/modals/ConfigModal";
import PortfolioSections from "../../components/portfolio/PortfolioSections";
export default function Home(){
    let folder = PressIcons(null, FolderIcon);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showGitHubModal, setShowGitHubModal] = useState(false);
    const [showFileExplorer, setShowFileExplorer] = useState(false);
    const [showConfigModal, setShowConfigModal] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);


    
    return (
        <div id="HomeMainDiv">

            <Header />
            <div id={homeStyle.downSide}>
                <div>
                <div className={homeStyle.ContainerElement}>
                        <div className={homeStyle.icon} onClick={()=>setShowFileExplorer(true)}>
                            <img src={FolderIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>setShowGitHubModal(true)}>
                            <img src={chrome} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>setShowConfigModal(true)}>
                            <img src={settingsIcon} alt="" className={homeStyle.imgIcon} />
                        </div>
                        <div className={homeStyle.icon} onClick={()=>{
                            setShowPortfolio(!showPortfolio);
                            setShowAboutMe(false);
                        }}>
                            <div className={homeStyle.portfolioIcon}>📋</div>
                        </div>
                </div>
                </div>
                <div id={homeStyle.secondGrid}>
                    {showAboutMe ? <TalentDb /> : ''}
                    { showPortfolio ? <PortfolioSections /> : ""}
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