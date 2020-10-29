import React, { Component } from 'react';
import logo from './logo.svg';
import add from './add.svg';
import search from './search.svg';
import Myapp from './Myapp';
import './Myapp.css';


const Header = () => {
    return (<div>
        <header className="header">
        
            <img src={logo} className="logo" alt="logo" />

            <button className="button">
                <img src={add} className="add" alt="add" /> 
                New Post
            </button>
        
            <button type="submit" className="searchbar">
                <input type="text" className="input" placeholder="Images, #tags, @users oh my!    " />
                <img src={search} className="search" alt="search"/>
            </button>

            <button className="button1">Sign in</button>
        
            <button  className="button1">sign up</button>
        
        </header>
        </div>)
}

export default Header;