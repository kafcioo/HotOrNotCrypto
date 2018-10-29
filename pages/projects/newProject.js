import React, { Component } from 'react';
import { Button, Form, Input, Message,Grid, TextArea} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import contract from '../../ethereum/localInstanceOfContract.js';
import Layout from '../../componenets/Layout.js';
import { Link,Router } from '../../routes';



class NewProject extends Component {
state={
  projectName:'',
  projectDetails:'',
  projectWebsite:'',
  projectImageLink:'',
  errorMessage: '',
  loading: false
};

onSubmit = async () => {
  const {projectName, projectDetails, projectWebsite,projectImageLink} =this.state;
  event.preventDefault();
  this.setState({ loading: true });
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .addNewProject(projectName,projectDetails,projectWebsite,projectImageLink)
      .send({
        from: accounts[0]

      });
      Router.pushRoute('/');
  } catch (err) {
    this.setState({errorMessage: err.message});
  }
  this.setState({loading: false});
};

  render() {
    const {
  projectName,
  projectDetails,
  projectWebsite,
  projectImageLink,
  errorMessage,
  loading
} = this.props;
    return (<Layout>


      <Grid celled >
        <Grid.Row>    <Grid.Column textAlign='center'>
              <h1>Add new Project </h1>
            </Grid.Column ></Grid.Row>
            <Grid.Row>    <Grid.Column>


      <Form onSubmit ={this.onSubmit} error={!!this.state.errorMessage} size ='large' style={{margin: "1%" }}>
        <Form.Field>
          <label>Name of the project</label>
          <Input position ='left'
            value={projectName}
            onChange={event=> this.setState({projectName:event.target.value})}
          />
        </Form.Field>
        <Form.Field>
          <label>Short Descryption </label>
          <Input position ='left'
            control={TextArea}
            value={projectDetails}
            onChange={event=> this.setState({projectDetails:event.target.value})}
          />
        </Form.Field>
        <Form.Field>
          <label>Project Website </label>
          <Input position ='left'
            value={projectWebsite}
            onChange={event=> this.setState({projectWebsite:event.target.value})}
          />
        </Form.Field>
        <Form.Field>
          <label>Logo link address </label>
          <Input position ='left'
            value={projectImageLink}
            onChange={event=> this.setState({projectImageLink:event.target.value})}
          />
        </Form.Field>

        <Message error header= "Ops" content ={this.state.errorMessage} />
        <Button loading={this.state.loading} primary size='large' >Add</Button>
      </Form>
          </Grid.Column></Grid.Row>
  </Grid>
    </Layout>
  );
  }
  }

export default NewProject;
