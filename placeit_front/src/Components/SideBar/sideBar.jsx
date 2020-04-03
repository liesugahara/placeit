import React from 'react';
import '../SideBar/sideBar.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
// import Booking from '../Booking/booking';
import Bookings from '../Bookings/Bookings.jsx';
import App from '../../App';

function SideBar() {
    return (
        <div className="sidebar">
            <h1 className="logo">
                <a href="#"><span id="title">Place</span>It</a>
            </h1>

            <Link to="/reservas"> <i className="material-icons small valign">today</i>Reservas</Link>
            <Link to="/"> <i className="material-icons small valign">theaters</i>Home</Link>
            
        </div>



    );
}

export default SideBar;