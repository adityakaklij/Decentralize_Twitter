import { useEffect, useState } from 'react';
import './css/App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false)
  const [account, setAccount] = useState(null)

  useEffect( () =>{
    if(window.ethereum){
      setIsWalletInstalled(true);
    }
  },[]);

    const connectWallet = async() =>{
        window.ethereum.request( {method: "eth_requestAccounts"})
        .then((accounts) => {
          setAccount(accounts[0]);
        }).catch( (e) => {
          alert(e)
        })
    }

    if(account === null){
      return (
        <div className="App">
          {
            isWalletInstalled ? (<button onClick={connectWallet} >Connect</button>) : (
              <p>Please Install Metamask Wallet first :) </p>
            )
          }
        </div>
      )
    }

    else{

      return (
        <div className="app">

          {/* SideBar */}
            <Sidebar/>


          {/* Feed */}
          <Feed/>

          {/* Widges */}
          <Widgets/>
        
        </div>
      );
    }
}

export default App;
