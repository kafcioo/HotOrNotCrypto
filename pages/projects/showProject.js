import React, {Component} from 'react';
import Layout from '../../componenets/Layout';
import Contract from '../../ethereum/localInstanceOfContract.js';
import RequestRow from '../../componenets/RequestRow';
import {Button, List, Grid, Item, Image} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import {Link} from '../../routes';

class viewVoters extends Component {

  static async getInitialProps(props) {
    const currentProject = props.query.id
    const projects = await Contract.methods.projects(currentProject).call();
    const posstiveVoters = await Contract.methods.getPossitiveVoters(currentProject).call();
    const negativeVoters = await Contract.methods.getNegativeVoters(currentProject).call();
    return {posstiveVoters, negativeVoters, projects, currentProject};
  }

  RenderPvotersList() {
    const items = this.props.posstiveVoters;
    const listItems = items.map((item) => <List.Item key={item.toString()}>
      {item}
    </List.Item>);
    return (<List.Item>{listItems}</List.Item>);
  }

  RenderNvotersList() {
    const items = this.props.negativeVoters;
    const listItems = items.map((item) => <List.Item key={item.toString()}>
      {item}
    </List.Item >);
    return (<List.Item >{listItems}</List.Item >);
  }
  upVote = async () => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await Contract.methods.upVote(this.props.currentProject).send({from: accounts[0]})
  };

  downVote = async () => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await Contract.methods.downVote(this.props.currentProject).send({from: accounts[0]})
  };

  render() {
    return (<Layout>

      <Grid celled="celled">
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <h1>More Details
            </h1>
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
            <List size='large' style={{
                textAlign: "center"
              }} celled="celled">

              <List.Header>
                <Button size='medium' color='green' basic="basic" onClick={this.upVote}>
                  Up Vote
                </Button>
                <h2 style={{
                    textAlign: "center"
                  }}>Positive votes ({this.props.posstiveVoters.length})</h2>
              </List.Header>
              <List.Item >
                {this.RenderPvotersList()}
              </List.Item>

            </List>
          </Grid.Column>
          <Grid.Column width={8} style={{
              marginTop: "1%"
            }}>
            <List size='large' style={{
                textAlign: "center"
              }} celled="celled">

              <List.Header>
                <Button size='medium' color='red' basic="basic" onClick={this.downVote}>
                  Down Vote
                </Button>
                <h2 style={{
                    textAlign: "center"
                  }}>Negative votes ({this.props.negativeVoters.length})</h2>
              </List.Header>
              <List.Item>
                {this.RenderNvotersList()}
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Layout>);
  }
}

export default viewVoters;
