const routes  = require('next-routes')();


 routes
 .add('/projects/newProject', '/projects/newProject')
 .add('/projects/:id', '/projects/showProject');


 module.exports =routes;
