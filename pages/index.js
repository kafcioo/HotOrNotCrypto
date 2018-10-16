import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Button,Table,Image  } from 'semantic-ui-react';
import Contract from '../ethereum/localInstanceOfContract.js';
import Layout from '../componenets/Layout';
import { Link } from '../routes';
import RequestRow from '../componenets/RequestRow';
import _ from 'lodash';
import web3 from '../ethereum/web3';

class ProjectIndex extends Component{

  // Get list of Project from smart contract (ETH)
  static async getInitialProps(){
  const getNumberOfvoters = await Contract.methods.getNumberOfvoters().call();
  const getProjects = await Contract.methods.getProjects().call();
  const projectsList = await Promise.all(
  Array(parseInt(getProjects))
  .fill()
  .map((element, index)=> {
    return Contract.methods.projects(index).call()
  }));
  const sorted_projects = _.orderBy(projectsList, ['votes'], ['desc']);

//const sorted_users = _.sortBy(projectsList, ['index', 'votes']);
   return { sorted_projects,getNumberOfvoters,getProjects};

  }


  renderRow(){
    return (

      this.props.sorted_projects.map((sorted_projects,key)=>{
      return <RequestRow
        id= {key+1}
        key ={key}
        sorted_projects ={sorted_projects}
      />;

  }));

}
render() {

  const {Header, Row, HeaderCell, Body} =Table;

  return (<Layout>

    <Table selectable size='large'>
        <Header>
          <Row>
            <HeaderCell width='1'>Position</HeaderCell>
            <HeaderCell width='2'>Logo</HeaderCell>
            <HeaderCell width='2'>Name</HeaderCell>
            <HeaderCell width='2'>Votes</HeaderCell>
            <HeaderCell width='2'> Up Vote</HeaderCell>
            <HeaderCell width='2'> Down Vote</HeaderCell>
            <HeaderCell width='2'>More Details</HeaderCell>
          </Row>
        </Header>
        <Body>{this.renderRow()}</Body>
      </Table>

  </Layout>);
  }
}
export default ProjectIndex;