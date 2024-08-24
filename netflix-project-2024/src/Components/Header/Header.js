import React from 'react'
// import './headr.css';
import header from './header.css'
import NetflixLogo from "../../Assets/Images/Netflix.logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>

            <li><img src={NetflixLogo} alt="Netflix logo" width="100" /></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latests</li>
            <li>Mylist</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>


</div>

    </div>
  )
}

export default Header