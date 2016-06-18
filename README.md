# Frontend Development Sample Project

This is a sample project used by applicants interested in a career at Versus Systems.

## Context

At Versus Systems a portion of our platform is currently built on a similar stack. Using this semi-real-world application helps us to determine how you interact with a code base to add a feature.

This application is very incomplete and as such has plenty of room for you to add a feature.

## Overview

Inside the `design` folder is a picture of the projectg dashboard we would like you to build.

The project has been setup with Redux and Redux and we would like you to make the dasboard look and feel as pictured.

### Style Guide
#### Font
* Roboto

#### Colors
* Red: #C53E3E
* Green: #3EC556
* Blue: #3E74C5


## Setup

### Software

* Node 6
* React 15
* Redux 3.5

If you are on a Mac and don't have Node installed yet:

`brew install node`

If you are using Linux install via your favorite package manager.

### Environment Setup

Though this is a front end web project with no "server" component, it does use Node for both building the project and serving it locally in development mode via Webpack.

* `npm install`

### Running Tests

There is a unit test framework setup using Mocha, however currently there are no unit tests.

* `npm run test`

There is a small Cucumber feature suite set up with several features described.
The application must be running/served for the feature tests to work.

* `npm run start` - Start the webpack dev server in one terminal
* `bin/cucumber` - Run the cucumber features in another terminal
(w/ Chrome, above may require installation of ChromeDriver '- npm install -g chromedriver')

### Interacting with the system

* `npm run start` - Run the webpack dev server

## What's Expected

As a general rule this follows the format of many common React + Redux applications. You should attempt to follow the conventions of the project, though divergence is acceptable with good reason.

You should feel free to add any libraries or tools you feel are necessary to complete the feature you have been asked to add.

You should feel proud of your solution and confident the feature is a good addition to the code base.
