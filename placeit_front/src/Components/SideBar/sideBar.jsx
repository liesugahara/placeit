import React, { Component } from 'react';
import '../SideBar/sideBar.css';
const SideBar = () => {
    return (
        // <div className="side-bar">
        //  
        //   <header className="header" role="banner">
        //     <h1 className="logo">
        //         <a href="#"><span id="title">Place</span>It</a>
        //     </h1>
        //     <div className="nav-wrap">
        //         <nav className="main-nav" role="navigation">
        //         <ul className="unstyled list-hover-slide">
        //             <li><a href="#"> <i className="material-icons small valign">today</i><span> Reservas</span></a></li>
        //             <li><a href="#"><i className="material-icons small valign">theaters</i>Películas</a></li>
        //         </ul>
        //         </nav>
        //     </div>
        //   </header>
        //   </div>



        <div className="sidebar">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <h1 className="logo">
                <a href="#"><span id="title">Place</span>It</a>
            </h1>


            <a id="reservas" href="#"> <i className="material-icons small valign">today</i>Reservas</a>
            <a id="peliculas" href="#"><i className="material-icons small valign">theaters</i>Películas</a>

        </div>



    );
}

export default SideBar;