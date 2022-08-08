import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./Tweetbox.css"

function Tweetbox() {
  return (
    <div className='tweetBox'>

        <form>
            <div className="tweetBox_input">

                <Avatar></Avatar>  
                <input placeholder="What's happing?" type="text" />  
            </div>
        <input className='tweetBox_imageInput' placeholder='Enter Image URL' type="text"/>

            <Button className='tweetBox_tweetButton'>Tweet</Button>
        </form>

    </div>
  )
}

export default Tweetbox