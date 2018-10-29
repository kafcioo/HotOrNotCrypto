import React, {Component} from 'react';
import {Table, Button, Popup,Image,Grid,Form,TextArea} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Contract from '../ethereum/localInstanceOfContract.js';
import { Link } from '../routes';

class RequestRow extends Component{
state={
  comment:''
}
  upVote = async() =>{
  event.preventDefault();
    const accounts =await web3.eth.getAccounts();
    await Contract.methods.upVote(this.props.sorted_projects.id, this.state.comment).send({
      from: accounts[0]

    })};

    downVote = async() =>{
    event.preventDefault();
      const accounts =await web3.eth.getAccounts();
      await Contract.methods.downVote(this.props.sorted_projects.id, this.state.comment).send({
        from: accounts[0]

    })};





render(){
  const {Row, Cell} =Table;
 //const {id, name, votes} =this.props;
  return(

  <Row > <Cell>
  <h3>{this.props.id}</h3>
</Cell>
<Cell>
  <Image src={this.props.sorted_projects.imageLink} size='tiny'/></Cell>
<Cell>
  <h4>{this.props.sorted_projects.name}</h4>
</Cell>
<Cell>
  <h4>{this.props.sorted_projects.votes}</h4>
</Cell>
<Cell>
  <Popup wide trigger={<Button content = 'Vote   ' primary  />} on='click'>
    <Grid divided columns='equal'>
      <Grid.Row>
        <Grid.Column>

        <Form size ='big'>

          <Form.Field
            control={TextArea}
            label='Comment'
            placeholder='This project is Hot Or Not becouse...'
            required
            value={this.state.comment}
            onChange={event=> this.setState({comment:event.target.value})}
            />

        </Form>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Popup trigger={<Button color = 'green'  fluid content = 'Up Vote'
             onClick={this.upVote}/>}  position='top center'  size='tiny' inverted/>
        </Grid.Column>
        <Grid.Column>
          <Popup trigger={<Button color = 'red' fluid content = 'Down Vote'
            onClick={this.upVote} />}  position='top center'  size='tiny' inverted/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Popup>
</Cell>
<Cell>
  <Link route ={`/projects/${this.props.sorted_projects.id}`}>
    <Button size='small' primary>Details
    </Button>
  </Link>
</Cell>

</Row>
  )
}

}
export default RequestRow;
