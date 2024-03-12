import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { IoHome } from "react-icons/io5"
import { CiYoutube } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';


function Topnav(){
return(
    <div className="topnav">
    <div className='firstnav'>
    <FaFacebook className='fbicon'/>
    
    <CiSearch className='searchiconofnav' />
    <input type="text" placeholder='search facebook'className='searchbar'></input>
 
    </div>
    <div className='middlenav'>
        
    <Link to='/'><IoHome className='homeicon' /></Link>
     <Link to='/components/Vediopage'><CiYoutube className='vedioicon' /></Link>
     <Link to='/components/grouppage'><MdGroups className='friendsicon' /></Link>
     <Link to='/components/cshoppage'><CiShop className='cishop' /></Link>
    </div>
    <div className='lastnav'>
    <TbGridDots className='griddot' />
    <AiFillMessage className='messageicon' />
    <IoMdNotifications className='notifyicon' />
    <img  className='profile' src='\img27.jpg' alt='profile picture'></img>
    </div>
    
 </div>
);
}
export default Topnav;