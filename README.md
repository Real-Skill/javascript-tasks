#Mongo - scaffolding

You can quickly create NodeJS tasks by cloning the scaffolding repo. 
You don't have to bother with coverage/reporters/gruntfile/npm configuration.

###Setup
* Run ```npm install``` command to install dependencies from package.json 

###Commands
* Run ```npm run-script nodemon``` to start server in live reload mode
* Run ```npm run-script node``` to start server without live reload mode
* Run ```node app/``` to start server without live reload mode
* Run ```grunt test``` to run tests from folder **/tests/spec**, create coverage, static analysis and reports tests.
* Run ```grunt jshint``` to lint files in scripts folder