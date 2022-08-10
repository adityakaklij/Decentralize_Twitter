import React, { useEffect, useState } from 'react'
import './css/Feed.css'
import Post from './Post'
import Tweetbox from './Tweetbox'

// import db from './Firebase/firebase.js'
import db from './Firebase/firebase1'

function Feed() {

  const[post , setPost] = useState([]); // Creating empty array of the posts.

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='feed'>

        {/* Head */}
        <div className="feed_header">
            <h2>Home</h2>
        </div>
        {/* Tweet Box */}
        <Tweetbox/>
        
        {/* Posts */}

        {post.map( post => (
          <Post
            displayName={post.displayName}
            // displayName={}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}

        {/* With fireBase. */}
        {/* <Post 
            displayName="Aditya K" 
            userName="adityakaklij"
            verified = {true}  
            text = "Making this tweet using props"
            image="https://st2.depositphotos.com/1006472/5665/i/600/depositphotos_56658541-stock-photo-faceless-hooded-anonymous-computer-hacker.jpg" // Image url by the user
            avatar = 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg' // user profile image
        /> */}

    </div>
  )
}

export default Feed