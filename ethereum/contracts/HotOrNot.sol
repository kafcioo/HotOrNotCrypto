pragma solidity ^0.4.17;

contract HotOrNotCrypto {

    struct Project{
        uint id;
        string name;
         int votes;
        string decryption;
        string website;
        string imageLink;
       address[] possitive_voters;
       address[] negative_voters;
       mapping(address => bool) voted;

    }

    //Global varibles
    Project[] public projects;
    address owner;
    uint add_new_project_cost =0;
    uint votingcost = 0;
    uint number_of_voters=0;
    uint idcounter=0;


   function HotOrNotCrypto()public {
        owner=msg.sender;

    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function addNewProject(string name,string decryption, string website, string imageLink) public payable{
        require (msg.value == add_new_project_cost);
         Project memory newProject = Project({
             id:idcounter+1,
             imageLink:imageLink,
             name:name,
             decryption:decryption,
             website:website,
             votes: 0,
             possitive_voters: new address [](0),
             negative_voters:new address [](0)
         });
        idcounter=newProject.id;
       projects.push(newProject);
    }




    function upVote(uint index) public payable{
       Project storage project = projects[index];
       require (msg.value == votingcost);
       require (!project.voted[msg.sender]);

       project.possitive_voters.push(msg.sender);
       project.voted[msg.sender]=true;
       number_of_voters++;
       project.votes++;
    }

      function downVote(uint index) public payable{
       Project storage project = projects[index];
       require (msg.value == votingcost);
       require (!project.voted[msg.sender]);

       project.negative_voters.push(msg.sender);
       project.voted[msg.sender]=true;
       number_of_voters++;
       project.votes--;
    }



    function getProjects() public view returns (uint){
         return (projects.length);
       }

    function getNumberOfvoters () public returns (uint){
        return number_of_voters;
    }

    function getCost() public view returns (uint,uint){
         return (add_new_project_cost, votingcost);
    }

    function getPossitiveVoters(uint index) public view returns(address[]){
        return (projects[index].possitive_voters);
    }

    function getNegativeVoters(uint index) public view returns(address[]){
        return (projects[index].negative_voters);
    }


    // Admin onyl functions


     function change_cost(uint newprojectcost, uint votin_cost)public onlyOwner{
        add_new_project_cost=newprojectcost;
        votingcost=votin_cost;
    }

      function withdraw() public onlyOwner {
        owner.transfer(this.balance);
    }


      function remove(uint index)  public onlyOwner{
        if (index >= projects.length) return;

        for (uint i = index; i<projects.length-1; i++){
            projects[i] = projects[i+1];
        }
        delete projects[projects.length-1];
        projects.length--;

    }

}
