import React from 'react';
import logo from './logo.png';
import './header.css';
import { RiHome2Fill } from 'react-icons/ri';
import { RiMessengerLine } from 'react-icons/ri';
import { CgAddR } from 'react-icons/cg';
import { TiCompass } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';


function Header() {
    return (
            <div className="header">
                <div className="header-content">
                <div className="header-logo">
                    <img src={logo} alt="" srcset="" />
                </div>

            <div className="header-search">
                <input type="text"  placeholder='Search' />
            </div>
            <div className="header-icons">
                <div className="icon">
            <RiHome2Fill />
            </div>
            <div className="icon">
            <RiMessengerLine />
            </div>
            <div className="icon">
            <CgAddR />
            </div>
            <div className="icon">
            <TiCompass />
            </div>
            <div className="icon">
            <AiOutlineHeart/>
            </div>
            <div className="icon">
            <CgProfile/>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Header;
