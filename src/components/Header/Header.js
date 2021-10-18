import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../Images/Logo/cover.png'
import Banner from '../Banner/Banner';
const Header = () => {
    return (
        <div>
            <div className="menubar-container container">
                <div className="menubar">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="banner">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <ul className="items d-flex align-items-end justify-content-end me-2">
                                <li className="item"><NavLink to="/home">Home</NavLink></li>
                                <li className="item"><NavLink to="/login">Login</NavLink></li>
                                <li className="item"><NavLink to="/services">Services</NavLink></li>
                                <li className="item"><NavLink to="/contact">Contact</NavLink></li>
                                <li className="item"><NavLink to="/appointment">Appointment</NavLink></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Header;