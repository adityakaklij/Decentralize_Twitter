import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import "./css/Widgets.css"


function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets_input">
        <Search className='widgets_searchIcon'/>
        <input placeholder='"Search Tweet ' type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happining</h2>


        {/* From the twitter Embede Part   */}
        
        <TwitterTweetEmbed tweetId={'1555618663335886849'}></TwitterTweetEmbed>

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='adityakaklij'
          options={{height:400}}
        />

        <TwitterShareButton
          url={'https://degdango.xyz'}
          options = {{text:"get the updates form @adityakaklij",
          via: "adityakaklij"}}

        />
      </div>

    </div>
  )
}

export default Widgets