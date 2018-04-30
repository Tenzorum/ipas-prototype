import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import '../App.css';
import QRCode from 'qrcode.react';
import axios from 'axios';
import io from 'socket.io-client';

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/rqmgop6P5BDFqz6yfGla'));


const socket = io('https://backend-nrmzuwwswb.now.sh/');


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      height: 0,
      width: 0,
      pageSize: 18,
      margin: 10,
      qrCodeData: '',
      viewQRCode: false,
      status: null,
      msg: '',
      socketId: null,
      viewSignInButton: true,
      loggedIn: false,
      phoneUid: '',
      myPublicAddress: '',
      senderPublicAddress: '',
      ethBalance: 0,
      gzeBalance: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    let pageSize = this._getItemCountForView();
    this.setState({pageSize});

    web3.eth.subscribe('logs', {
      address: '0x37386A1c592Ad2f1CafFdc929805aF78C71b1CE7',
    }, function(error, result){
      if (!error)
        console.log('REESULT: ', result);
    });

    socket.on('connect', (msg) => {
      console.log('connected');
      this.setState({status: 'Connected'})
    });

    socket.on('msg', (message) => {
      let msg, socketId;
      if (message) {
        message = JSON.parse(message)
        msg = message.msg;
        socketId = message.socketId;
      }
      console.log(msg)
      console.log(socketId)
      console.log(message);
      this.setState({msg, socketId, qrCodeData: `${msg}.${socketId}`});
    });

    socket.on('login', (msg) => {
      console.log('MSG: ', msg);
      this.setState({status: `LOGGED IN AS ${JSON.parse(msg).wallet}`, myPublicAddress: JSON.parse(msg).wallet, viewQRCode: false, loggedIn: true, phoneUid: JSON.parse(msg).uid})
    });
    socket.on('disconnect', (msg) => {
      this.setState({status: 'Disconnected'})
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  _getData = async () => {
    const res = await axios.get('https://backend-nrmzuwwswb.now.sh/ping');
    console.log('res', res);
    // this.setState({qrCodeData: res.data})
  };

  _this = this;

  _getGzeAddress = () => {
    const addr = '0x37386A1c592Ad2f1CafFdc929805aF78C71b1CE7';
    const contractAddr = '0x277eC7EDAb696F577551c7BfB70489455c1371eb';
    const tknAddress = (addr).substring(2);
    const contractData = ('0x70a08231000000000000000000000000' + tknAddress);

    web3.eth.call({
      to: contractAddr,
      data: contractData
    }, (err, result) => {
      if (result) {
        let tokens = web3.utils.toBN(result).toString();
        console.log('Tokens Owned: ' + web3.utils.fromWei(tokens, 'ether'));
        const gzeTokens = web3.utils.fromWei(tokens, 'ether')
        this.setState({gzeBalance: gzeTokens})
      }
      else {
        console.log(err); // Dump errors here
      }
    });
  };

  _getEthAddress = () => {
    web3.eth.getBalance('0x37386A1c592Ad2f1CafFdc929805aF78C71b1CE7').then(ethBalance => this.setState({ethBalance: ethBalance/10e17}))
    this._getGzeAddress();
  };

  _sendTransaction = () => {
    console.log('SENDING');
    const {senderPublicAddress, amount, phoneUid} = this.state;
    socket.emit('sendNotification', { payload: { publicAddress: '0xd4a0d9531Bf28C26869C526b2cAd2F2eB77D3844', amount: 0.0001 }}, phoneUid );
  }


  render() {
    const { qrCodeData, viewQRCode, viewSignInButton, status, loggedIn, myPublicAddress, ethBalance } = this.state;
    const { currentPage, height, width, pageSize } = this.state;
    console.log('CurrentPage: ', currentPage);
    console.log('Height: ',  height);
    console.log('Width: ', width);
    console.log('PageSize: ', pageSize);
    let className;
    myPublicAddress && !ethBalance ? this._getEthAddress() : null;

    return(
      <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <div className='wrapper'>
          { viewSignInButton && <button style={{borderRadius: 6, backgroundColor: '#00D4FA', fontSize: 20, color: 'white', borderWidth: 0, height: 40, width: 200}} onClick={() => this.setState({viewQRCode: !viewQRCode, viewSignInButton: !viewSignInButton})}>Login</button> }
          <div style={{marginTop: 20}}>
            { loggedIn && this.props.history.push({
              pathname: '/profile',
              search: '?query=',
              state: { data: 'Logged In' }
            })}
            { viewQRCode && qrCodeData && <div style={{ backgroundColor: 'white', height: 400, width: 400, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
              <QRCode
                size={300}
                fgColor='#00D4FA'
                bgColor="transparent"
                value={this.state.qrCodeData}
              />
            </div> }
          </div>
        </div>
      </div>
      );
  }
}

const Login = withRouter(props => <LoginScreen {...props} />)

export default Login




