## this document is about creating the npm module for http stastus codes i have selected this to make my initial libray so that i can learn and teach people how to make a library. This will cover

* npm module creation 
* writing test cases using mocha 
* js doc for documentation
* task management tool will be gulp




## steps involved

1. npm init - for creating our npm module and providing necessary information of the module. after writing npm init this will ask many questions related to our module . we need to answer each and every question and this will generate a package.json file for us. package.json files is the most important file because nodes js reads information from this file only
2. then we will fire the tree command to get the directory structure. bascially we will have to directories 
3. first will be the source code directory that will hold all the codes written by us 
4. second will be the dist directory that will contain the data which other users will use from our library
5. now first we will start to write the test cases.
6. we will follow the test driven development approach so we will be using mocha library for running our test and and chai as the assertion library.
7. in chai we will be using expect assertion library.
8. so we will install mocha and chai as our development dependencies 
9. when a npm module is loaded then it reads the package.json file and finds the target file which user has specified like index.js or main.js
10. so we will be creating index.js as we during npm init we have specified index.js as the entry point of the module


