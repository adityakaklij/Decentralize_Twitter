import React from 'react'
import './Feed.css'
import Post from './Post'
import Tweetbox from './Tweetbox'

function Feed() {
  return (
    <div className='feed'>

        {/* Head */}
        <div className="feed_header">
            <h2>Home</h2>
        </div>
        {/* Tweet Box */}
        <Tweetbox/>
        
        {/* Posts */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        {/* Posts */}

    </div>
  )
}

export default Feed