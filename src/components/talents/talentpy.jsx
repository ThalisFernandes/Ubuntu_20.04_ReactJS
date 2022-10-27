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
export default function TalentPy(){
    return (
        <div className={TalentsStyle.main}>
            <div className={TalentsStyle.headerDoc}></div>
             <div className={TalentsStyle.siteBody}>
                <div className={TalentsStyle.siteContent}>
                    <span>Python</span><br />
                    <ul>
                        <li>
                            <u>Comprehension</u>
                        </li>
                        <li>
                            <u>
                                Lambda
                            </u>
                        </li>
                        <li>
                            BeautifullSoup
                        </li>
                        <li>
                            List, Sets, Tuples and Dictionaries
                        </li>
                        <li>
                            OOP
                        </li>
                        <li>
                            Linked list, Binary Three, Hash Table, Stacks and Queue
                        </li>
                        <li>
                            Django
                        </li>
                        <li>
                            FastApi
                        </li>
                        <li>
                            OpenApi
                        </li>
                        
                    </ul>
                </div>
                <div className={TalentsStyle.siteContent2}>
                    
                </div>
             </div>
        </div>
    )
};