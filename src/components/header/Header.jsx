import React from 'react'

import {FaBars} from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import './_header.scss';


const Header = ({handleToggleSidebar}) => {
    return (
        <div className="header">
            <FaBars className="header__menu" size={25} onClick={() => handleToggleSidebar()} />
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' className='header__logo' />
            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={25} />
                <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt='avatar' />
            </div>
        </div>
    )
}

export default Header
