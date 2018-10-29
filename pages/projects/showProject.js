import React, {Component} from 'react';
import Layout from '../../componenets/Layout';
import Contract from '../../ethereum/localInstanceOfContract.js';
import RequestRow from '../../componenets/RequestRow';
import {Button, Grid, Item, Image,Icon,Card} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';


class viewVoters extends Component {

  static async getInitialProps(props) {
    const accounts =await web3.eth.getAccounts();
    const currentProject = props.query.id
    const projects = await Contract.methods.projects(currentProject).call();
    const posstiveVoters = await Contract.methods.getPvote(currentProject).call();
    const negativeVoters = await Contract.methods.getNvote(currentProject).call();
    const pVotesList = await Promise.all(
      Array(parseInt(posstiveVoters))
      .fill()
      .map((element, index)=> {
          return Contract.methods.getPvoteStruct(currentProject, index).call();
      }));
      const nVotesList = await Promise.all(
        Array(parseInt(negativeVoters))
        .fill()
        .map((element, index)=> {
            return Contract.methods.getPvoteStruct(currentProject, index).call();
        }));



    return {posstiveVoters, negativeVoters, projects, currentProject,pVotesList,nVotesList};
  }

days(blocktime){
  const timenow = Date.now();
  const diffranceInDays = (timenow-blocktime*1000) / (60000) /(60) /(24);
  const days = Math.round(diffranceInDays);
  return (days)
}

  renderPComments(){

    const items = this.props.pVotesList.reverse().map((pVotesList,index) => {
      return {
        extra: <a href= {`//rinkeby.etherscan.io/address/${this.props.pVotesList[index][0]}`}
        target="_blank">
        <Icon name='user' />
        {this.props.pVotesList[index][0]}
      </a>,
        description:this.props.pVotesList[index][1],
        meta :
      "Voted" +" " + this.days(this.props.pVotesList[index][2]) + " "+"days ago",
        fluid: true
      };
    });
    return <Card.Group size ='large' items ={items} />;
  }
  renderNComments(){

    const items = this.props.nVotesList.reverse().map((nVotesList,index) => {
      return {
        extra: <a href= {`//rinkeby.etherscan.io/address/${this.props.pVotesList[index][0]}`}
        target="_blank">
        <Icon name='user' />
        {this.props.nVotesList[index][0]}
      </a>,
        description:this.props.nVotesList[index][1],
        meta :
      "Voted" +" " + this.days(this.props.nVotesList[index][2]) + " "+"days ago",
        fluid: true
      };
    });
    return <Card.Group size ='large' items ={items} />;
  }

  deleteProject = async() =>{
  event.preventDefault();
    const accounts =await web3.eth.getAccounts();
    await Contract.methods.remove(this.props.currentProject).send({
      from: accounts[0]

  })};


  render() {
    return (<Layout>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={13} textAlign='center'>
            <h1>Project Details
            </h1>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button floated= 'right' color = 'red' onClick={this.deleteProject}> Remove</Button>
            <Button floated= 'right' color = 'blue' > Edit</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image floated='left' size='medium' src={this.props.projects.imageLink}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <Item.Group style={{
                margin: "3%"
              }}>
              <Item>
                <Item.Content>
                  <Item.Header>
                    <h2>{this.props.projects.name}</h2>
                  </Item.Header>
                  <Item.Meta>
                    <h3>{this.props.projects.website}</h3>
                  </Item.Meta>
                  <Item.Description>
                    <h4>
                      {this.props.projects.decryption}
                    </h4>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8} style={{
              marginTop: "1%"
            }}>
                <h2 style={{
                    textAlign: "center"
                  }}>Positive votes ({this.props.pVotesList.length})</h2>
                {this.renderPComments()}

          </Grid.Column>
          <Grid.Column width={8} style={{
              marginTop: "1%"
            }}>
            <h2 style={{
                textAlign: "center"
              }}>Negative votes ({this.props.nVotesList.length})</h2>
            {this.renderNComments()}

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Layout>);
  }
}

export default viewVoters;
