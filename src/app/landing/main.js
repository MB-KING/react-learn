import React from "react";

import './main.css'
import { Link } from "react-router-dom";
import DocumentIcon from '../../images/Document-Icon.png'
import CloudIcon from '../../images/Cloud-Icon.png'
import CloudIcon2 from '../../images/Statistics-Icon.png'
import PrinterIcon from '../../images/Printer-Icon.png'
import AddIcon from '../../images/Add-Icon.png'
import Settings from '../../images/Settings-Icon.png'
import Email from '../../images/Email-Icons.png'


function Main() {
    return (
        <div className="main">
            <div className="row header">
                <a className="nametitlle" href="/">Activity</a>
                <ul className="navbar">
                    <a className="active_item" href="/"><li>Dashboard</li></a>
                    <a href="/"><li>Messages</li></a>
                    <a href="/"><li>Discover</li></a>
                    <Link to="/Login">
                        <button className="loginbtn">
                            login
                    </button>
                    </Link>
                </ul>
            </div>
            <div className="row main-menu">
                <div className="col-xl-1  sidebar">
                    <div className="sidebaritem c1">
                        <a href="/">
                            <img src={DocumentIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem c2">
                        <a href="/">
                            <img src={CloudIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem c3">
                        <a href="/">
                            <img src={CloudIcon2} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem c4">
                        <a href="/">
                            <img src={PrinterIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem c5">
                        <a href="/">
                            <img src={AddIcon} alt="1" />
                        </a>
                    </div>
                    <div className="sidebaritem c5">
                        <a href="/">
                            <img src={Settings} alt="1" />
                        </a>
                    </div>

                </div>
                <div className="col-xl-2 sidemenu">
                    <div className="sidemenuitem">
                        <img src={DocumentIcon} alt="" />
                        <a href="/">Documents</a>
                    </div>
                    <div className="sidemenuitem">
                        <img src={CloudIcon} alt="" />
                        <a href="/">Cloud</a>
                    </div>
                    <div className="sidemenuitem">
                        <img src={CloudIcon2} alt="" />
                        <a href="/">Statistics</a>
                    </div>
                    <div className="sidemenuitem">
                        <img src={PrinterIcon} alt="" />
                        <a href="/">Printer</a>
                    </div>
                    <div className="sidemenuitem">
                        <img src={Email} alt="" />
                        <a href="/">Email Messages</a>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
