# nordware-person-test


## About this Project

This project is a simple application written as a test assesement of technical abilities of Front end Developers for  nord software company by John Alade.

For more information please contact John by mailing [topzy20@yahoo.com](topzy20@yahoo.com)

## Problem Solved
The project was written as a solution to this [requirements](https://github.com/nordsoftware/docs/blob/master/recruitment/html5/README.md). It was answered following this [User Interface Experience](https://marvelapp.com/2bda7h0/screen/25353942) and [specifications](https://github.com/nordsoftware/docs/blob/master/recruitment/html5/styleguide.png)


## Deployment
The Deployed version was deployed on [heroku](https://www.heroku.com) can be viewed on [here](https://peaceful-shore-21573.herokuapp.com) , Please note that heroku free deployed applications go into a sleep mode if not accessed for about 30 minutes and therefore would take some time for the application bootstrap and to load up.

## Development Framework 
The language used was ReactJS framework, the project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) as specified in the [question](https://github.com/nordsoftware/docs/blob/master/recruitment/html5/README.md).

Please find below the steps taken in creating, running and deployment of the Project.<br>

Updated Source Code can found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

-------------------------
## Project creation
-------------------------

-------------------------
Development Requirements / Tools
-------------------------

Make sure you install [npm] node package manager on your system, this can be installed on your system based on your operating system

### NPM/Node 

Please skip this section if you already use node on your System

Visit the [nodejs](https://nodejs.org/en/download/) website and download the node installer, after then run and Install on your system

After installation, open a new command prompt and type in  these commands

* `npm -v` which should show you the current version of npm installed on your system

  Version print out should be like `3.10.10`


* `node -v` should show you the current version of node installed on your system

Version print out should be like `v6.10.0`

### GIT
* `git --version` should show you the current version of git installed on your system

## Checking out the Project source code on your system

Open the command line and navigate to the folder you wish to create the project

Also install git on system by downloading and

```
git clone  [https://github.com/JohnTheBeloved/nordware-person-test.git](https://github.com/JohnTheBeloved/nordware-person-test.git)
```

Create your branch from the master branch

```
git checkout -b <branch-name>
```

Install project dependecies

```
npm install
```


After checking out your branch, the tree project folder structure should be similar to the one below

```
nord-software-test/               .......Project root folder
  README.md                       .......Project Doc
  node_modules/                   .......Node modules folder
  package.json                    .......Project config 
  public/                         .......Project public access folder
    index.html 
    favicon.ico
  src/                            .......Development source files
    js/                           .......javascript files
      components/                 .......React Components
        Header.js
        Body.js
        Table.js
        NewPersonForm.js
        Row.js
      utils/
        Validate.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Running the Project

To run the project in development mode

Type in to your command line

```
npm start
```

After running this command, your project is expected to open up on your default browser

## Deploying project locally

To deploy the project locally, run

```
npm build
```
After running this command, your project is found in the `build` folder under the project root folder

## Deploying the Project on Heroku


```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
