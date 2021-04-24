import React from "react";
import { Doughnut } from 'react-chartjs-2';

import { Link } from "react-router-dom";

import './main.css'
import DocumentIcon from '../../images/Document-Icon.png'
import CloudIcon from '../../images/Cloud-Icon.png'
import CloudIcon2 from '../../images/Statistics-Icon.png'
import PrinterIcon from '../../images/Printer-Icon.png'
import AddIcon from '../../images/Add-Icon.png'
import Settings from '../../images/Settings-Icon.png'
import Email from '../../images/Email-Icons.png'
import More from '../../images/More-Icon.png'

const state = {
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
                            <div className="row item1">
                                <div className="col">
                                    <div className="row item-titlle">
                                        <div className="row">

                                            <p className="col-11">Activity</p>
                                            <a className="col-1 item-icon" href="/">
                                                <img src={More} alt="" />
                                            </a>
                                        </div>
                                        <div className="row">

                                            <div className="chart">
                                                <Doughnut
                                                    data={state}
                                                    options={{
                                                        cutoutpercentage: 10,
                                                        title: {
                                                            display: true,
                                                            text: 'Average Rainfall per month',
                                                            fontSize: 20
                                                        },
                                                        legend: {
                                                            display: true,
                                                            position: 'right'
                                                        }
                                                    }}
                                                />

                                            </div>
                                        </div>

                                        <p>1</p>
                                    </div>
                                    <div className="row">

                                    </div>
                                    <div className="row">
                                        <div className="col6">

                                        </div>
                                        <div className="col6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row item1">
                                <p>1</p>
                            </div>

                            <div className="row item1">
                                <p>1</p>
                            </div>

                        </div>
                        <div className="col-5 menu-col">
                            <div className="row item1">
                                <p>1</p>
                            </div>
                            <div className="row item1">
                                <p>1</p>
                            </div>

                            <div className="row item1">
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