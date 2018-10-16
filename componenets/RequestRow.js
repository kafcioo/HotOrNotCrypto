import React, {Component} from 'react';
import {Table, Button,Image} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Contract from '../ethereum/localInstanceOfContract.js';
import { Link } from '../routes';

class RequestRow extends Component{

  upVote = async() =>{
  event.preventDefault();
    const accounts =await web3.eth.getAccounts();
    await Contract.methods.upVote(this.props.sorted_projects.id).send({
      from: accounts[0]

    })};

    downVote = async() =>{
    event.preventDefault();
      const accounts =await web3.eth.getAccounts();
      await Contract.methods.downVote(this.props.sorted_projects.id).send({
        from: accounts[0]

    })};





render(){
  const {Row, Cell} =Table;
 //const {id, name, votes} =this.props;
  return(

   <Row>
    <Cell><h3>{this.props.id}</h3></Cell>
    <Cell> <Image src={this.props.sorted_projects.imageLink}
        size='tiny'
        /></Cell>
      <Cell><h4>{this.props.sorted_projects.name}</h4></Cell>
    <Cell><h4>{this.props.sorted_projects.votes}</h4></Cell>
    <Cell> <Button size='small' color='green' icon='thumbs up outline' basic onClick={this.upVote}> Up Vote </Button></Cell>
    <Cell> <Button size='small' color='red' basic onClick={this.downVote}> Down Vote </Button></Cell>
      <Cell>
        <Link route ={`/projects/${this.props.sorted_projects.id}`}>
        <Button size='small' color='blue' basic>Details </Button>
       </Link>
  </Cell>


   </Row>
  )
}

}
export default RequestRow;
