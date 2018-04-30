import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, withRouter } from 'react-router-dom'
import './App.css';
import Main from './components/Main'
import Login from './components/LoginScreen'
let AppWithRoutes;

class App extends Component {

  render() {
    let { pathname } = this.props;
    return (
      <div className="App">
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20%', height: '100%', backgroundColor: '#1D2533', padding: 20}}>
          <div style={{display: 'flex', width: '50%', alignItems: 'center', justifyContent: 'center'}}>
            <Link to="/"><img style={{textDecoration: 'none' ,width: 100}} src={require('./assets/Tenz_logo.png')} alt=""/></Link>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <Link to="/profile" style={{textDecoration: 'none' ,marginBottom: 20}}><h3 style={{fontFamily: 'Arial', fontWeight: 100, color: 'white'}}>Profile</h3></Link>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <Link to="/key_manager" style={{textDecoration: 'none' ,marginBottom: 20}}><h3 style={{fontFamily: 'Arial', fontWeight: 100, color: 'white'}}>Key Manager</h3></Link>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <Link to="/multisig" style={{textDecoration: 'none' ,marginBottom: 20}}><h3 style={{fontFamily: 'Arial', fontWeight: 100, color: 'white'}}>Multi Sig Wallet</h3></Link>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <Link to="/endurance" style={{textDecoration: 'none' ,marginBottom: 20}}><h3 style={{fontFamily: 'Arial', fontWeight: 100, color: 'white'}}>Endurance Wallet</h3></Link>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <Link to="/chat" style={{textDecoration: 'none' ,marginBottom: 20}}><h3 style={{fontFamily: 'Arial', fontWeight: 100, color: 'white'}}>Chat</h3></Link>
          </div>
          <div style={{display: 'flex', width: '50%'}}>
            <Link to="/login" style={{textDecoration: 'none' ,marginBottom: 20}}><h3 style={{fontFamily: 'Arial', fontWeight: 100, color: 'white'}}>Settings</h3></Link>
          </div>

        </nav>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route exact path="/profile" component={Main} />
        <Route exact path="/key_manager" component={Main} />
        <Route exact path="/multisig" component={Main} />
        <Route exact path="/endurance" component={Main} />
        <Route exact path="/chat" component={Main} />
        <Route exact path="/settings" component={Main} />
      </div>
    );
  }
}

export default AppWithRoutes = withRouter(props => <App {...props}/>);