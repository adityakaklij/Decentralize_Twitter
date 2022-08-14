import { Avatar, Button } from '@mui/material'
import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from './Context/AppContext'
import "./css/Tweetbox.css"
import db from './Firebase/firebase1'
import svgString from './identicons/icons.mjs'

import {NFTStorage , Blob} from 'nft.storage'
import { ethers } from 'ethers'
import { ABI, contractAddress } from './Constants/data'
import { ProfileContract, ProfileABI } from './Constants/Profile'


const APIKEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..0N-3jYVHOy1etZJxQ9jSm_Pk34h9RVmTpSSO2H_XnX0'
function Tweetbox() {

  const [uploadFile ,setUploadFile] = useState(null)
  const [metaDataURL, setMetaDataURl] = useState()
  const [imageView, setImageView] = useState();

  const[tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const[profileIMG, setProfileIMG] = useState()


  const account = useContext(AppContext)

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractInstance = new ethers.Contract(contractAddress,ABI,signer)

  // Function to send the data to the FireBase, Not in used Now.
  const sendTweet = (e)=>{
      // Prevents from refreshing the page when we submit the form.
      e.preventDefault();
      db.collection("posts").add({
        // displayName: "User 1",
        // displayName: add,
        displayName: `${account.slice(0,3)}..${account.slice(account.length -3)}`,
        userName: `${account.slice(0,3)}..${account.slice(account.length -3)}`,
        verified: false,
        text: tweetMessage,
        image: tweetImage,
        avatar: svgString
        // avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ETPUM3G6l9Pe3VTHbMbx_yfLk5KqZ_kU9w&usqp=CAU"
      })

  }

  const uploadNFTContent = async( inputFile) =>{
    const nftStorage = new NFTStorage({token:APIKEY})

    try {
      if(uploadFile === null){
        const someData = new Blob(["Data Without image"])
        const { car } = await NFTStorage.encodeBlob(someData)
        const metaData = await nftStorage.store({
          name:account,
          description: tweetMessage,
          image:someData// The link will end with /blob
          
      });
      setMetaDataURl(getIPFSGatewayURL(metaData.url));
      // console.log("Metadata:- ", metaData);
      previewNFT(metaData)
      MetaTrx(metaData)
      // console.log(metaData)
      return metaData
      }

      else{
        const metaData = await nftStorage.store({
          name:account,
          description: tweetMessage,
          image:inputFile  
      });

      setMetaDataURl(getIPFSGatewayURL(metaData.url));
      // console.log("Metadata:- ", metaData);
      previewNFT(metaData)
      MetaTrx(metaData)
      return metaData
      }
        
    } catch (error) {
        alert(error)
    }
  }
  const getIPFSGatewayURL = (ipfsURL)=>{
    let urlArray = ipfsURL.split("/");
    let ipfsGateWayURL = `https://${urlArray[2]}.ipfs.dweb.link/${urlArray[3]}`;
    return ipfsGateWayURL;
}
  const previewNFT = (metaData) =>{
      let imgViewString = getIPFSGatewayURL(metaData.data.image.pathname);;
      setImageView(imgViewString);
      setMetaDataURl(getIPFSGatewayURL(metaData.url));
  }

  const MetaTrx = async(metaData) =>{
    // It's working properly.
        const createtweet = await contractInstance.createTweet(getIPFSGatewayURL(metaData.url));
        await createtweet.wait()
        window.alert("Tweet created :)")
  }

  const sendTweetIPFS = async(e) =>{
    e.preventDefault();
    const metadata = await uploadNFTContent(uploadFile)

  }

  const handleFileUpload= async(event) =>{
    event.preventDefault()
    setImgSelect("Img Selected !")
    setUploadFile(event.target.files[0])

  }

  async function getProfileURL(e){
    // e.preventDefault()
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const ProvidercontractInstance = new ethers.Contract(ProfileContract,ProfileABI,provider)
        const checkProfile = await ProvidercontractInstance.nftCount(account)

        if(checkProfile.toString() == 1){

          const getId = await ProvidercontractInstance.addressIdMapping(account);
          const profileMetada = await ProvidercontractInstance.tokenURI(getId)
          // console.log(getId.toString())
      
          // console.log(profileMetada)
          const profileImg = await fetch(profileMetada)
          const toJsonData = await profileImg.json()
          setProfileIMG(`https://ipfs.io/ipfs/${(toJsonData.image).slice(7)}`)
          // console.log("Image url = ", `https://ipfs.io/ipfs/${(toJsonData.image).slice(7)}`)
        }

        else{
          // console.log("No profile Image")
        }
           
    } catch (error) {
        alert(error)
    }
  }

  useEffect(() => {
    getProfileURL();
  }, [])

  const [imgSelect, setImgSelect]= useState("Select Img")
  return (
    <div className='tweetBox'>

        <form>
            <div className="tweetBox_input">

                <Avatar src={profileIMG}/>
                <input 
                    type="text"
                    placeholder="What's happing?" 
                    onChange={(e) => {setTweetMessage(e.target.value)}}
                    value={tweetMessage}
                     
                    />  
            </div>
                {/* <input className='tweetBox_imageInput' 
                      onChange={(e) => setTweetImage(e.target.value)}
                      value={tweetImage}
                      placeholder='Enter Image URL' type="text"/> */}

                      <label htmlFor="inputTag">{imgSelect}
                        <input type="file" id='inputTag' onChange={handleFileUpload}/>
                      </label>

            <Button 
                  type = "submit" className='tweetBox_tweetButton'
                  // onClick={sendTweet}
                  onClick={sendTweetIPFS}
                  >Tweet
                        
            </Button>

        </form>

    </div>
  )
}

export default Tweetbox