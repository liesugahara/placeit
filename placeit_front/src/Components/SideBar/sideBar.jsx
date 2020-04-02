import React, { Component } from 'react';
import '../SideBar/sideBar.css';
function SideBar() {
    return (
        <div className="sidebar">
            <h1 className="logo">
                <a href="#"><span id="title">Place</span>It</a>
            </h1>


            <a id="reservas" href="#"> <i className="material-icons small valign">today</i>Reservas</a>
            <a id="peliculas" href="#"><i className="material-icons small valign">theaters</i>Películas</a>

        </div>



    );
}

export default SideBar;