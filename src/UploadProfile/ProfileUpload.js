import { ethers } from 'ethers'
import React, {useState, useEffect, useContext } from 'react'
import { ProfileABI, ProfileContract } from '../Constants/Profile';
import { AppContext } from '../Context/AppContext';
import {NFTStorage} from 'nft.storage'

import '../css/ProfileUpload.css'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFhNWNiQTlFYkQwRTcxZWE4NTA0Zjk5NGE0MkNBOUE3MWRlQTkwZTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDM5NDEyMjQxOSwibmFtZSI6IkRUd2l0dGVyLTEifQ.0N-3jYVHOy1etZJxQ9jSm_Pk34h9RVmTpSSO2H_XnX0'

function ProfileUpload() {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractInstantce = new ethers.Contract(ProfileContract, ProfileABI,signer); 

    const [uploadFile ,setUploadFile] = useState()
    const [metaDataURL, setMetaDataURl] = useState()
    const [imageView, setImageView] = useState();
    const [tweetData, setTweetData]= useState()
//   const {account} = useContext(AppContext)
    const account = useContext(AppContext);

    const uploadNFTContent = async(inputFile)  =>{
        const nftStorage = new NFTStorage({token: API_KEY,})
    
        try {
            const metaData = await nftStorage.store({
                name:inputFile.name,
                description: `Profile Image ${account}`,
                image:inputFile
                
            });
    
            setMetaDataURl(getIPFSGatewayURL(metaData.url));
            console.log("Metadata:- ", metaData);
            previewNFT(metaData)
            MetaTrx(metaData)
            return metaData
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
      const handleFileUpload= async(event) =>{
        event.preventDefault()
        setUploadFile(event.target.files[0])
      }
      
      const MetaTrx = async(metaData) =>{
        // It's working properly.
            const mintProfile = await contractInstantce.MintProfile(getIPFSGatewayURL(metaData.url));
            await mintProfile.wait()
            window.alert("Profile Image uploaded :)")
      }
      const mintNFTToken = async(event , uploadedFile) =>{
        event.preventDefault()
        const metadata = await uploadNFTContent(uploadFile)
    
      }


  return (
    <>
              <h3>Create Profile</h3>
         <div className='btn'>
          <form className='form'>
              <label htmlFor="chooseFile"> Upload Profile Img
              <input type="file" id='chooseFile' onChange={handleFileUpload}/>
              </label>
              <br />
              {/* <button onClick={e=>mintNFTToken(e, uploadedFile)}>Mint NFT</button> */}
              <button className='mintBtn' onClick={mintNFTToken}>Mint Profile</button>
              {/* <button onClick={getProfileURL}>Get Profile</button> */}

              
          </form>
      </div>
    </>
  )
}

export default ProfileUpload