import React, { Component } from 'react';
import home from '../../Images/house.png';
import like from '../../Images/like-1.png';
import placeHolder from '../../Images/placeholder-2.png';
import starkCoreLogo from '../../Images/45134462.png';
import SwButton from './switchButton/switchButton';
import './leftComponent.css';

class LeftComponent extends Component {
    render(){
        return(
            <section className='sidebar-component'> 
                <div className="sidebar-component__logo">
                    <img className='sidebar-component__image'></img>
                </div>
                <div className='sidebar-component__switchs'>
                </div> 
                <div className="sidebar-component__status-section">
                </div>
            </section>
        )
    }
}

export default LeftComponent;