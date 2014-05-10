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
  * `cd test`
  * `./run_tests.sh`
* client side only
  * `cd test`
  * `./../node_modules/karma/bin/karma start ./karma.client.config.js`
* server side only
  * `cd test`
  * `./../node_modules/jasmine-node/bin/jasmine-node ./server/`

To view coverage reports
------------------------

* open client coverage reports
  * `cd test`
  * `open client/coverage/PhantomJS\ 1.9.7\ \(Mac\ OS\ X\)/index.html`

To view web site
----------------

* start web server
  * `node ./scripts/web-server.js`
* open browser to
  * [front page](http://localhost:8000/index.html "index")



[jasmine]: http://jasmine.github.io/2.0/introduction.html "Jasmine"
[karma]: http://karma-runner.github.io/0.12/index.html "Karma"
[node]: http://nodejs.org/ "Node"
