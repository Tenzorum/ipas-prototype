import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'

import Olympus from '../assets/olympus_labs_background.png'
import Nebulas from '../assets/nebulas_background.png'
import GazeCoin from '../assets/gaze_coin_background.png'
import Kyber from '../assets/kyber_network_background.png'
import Balance from '../assets/balance_background.png'
import Celcius from '../assets/celsius_network_background.png'
import WebOfTrustBackground from '../assets/web_trust_background.png'
import Warning from '../assets/warning_logo.png'
import InviteButton from '../assets/invite_button.png'

let MainWithRoutes;
class Main extends Component {

  render() {
    let {pathname} = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'row', width: '75%', backgroundColor: '#273042', height: '100%', padding: 40}}>
        <div style={{display: 'flex', width: '70%', height: '100%', flexDirection: 'column', margin: 10}}>
          <div style={{display: 'flex', height: '20%', width: '100%'}}>
            <img style={{height: 100}} src={require('../assets/avatar.png')} alt="avatar"/>
            <div>
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                <h3 style={{color: 'white'}}>Satoshi </h3>
                <h3 style={{color: '#00FFAE'}}>Pereira</h3>
              </div>
              <h1 style={{color: 'white'}}>Momentum Key Manager</h1>
            </div>
          </div>
          <div style={{display: 'flex', height: '80%', width: '100%', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%', resizeMode: 'contain', height: 100, margin: 10, padding: 10, backgroundImage: `url(${Olympus})`, backgroundSize: 330, backgroundRepeat: 'no-repeat', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <p style={{fontSize: 15}}>Olympus Labs</p>
                  <p style={{fontSize: 15}}>Cryptocurrency Investment Portal</p>
                   {/*<p style={{fontSize: 15}}>[MOT $0.42]</p>*/}
                </div>
                <img src={require('../assets/olympus_logo.png')} style={{height: 60}} alt="olympus logo"/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%', resizeMode: 'contain', height: 100, margin: 10, padding: 10, backgroundImage: `url(${Nebulas})`, backgroundSize: 330, backgroundRepeat: 'no-repeat', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Nebulas</p>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Decentralized Search Framework</p>
                  {/*<p style={{display: 'flex', fontSize: 15, color: 'white'}}>[NAS $8.15]</p>*/}
                </div>
                <img src={require('../assets/nebulas_logo.png')} style={{height: 60}} alt="olympus logo"/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%', resizeMode: 'contain', height: 100, margin: 10, padding: 10, backgroundImage: `url(${GazeCoin})`, backgroundSize: 330, backgroundRepeat: 'no-repeat', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Gaze Coin</p>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Blockchain Virtual Reality</p>
                  {/*<p style={{display: 'flex', fontSize: 15, color: 'white'}}>[MOT $0.42]</p>*/}
                </div>
                <div/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%', resizeMode: 'contain', height: 100, margin: 10, padding: 10, backgroundImage: `url(${Kyber})`, backgroundSize: 330, backgroundRepeat: 'no-repeat', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Kyber Network</p>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Next generation decentralized exchange</p>
                  {/*<p style={{display: 'flex', fontSize: 15, color: 'white'}}>[KNC $2.69]</p>*/}
                </div>
                <img src={require('../assets/kyber_logo.png')} style={{height: 60}} alt="olympus logo"/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%', resizeMode: 'contain', height: 100, margin: 10, padding: 10, backgroundImage: `url(${Balance})`, backgroundSize: 330, backgroundRepeat: 'no-repeat', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Balance</p>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>A Mobile Wallet for ERC 20 Tokens</p>
                  {/*<p style={{display: 'flex', fontSize: 15, color: 'white'}}>[MOT $0.42]</p>*/}
                </div>
                <img src={require('../assets/balance_logo.png')} style={{height: 60}} alt="olympus logo"/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '50%', resizeMode: 'contain', height: 100, margin: 10, padding: 10, backgroundImage: `url(${Celcius})`, backgroundSize: 330, backgroundRepeat: 'no-repeat', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Celcius Network</p>
                  <p style={{display: 'flex', fontSize: 15, color: 'white'}}>Deposit Coins. Borrow Dollars. Earn Interest. </p>
                  {/*<p style={{display: 'flex', fontSize: 15, color: 'white'}}>[MOT $0.42]</p>*/}
                </div>
                <img src={require('../assets/celcius_logo.png')} style={{height: 60}} alt="olympus logo"/>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '30%', height: '100%', alignItems: 'space-around', justifyContent: 'space-around', margin: 10}}>
          <div style={{display: 'flex', height: 350, flexDirection: 'column', backgroundColor: '#425269', borderRadius: 5, width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
              <h4 style={{color: 'white',}}>Web Of Trust</h4>
              <p style={{color: '#00FFAE',}}>show all</p>
            </div>
            <p style={{display: 'flex', color: 'white'}}>Add people to your Web of Trust to activate the Recovery Protocol</p>
            <div style={{display: 'flex', width: '75%', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{display: 'flex', height: 50, flexDirection: 'column', backgroundColor: '#7F90AD', backgroundRepeat: 'no-repeat', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                <p style={{color: '#00D4FA', fontSize: 20}}>INVITE</p>
              </div>
            </div>
            <img src={require('../assets/warning_logo.png')} style={{height: 100, resizeMode: 'contain'}} alt="warning"/>
            <div style={{ display:'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <img src={require('../assets/left_arrow.png')} style={{height: 20, resizeMode: 'contain', paddingRight: 10}} alt=""/>
                <img src={require('../assets/right_arrow.png')} style={{height: 20, resizeMode: 'contain'}} alt=""/>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', height: '50%', width: '100%', }}>
            <div  style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>TENZ</p>
                <p style={{display: 'flex', color: 'white'}}>+41%</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>MOT</p>
                <p style={{display: 'flex', color: 'white'}}>+31%</p>
              </div>
            </div>
            <div  style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>TENZ</p>
                <p style={{display: 'flex', color: 'white'}}>+41%</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>MOT</p>
                <p style={{display: 'flex', color: 'white'}}>+31%</p>
              </div>
            </div>
            <div  style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>TENZ</p>
                <p style={{display: 'flex', color: 'white'}}>+41%</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>MOT</p>
                <p style={{display: 'flex', color: 'white'}}>+31%</p>
              </div>
            </div>
            <div  style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>TENZ</p>
                <p style={{display: 'flex', color: 'white'}}>+41%</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#424D62', marginTop: 5, marginBottom: 5, borderRadius: 6, width: 120, height: 40, alignItems: 'center', justifyContent: 'space-around' }}>
                <p style={{display: 'flex', color: 'white'}}>MOT</p>
                <p style={{display: 'flex', color: 'white'}}>+31%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainWithRoutes = withRouter(props => <Main {...props}/>);