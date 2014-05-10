jasmine-karma-tdd
=================

A simple example of a site using both client and server side testing. The tests are written in [jasmine], and executed using [karma]

Steps to install
----------------

* if you have not already, install [node]. 
* clone project
* from the command line
  * `npm install`

To execute tests
----------------

* all tests
  * `./test/run_tests.sh`
* client side only
  * `./node_modules/karma/bin/karma start ./test/karma.client.config.js`
* server side only
  * `./node_modules/jasmine-node/bin/jasmine-node ./test/server/`

To view web site
----------------

* start web server
  * `node ./scripts/web-server.js`
* open browser to
  * [front page](http://localhost:8000/index.html "index")



[jasmine]: http://jasmine.github.io/2.0/introduction.html "Jasmine"
[karma]: http://karma-runner.github.io/0.12/index.html "Karma"
[node]: http://nodejs.org/ "Node"
