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
export default function TalentDb(){
    return (
        <div className={TalentsStyle.main}>
            <div className={TalentsStyle.headerDoc}></div>
             <div className={TalentsStyle.siteBody}>
                <div className={TalentsStyle.siteContent}>
                    <div id={TalentsStyle.title}>
                        <span className={TalentsStyle.title}>Data Base</span>
                    </div>
                    <br />
                    <ul>
                        <li className={TalentsStyle.showDropdown}>
                            <u>MYSQL</u>
                            <ul className={TalentsStyle.hide}>
                                <li>Procedures</li>
                                <li>Subqueries</li>
                                <li>Bind Variables</li>
                                <li>Temporary tables</li>
                                <li>Transactions</li>
                               
                            </ul>
                        </li>
                        <li className={TalentsStyle.showDropdown}>
                            <u >
                              Oracle
                            </u>
                            <ul className={TalentsStyle.hide}>
                                <li>Procedures</li>
                                <li>Subqueries</li>
                                <li>Bind Variables</li>
                                <li>Temporary tables</li>
                                <li>Transactions</li>
                               
                            </ul>
                        </li>
                        <li>
                           MongoDB
                        </li>
                        <li>
                            TypeORM
                        </li>
                        <li>
                            sqlAlchemy
                        </li>
                        
                    </ul>
                </div>
                <div className={TalentsStyle.siteContent2db}>
                    
                </div>
             </div>
        </div>
    )
};