# Adopti-front

This is the repository for the Adopti front-end web application.

# Useful links

- [GitLab Repository](https://gitlab.com/adopti/adopti-front)

- [Figma Prototype](https://www.figma.com/file/dIz2GhPjtjvibQ81L9E9Zo/Adopti?node-id=268%3A3431&t=obiZYWFojSIRLL0G-0)

# Prerequisites

|                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node (version 18.14.0)                          | Node is the server running environment of JavaScript language.                                                                                                                                                                                                                                                                                                                                                                                                            |
# Requirements

## Node.js

```
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt install nodejs
$ node -v
v18.14.0
$ npm -v
9.3.1
```

## Yarn

```
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt update
$ sudo apt install yarn
$ yarn --version
1.22.19


```

# Technologies

- UI application: library: React
- Plain JavaScript
- UI component framework: Material UI
- Style: global CSS
- State management: Zustand
- Navigation: React Router 
- API communication: REST Api

## Getting Started 🚀

You can start by cloning this repository and using:

```sh
$ git clone git@gitlab.com:adopti/adopti-front.git
```

## Setup environments

To define which env you want to use we should using .env:

```sh
$ cp .env.example .env
```

Change your environment variables accordingly :

```sh
API_BASE_URL=XXXXXXXXXXXXXXXXXXXXXXXXX
API_PROD=XXXXXXXXXXXXXXXXXXXXXXXXX
API_DEV=XXXXXXXXXXXXXXXXXXXXXXXXX
```

API_BASE_URL=\***\*\*\*\*\***
API_BASE_URL=\***\*\*\*\*\***

- On each environment changing we should clearing the react native cache :

```sh
$ yarn start --reset-cache
```

# Commands

- Start locally: `yarn develop`
- Start Storybook: `yarn storybook`

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Folder that contains all images, css files, font files, etc. for your project. Pretty much anything that isn't code related will be stored in this folder .
  - `routers`: This folder consists of all routes of the application. It consists of private, protected, and all types of routes. Here we can even call our sub-route.
  - `layout`: Folder that contains any layout based components.
  - `shared`: Folder to store shared components.
  - `pages`: Folder contains components that represent individual pages or routes in a web application.
  - `features`: Folder that is a common organizational structure for grouping related components and logic that make up a specific feature or functionality if the application.
  - `utils`: Folder to store all utility functions and constants.
  - `index.js`: Entry point of your application as per React standards.
  - `App.js`: Is the main file in React which acts as a container for all other components