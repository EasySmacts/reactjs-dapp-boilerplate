import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'

function App() {
  const [web3State, setWeb3State] = useState(false);

  const loadWeb3 = async()=> {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      setWeb3State(true)
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      setWeb3State(true)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  useEffect(() => {
    if (!web3State) {
      loadWeb3();
    }
  }, [web3State]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
