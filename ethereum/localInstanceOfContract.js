import web3 from './web3';

const instance = new web3.eth.Contract(
  [
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"name": "projects",
  		"outputs": [
  			{
  				"name": "id",
  				"type": "uint256"
  			},
  			{
  				"name": "votes",
  				"type": "int256"
  			},
  			{
  				"name": "creator",
  				"type": "address"
  			},
  			{
  				"name": "name",
  				"type": "string"
  			},
  			{
  				"name": "decryption",
  				"type": "string"
  			},
  			{
  				"name": "website",
  				"type": "string"
  			},
  			{
  				"name": "imageLink",
  				"type": "string"
  			},
  			{
  				"name": "timestamp",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			}
  		],
  		"name": "getNvote",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [],
  		"name": "withdraw",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			}
  		],
  		"name": "remove",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			},
  			{
  				"name": "index2",
  				"type": "uint256"
  			}
  		],
  		"name": "getPvoteStruct",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			},
  			{
  				"name": "",
  				"type": "string"
  			},
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getNumberOfvoters",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getOwner",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_name",
  				"type": "string"
  			},
  			{
  				"name": "_decryption",
  				"type": "string"
  			},
  			{
  				"name": "_website",
  				"type": "string"
  			},
  			{
  				"name": "_imageLink",
  				"type": "string"
  			}
  		],
  		"name": "addNewProject",
  		"outputs": [],
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			}
  		],
  		"name": "getPvote",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"name": "temppvote",
  		"outputs": [
  			{
  				"name": "voter",
  				"type": "address"
  			},
  			{
  				"name": "comment",
  				"type": "string"
  			},
  			{
  				"name": "timestamp",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getCost",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			},
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			},
  			{
  				"name": "_comment",
  				"type": "string"
  			}
  		],
  		"name": "upVote",
  		"outputs": [],
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "newprojectcost",
  				"type": "uint256"
  			},
  			{
  				"name": "votin_cost",
  				"type": "uint256"
  			}
  		],
  		"name": "change_cost",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getProjects",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			},
  			{
  				"name": "_comment",
  				"type": "string"
  			}
  		],
  		"name": "downVote",
  		"outputs": [],
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "index",
  				"type": "uint256"
  			},
  			{
  				"name": "name",
  				"type": "string"
  			},
  			{
  				"name": "decryption",
  				"type": "string"
  			},
  			{
  				"name": "website",
  				"type": "string"
  			},
  			{
  				"name": "imageLink",
  				"type": "string"
  			}
  		],
  		"name": "editProject",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"inputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "constructor"
  	}
  ],
  '0xae7c0c05c7e30f764ae00cfaf0a22854613a167b'
);
export default instance;
// address of good contract 0xbdd312aa8ab364bb44811b049fbc1aec8b306fa9
