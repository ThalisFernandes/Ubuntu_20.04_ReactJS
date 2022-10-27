import { TablePaginationActionsUnstyled } from "@mui/base";
import React from "react";
import TalentsStyle from './talents.module.css';



{/**
 *
 * class spans 
 *  1 - Functions color
 *  2 - NamesColors 
 *  3 - brackets 
 *  4 - secondsBrackets
 *  5 - lines_color
*/}
export default function TalentJs(){
    return (
        <div className={TalentsStyle.main}>
            <div className={TalentsStyle.headerDoc}></div>
             <div className={TalentsStyle.siteBody}>
                <div className={TalentsStyle.siteContent}>
                    <span>JavaScript</span><br />
                    <ul>
                        <li>
                            <u>OOP</u>
                        </li>
                        <li>
                            <u>
                              Functional
                            </u>
                        </li>
                        <li>
                           Promisses
                        </li>
                        <li>
                            Async/Await
                        </li>
                        <li>
                            Ajax/Axios/Fetch
                        </li>
                        <li>
                            Linked list, Binary Three, Hash Table, Stacks and Queue
                        </li>
                        <li>
                            Hoisting
                        </li>
                        <li>
                            Scopes
                        </li>
                        <li>
                            ReactJs
                            <ul>
                                <li>useState/useEffect</li>
                                <li>Prop/State</li>
                                <li>Conditional Rendering</li>
                                <li>Material ui</li>
                                <li>Styled Components</li>
                                <li>Axios</li>
                            </ul>
                        </li>
                        <li>
                            NodeJS
                            <ul>
                                <li>JsonWebToken</li>
                                <li>express</li>
                                <li>Templating</li>
                                <li>TypeORM</li>
                                <li>Monolith</li>
                                <li>MicroServices</li>
                                <li>nestjs</li>
                                <li>http module</li>
                                <li>webrtc</li>
                            </ul>
                            
                        </li>
                        
                    </ul>
                </div>
                <div className={TalentsStyle.siteContent2js}>
                    
                </div>
             </div>
        </div>
    )
};