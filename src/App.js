import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import CryptoCurrencies from './components/CryptoCurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import './App.css';
import Layout from 'antd/es/layout/layout';
import { Switch } from 'antd';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges/>
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
