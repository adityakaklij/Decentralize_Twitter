import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./css/Tweetbox.css"
import db from './Firebase/firebase1'
import svgString from './identicons/icons.mjs'

function Tweetbox() {

  const[tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e)=>{
      // Prevents from refreshing the page when we submit the form.
      e.preventDefault();
      db.collection("posts").add({
        displayName: "User 1",
        userName: "user1",
        verified: false,
        text: tweetMessage,
        image: tweetImage,
        avatar: svgString
        // avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ETPUM3G6l9Pe3VTHbMbx_yfLk5KqZ_kU9w&usqp=CAU"
      })

  }
  return (
    <div className='tweetBox'>

        <form>
            <div className="tweetBox_input">

                <Avatar src=""/>

                <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happing?" 
                    type="text" 
                    />  
            </div>
                <input className='tweetBox_imageInput' 
                      onChange={(e) => setTweetImage(e.target.value)}
                      value={tweetImage}
                      placeholder='Enter Image URL' type="text"/>

            <Button 
                  type = "submit" className='tweetBox_tweetButton'
                  onClick={sendTweet}
                  >Tweet
                        
            </Button>

        </form>

    </div>
  )
}

export default Tweetbox