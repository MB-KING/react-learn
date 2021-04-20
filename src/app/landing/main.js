import React from "react";

import './main.css'
import { Link } from "react-router-dom";
import DocumentIcon from '../../images/Document-Icon.png'
import CloudIcon from '../../images/Cloud-Icon.png'
import CloudIcon2 from '../../images/Statistics-Icon.png'
import PrinterIcon from '../../images/Printer-Icon.png'
import AddIcon from '../../images/Add-Icon.png'

function Main() {
    return (
        <div className="main">
            <div className="row header">
                <a className="nametitlle" href="/">Activity</a>
                <ul className="navbar">
                    <a className="active_item" href="/"><li>Dashboard</li></a>
                    <a href="/"><li>Messages</li></a>
                    <a href="/"><li>Discover</li></a>
                </ul>
                <Link to="/Login">
                    <button className="loginbtn">
                        login
                    </button>
                </Link>
            </div>
            <div className="row main-menu">
                <div className="col-xl-1 sidebar">
                    <div className="sidebaritem">
                        <a href="/">
                            <img src={DocumentIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem">
                        <a href="/">
                            <img src={CloudIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem">
                        <a href="/">
                            <img src={CloudIcon2} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem">
                        <a href="/">
                            <img src={PrinterIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem">
                        <a href="/">
                            <img src={AddIcon} alt="1" />
                        </a>
                    </div>

                </div>
                <div className="col-xl-11">
                    <p>1</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
