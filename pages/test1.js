import React, {Component} from 'react';

import Contract from '../ethereum/localInstanceOfContract.js';

import {Button, List, Grid, Item, Image} from 'semantic-ui-react';
import web3 from '../ethereum/web3';



  class Test1 extends Component {


    render() {
      return <h1>Hello</h1>;

      const transaction=  web3.eth.getTransaction('0x757ce426b07f2ae3b621925d37eabe915a2eb1e66ea0cd3f5a652a3f1609952a');
      console.log(transaction)
      let tokenAddress = "REPLACE_WITH_ERC20_TOKEN_ADDRESS";
let walletAddress = "REPLACE_WITH_WALLET_ADDRESS";

// The minimum ABI to get ERC20 Token balance
let minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

// Get ERC20 Token contract instance
let contract = web3.eth.contract(minABI).at(tokenAddress);

// Call balanceOf function
contract.balanceOf(walletAddress, (error, balance) => {
  // Get decimals
  contract.decimals((error, decimals) => {
    // calculate a balance
    balance = balance.div(10**decimals);
    console.log(balance.toString());
  });
});
    }
  }

  export default Test1
