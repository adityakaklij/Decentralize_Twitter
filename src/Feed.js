import React, { useEffect, useState, useContext } from 'react'
import './css/Feed.css'
import Post from './Post'
import Tweetbox from './Tweetbox'
import db from './Firebase/firebase1'
import { AppContext } from './Context/AppContext'

import { ABI, contractAddress } from './Constants/data'
import { ProfileContract, ProfileABI } from './Constants/Profile'
import { ethers } from 'ethers'

function Feed() {

  const account = useContext(AppContext)
  const [inputData , setInputData] = useState()
  const [posts , setPosts] = useState([])
  const [keyCounter, setKeyCounter] = useState()// Might not very useful.

  const [checkImg, setCheckImg]= useState()


  const[post , setPost] = useState([]); // Creating empty array of the posts.
  

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractInstance = new ethers.Contract(contractAddress, ABI, provider);

  useEffect(() => {
    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPost(snapshot.docs.map((doc) => doc.data()))
    // );
  }, []);

  let arr1 = []
  const getBtn = async() =>{
    const counter = await contractInstance.counter()
    console.log( "Counter is :- ",counter.toString())
    setKeyCounter(counter.toString())

    const tweetMapping = await contractInstance.tweetMapping(0)
    console.log("Mapping 0 :- " ,tweetMapping);

    for(let i = 0; i < counter.toString(); i ++){

        const tweetStruct = await contractInstance.userArr(i);

        const tokenMetada = await fetch(tweetStruct.str)
        const jsonData = await tokenMetada.json()
        console.log("Tweet struct NAME:- ", jsonData.name)
        console.log("Tweet struct IMAGE:- ", `https://ipfs.io/ipfs/${(jsonData.image).slice(7)}`)
        console.log("Tweet struct DESCRIPTION:- ", jsonData.description)
        // arr1.push([jsonData.name ,jsonData.description, jsonData.image])
        let sample = `https://ipfs.io/ipfs/${(jsonData.image).slice(7)}`
        arr1.push([jsonData.name ,jsonData.description,sample ])

        // arr1.push(tweetStruct) // It's a old, directly fetching from the blockchain  

        // console.log("UseState posts",posts.str)
        // console.log( `User address ${i}:- ` , tweetStruct.userAddres.toString())
        // console.log(`User Array string ${i}:- `, tweetStruct.str);
    }
    setPosts(arr1.reverse());
    console.log("Arr1 is", arr1)
    setCheckImg("arr1 3 of 2",arr1[3][2])
  }
  const dumy = "Dumy"

  async function getProfileURL(e){
    e.preventDefault()

    try {
        const ProvidercontractInstance = new ethers.Contract(ProfileContract,ProfileABI,provider)
        const getId = await ProvidercontractInstance.addressIdMapping(account);
        const profileMetada = await ProvidercontractInstance.tokenURI(getId)
        console.log(getId.toString())
    
        console.log(profileMetada)
        const profileImg = await fetch(profileMetada)
        const toJsonData = await profileImg.json()
        console.log("Image url = ", `https://ipfs.io/ipfs/${(toJsonData.image).slice(7)}`)

           
    } catch (error) {
        alert(error)
    }
  }

  return (
    <div className='feed'>

        {/* Head */}
        <div className="feed_header">
            <h2>Home</h2>
        </div>
        {/* Tweet Box */}
        <Tweetbox/>
        
        {/* Posts */}
        <button onClick={getBtn}>Get Tweets</button>
        <button onClick={getProfileURL}>Get Profile</button>
        {posts.map( posts => (
          <Post
          // key = {post[1]}
            // displayName={post.displayName}
            // displayName={posts[0].slice(0,3)}
            displayName={`${posts[0].slice(0,3)}..${posts[0].slice(-3)}`}
            // userName={post.userName}
            userName={dumy}
            verified={true}
            // text={post.text}
            text={posts[1]}
            // avatar={post.avatar}
            // avatar={posts[2]}
            avatar="https://ipfs.io/ipfs/bafybeignermswfazuhctl6wwtlvird676ylli3vor7k7em7eqnkm6rjl2e/1_G9UfaUBS_VqtFILMe37fZw.jpeg"
            // image={post.image}
            // image={async ()=>{await fetch(posts[2])}}
            image={posts[2]}
            
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