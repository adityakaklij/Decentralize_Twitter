import { useEffect, useState } from 'react';
import './css/App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {AppContext} from './Context/AppContext'

import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import ProfileUpload from './UploadProfile/ProfileUpload';


function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false)
  // const [isWalletInstalled, setIsWalletInstalled] = useState(true)
  const [account, setAccount] = useState(null)

  useEffect( () =>{
      if(window.ethereum){
        setIsWalletInstalled(true);
      connectWallet()
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
        <>
        <Router basename='/'>

          <AppContext.Provider value = {account}>
              <div className="app">


              {/* SideBar */}
                <Sidebar/>
            <Switch>
                <Route exact path='/'>
                  {/* Feed */}
                  <Feed/>
                  {/* Widges */}
                  <Widgets/>

                </Route>

                <Route path='/ProfileUpload'>

                  <ProfileUpload/>
                </Route>

                </Switch>

              
            
            </div>
        </AppContext.Provider>

        </Router>
        </>
      );
    }
}

export default App;