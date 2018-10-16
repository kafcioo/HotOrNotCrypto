import React, { Component } from 'react';
import { Menu,Image,Button} from 'semantic-ui-react'
import {Link} from '../routes';


export default () =>{
  return (
    <Menu
      floated='right'
      style ={{
        marginTop: '6%'
      }}>
      <Menu.Item link>

        <Link route='/'>
      <a className="item"> <h3>Projects List </h3></a>
        </Link>
      </Menu.Item>

      <Menu.Item link >
        <Link route='/projects/newProject'>
        <a className="item"> <h3 >Add Project </h3>  </a>
        </Link>
      </Menu.Item>


    </Menu>
 )



};
