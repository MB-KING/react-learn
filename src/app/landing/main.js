import React from "react";
import { Doughnut } from 'react-chartjs-2';
import 'react-calendar/dist/Calendar.css';

import { Link } from "react-router-dom";
import Calendar from 'react-calendar'
import './main.css'
import DocumentIcon from '../../images/Document-Icon.png'
import CloudIcon from '../../images/Cloud-Icon.png'
import CloudIcon2 from '../../images/Statistics-Icon.png'
import PrinterIcon from '../../images/Printer-Icon.png'
import AddIcon from '../../images/Add-Icon.png'
import Settings from '../../images/Settings-Icon.png'
import Email from '../../images/Email-Icons.png'
import More from '../../images/More-Icon.png'
import User1 from '../../images/user1.png'
import User2 from '../../images/user2.png'
import User3 from '../../images/user3.png'

const state = {
    height: 20,
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: ['#1DE9B6', '#979797'],
            borderColor: '@fff',
            borderWidth: 0,
            size: 1,

            data: [75, 25]
        }
    ]
}

function Main() {
    return (
        <div className="main">
            <div className="row header">
                <div className="col-4 nametitlle">

                    <a href="/">Activity</a>
                </div>
                <div className="col-6 navbar">

                    <ul>
                        <a className="active_item" href="/"><li>Dashboard</li></a>
                        <a href="/"><li>Messages</li></a>
                        <a href="/"><li>Discover</li></a>
                    </ul>
                </div>
                <div className="col-2 login">
                    <Link to="/Login">
                        <button className="loginbtn">
                            login
                    </button>
                    </Link>
                </div>
            </div>
            <div className="row main-menu">
                <div className="col-3">
                    <div className="row">
                        <div className="col-3  sidebar">
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

                        <div className="col-9 sidemenu">
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
                <div className="col-9 menu">

                    <div className="row ">


                        <div className="col-5 menu-col">
                            <div className="row menu-item item-1">
                                <div className="item-header">
                                    <p className="item-titlle" >Activity</p>
                                    <a className="item-icon" href="/">
                                        <img src={More} />
                                    </a>
                                </div>
                                <div className=" chart">
                                    <Doughnut
                                        data={state}
                                        height={150}
                                        width={150}

                                        options={{
                                            maintainAspectRatio: false,
                                            cutout: 65,
                                        }}
                                    />
                                </div>
                                <div className="text-items">

                                    <div className="item-text">
                                        <p >MAX</p>
                                        <p>9.376</p>
                                        <p>Steps</p>
                                    </div>
                                    <div className="item-text">
                                        <p >MAX</p>
                                        <p>9.376</p>
                                        <p>Steps</p>
                                    </div>


                                </div>
                            </div>
                            <div className="row menu-item item-2">
                                <div className="item-header">
                                    <p className="item-titlle" id="w-color" >Project Design Sprint</p>
                                    <a className="item-icon" href="/">
                                        <img src={More} />
                                    </a>

                                </div>
                                <p className="" id="w-color">11 MAY 10:35</p>
                                <p className="item-p" id="w-color">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                <div className="item-imgs">
                                    <div className="sidebaritem c5">
                                        <a href="/">
                                            <img src={AddIcon} alt="1" />
                                        </a>
                                    </div>

                                    <a href="/" className="item-img">
                                        <img src={User1} alt="" />

                                    </a>
                                    <a href="/" className="item-img">
                                        <img src={User2} alt="" />

                                    </a>
                                    <a href="/" className="item-img">
                                        <img src={User3} alt="" />

                                    </a>
                                    <p id="w-color">+63</p>
                                </div>


                            </div>

                            <div className="row menu-item item-3">
                            <Calendar />
                            </div>

                        </div>
                        <div className="col-5 menu-col">
                            <div className="row menu-item">
                                <p>1</p>
                            </div>
                            <div className="row menu-item">
                                <p>1</p>
                            </div>

                            <div className="row menu-item">
                                <p>1</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
