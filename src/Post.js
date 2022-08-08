// import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Verified } from '@mui/icons-material'
import {  Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
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
            <Avatar/>
        </div>

        <div className="post_body">
            <div className="post_header">
                <div className="post_headerText">
                    <h3>
                        Aditya K {" "}
                        <span > <Verified className='post_badge'/></span>
                        <span className='post_headerSpecial'>@adityak</span>
                    </h3>
                </div>
                <div className="post_headerDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestias.
                    
                </div>
                
                {/* <img src="./Assets/img1" alt="ABC img" /> */}
                <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="ABC img" />
                
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