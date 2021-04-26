import React from "react";
import { Doughnut, Bar } from 'react-chartjs-2';
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
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: ['#1DE9B6', '#979797'],
            borderColor: '@fff',
            borderWidth: 0,
            data: [75, 25]
        }
    ]
}
const state2 = {
    labels: ['Sport', 'Music', 'Travel', 'News'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: ['#1DC4E9', '#899ED4', '#00A2FF', '#F48F36'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0,
            data: [65, 59, 80, 81]
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
                                        <img src={More} alt=""></img>
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
                                        <img src={More} alt=""/>
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
                            <div className="row menu-item item-4">
                                <p className="item-titlle" id="text-color-gray" >ACCOUNT SETTINGS</p>
                                <div className="item-4-input">
                                    <p>EMAIL NOTIFICATIONS</p>
                                    <input type="radio" ></input>
                                    <label for="male">studio@csform.com</label>
                                </div>
                                <div className="item-4-input">

                                    <p>SUBSCRIBE</p>
                                    <div className="input-checkbox" >
                                        <input type="checkbox" checked="checked"></input>
                                        <label >Weekly Mail</label>
                                    </div>
                                    <div className="input-checkbox">
                                        <input type="checkbox" ></input>
                                        <label >Daily E-Mail</label>
                                    </div>
                                    <div className="input-button">

                                        <button className="loginbtn-input">UPDATE</button>
                                    </div>

                                </div>
                            </div>
                            <div className="row menu-item item-5">
                                <div className="item-header">
                                    <p className="item-titlle" >Notifications</p>
                                    <a className="item-icon" href="/">
                                        <img src={More} alt=""/>
                                    </a>
                                </div>
                                <div className="item-5-notif">
                                    <div className="item-5-notif-item">
                                        <div className="item-5-notif-circle">

                                            <div className="circle circle-c-1"></div>
                                        </div>
                                        <div className="item-5-notif-img">
                                            <img src={User1} alt=""/>
                                        </div>
                                        <div className="item-5-notif-text">
                                            <div className="item-5-notif-text1">
                                                <p>The Quick Brown Fox Jumps</p>
                                            </div>
                                            <div className="item-5-notif-text2">
                                                <p>Lorem Ipsum is simply dummy text of…</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="item-5-notif">
                                    <div className="item-5-notif-item">
                                        <div className="item-5-notif-circle">

                                            <div className="circle circle-c-2"></div>
                                        </div>
                                        <div className="item-5-notif-img">
                                            <img src={User2} alt=""/>
                                        </div>
                                        <div className="item-5-notif-text">
                                            <div className="item-5-notif-text1">
                                                <p>Over The Lazy Dog</p>
                                            </div>
                                            <div className="item-5-notif-text2">
                                                <p>Lorem Ipsum is simply dummy text of…</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="item-5-notif">
                                    <div className="item-5-notif-item">
                                        <div className="item-5-notif-circle">

                                            <div className="circle circle-c-3"></div>
                                        </div>
                                        <div className="item-5-notif-img">
                                            <img src={User3} alt=""/>
                                        </div>
                                        <div className="item-5-notif-text">
                                            <div className="item-5-notif-text1">
                                                <p>The Quick Brown Fox</p>
                                            </div>
                                            <div className="item-5-notif-text2">
                                                <p>Lorem Ipsum is simply dummy text of…</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row menu-item item-6">
                                <div className="item-header">
                                    <p className="item-titlle" >News Statistics</p>
                                    <a className="item-icon" href="/">
                                        <img src={More} alt=""/>
                                    </a>


                                </div>
                                <div className=" chart">
                                    <Bar
                                        data={state2}
                                        options={{
                                            cutout: 10,
                                            title: {
                                                display: true,
                                                text: 'Average Rainfall per month',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            },
                                            scales: {
                                                xAxes: [{
                                                    gridLines: {
                                                        color: "rgba(0, 0, 0, 0)",
                                                    }
                                                }],
                                                yAxes: [{
                                                    gridLines: {
                                                        color: "rgba(0, 0, 0, 0)",
                                                    }
                                                }]
                                            }
                                        }}
                                    />
                                </div>
                                <div className="chartinfo">
                                    <div className="chartinfo-item">
                                        <div className="chartinfo-circles">

                                            <div className="chartinfo-circle circle circle-c-1-1"></div>
                                        </div>
                                        <div className="chartinfo-text1">
                                            <p>46</p>
                                        </div>
                                        <div className="chartinfo-text2">
                                            <p>sport</p>
                                        </div>
                                    </div>
                                    <div className="chartinfo-item">
                                        <div className="chartinfo-circles">

                                            <div className="chartinfo-circle circle circle-c-1-2"></div>
                                        </div>
                                        <div className="chartinfo-text1">
                                            <p>46</p>
                                        </div>
                                        <div className="chartinfo-text2">
                                            <p>sport</p>
                                        </div>
                                    </div>
                                    <div className="chartinfo-item">
                                        <div className="chartinfo-circles">

                                            <div className="chartinfo-circle circle circle-c-1-3"></div>
                                        </div>
                                        <div className="chartinfo-text1">
                                            <p>46</p>
                                        </div>
                                        <div className="chartinfo-text2">
                                            <p>sport</p>
                                        </div>
                                    </div>
                                    <div className="chartinfo-item">
                                        <div className="chartinfo-circles">

                                            <div className="chartinfo-circle circle circle-c-1-4"></div>
                                        </div>
                                        <div className="chartinfo-text1">
                                            <p>46</p>
                                        </div>
                                        <div className="chartinfo-text2">
                                            <p>sport</p>
                                        </div>
                                    </div>


                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
