import React from 'react'
import './css/Sidebar.css'

import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Button } from '@mui/material';

function Sidebar() {

  return (

    <div className="sidebar">
        <TwitterIcon className='sidebar_twitterIcon'/>

        <a href='/'>

        <SidebarOption active Icon={TwitterIcon}  text="Home" />
        </a>
        <SidebarOption Icon={TagIcon} text="Explore" />
        <SidebarOption Icon={NotificationsIcon} text="Notification" />
        <SidebarOption Icon={MessageIcon} text="Message" />
        <SidebarOption Icon={BookmarkIcon} text="Bookmarks"/>

        <a href="/ProfileUpload">
        <SidebarOption Icon={PersonIcon} text="Profile" />
        </a>
        <SidebarOption Icon={SettingsIcon} text="Setting" />
        {/* Tweet Button */}
         
         <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>

    </div>

  )
}

export default Sidebar