pragma solidity ^0.4.25;

contract HotOrNotCrypto {

    struct Pvote {
      address voter;
      string comment;

  }
     struct Nvote {
      address voter;
      string comment;

  }

    struct Project{
        uint id;
         int votes;
         address creator;
         string name;
        string decryption;
        string website;
        string imageLink;
        Pvote[] pvote;
        Nvote[] nvote;
       mapping(address => bool) voted;
    }


    //Global varibles
    Project[] public projects;
    address owner;
    uint add_new_project_cost;
    uint votingcost;
    uint number_of_voters;
    uint idcounter;


    constructor()public {
        owner=msg.sender;

    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
       modifier minEth {
        require(msg.sender.balance >= 100000000000000000);
        _;
    }





     function addNewProject(string _name,
     string _decryption,
     string _website,
     string _imageLink) public minEth payable {
          require (msg.value == add_new_project_cost);
        uint lastIndex = projects.length++;
        Project storage project = projects[lastIndex];
        project.id = idcounter;
        project.creator=msg.sender;
        project.name=_name;
        project.decryption=_decryption;
        project.website=_website;
        project.imageLink=_imageLink;
        idcounter=project.id+1;
    }

    function editProject(
     uint index,
     string name,
    string decryption,
    string website,
    string imageLink
    )
    public {
        Project storage project = projects[index];
            require (msg.sender== project.creator);
                project.imageLink =imageLink;
                project.name= name;
                project.website =website;
                project.decryption=decryption;
    }

    function remove(uint index) public{
          if(projects[index].creator == msg.sender ||
          msg.sender==owner){

        for (uint i = index; i<projects.length-1; i++){
            projects[i] = projects[i+1];
            Project storage project = projects[i];
            project.id--;
        }

        projects.length--;
        idcounter--;
          } else revert('Only owner of the project can remove it');

    }




    function upVote(uint index, string _comment) public minEth payable{
        if (index >= projects.length) revert('No such index exist');
       Project storage project = projects[index];
       require (msg.value == votingcost);
       require (!project.voted[msg.sender]);

    Pvote memory v;
    v.voter = msg.sender;
    v.comment = _comment;
    project.pvote.push(v);
       project.voted[msg.sender]=true;

       project.votes++;
    }

      function downVote(uint index, string _comment) public minEth payable{
           if (index >= projects.length) revert('No such index exist');
       Project storage project = projects[index];
       require (msg.value == votingcost);
       require (!project.voted[msg.sender]);

    Nvote memory v;
    v.voter = msg.sender;
    v.comment = _comment;
    project.nvote.push(v);
       project.voted[msg.sender]=true;
       project.votes--;
    }


      function getOwner() public view returns (address){
         return owner;
       }
       function getPvote (uint index)public view returns(uint){
           Project memory project = projects[index];
           return (project.pvote.length);
       }
          function getNvote (uint index)public view returns(uint){
           Project memory project = projects[index];
           return (project.nvote.length);
       }
    function getProjects() public view returns (uint){
         return (projects.length);
       }

    function getNumberOfvoters () public view returns (uint){
        return number_of_voters;
    }

    function getCost() public view returns (uint,uint){
         return (add_new_project_cost, votingcost);
    }



    // Admin onyl functions


     function change_cost(uint newprojectcost, uint votin_cost)public onlyOwner{
        add_new_project_cost=newprojectcost;
        votingcost=votin_cost;
    }

      function withdraw() public onlyOwner {
        owner.transfer(this.balance);
    }



}
