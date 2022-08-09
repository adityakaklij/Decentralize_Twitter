// import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Verified } from '@mui/icons-material'
import {  Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./css/Post.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {

  return (
    <div className='post'>
        <div className="post_avatar">
            <Avatar src = {avatar}/>
        </div>

        <div className="post_body">
            <div className="post_header">

                <div className="post_headerText">
                    <h3>
                        {displayName} {" "}
                        <span > { verified && <Verified className='post_badge'/>} {" "}</span>
                        <span className='post_headerSpecial'>@{userName}</span>
                    </h3>
                </div>

                    {/* It's a tweet text data. */}
                <div className="post_headerDescription">
                    {text}
                    
                </div>
                
                <img src={image} alt="Image by user" />
                
                {/* interaction icons */}
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize = "small"/>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Post