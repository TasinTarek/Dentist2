import React from 'react';
import { Link } from 'react-router-dom';
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
                                <li className="item"><Link to="/home">Home</Link></li>
                                <li className="item"><Link to="/login">Login</Link></li>
                                <li className="item"><Link to="/services">Services</Link></li>
                                <li className="item"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Header;