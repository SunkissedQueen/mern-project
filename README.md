# Mern Project

## Update Xcode
brew install mas
mas search Xcode
mas install <id for Xcode>  

## Install Mongo community
brew tap mongodb/brew
brew update
brew install mongodb-community@8.0

## Clone github repo
Create github repo
Clone github repo locally
cd <github repo>  

## Update to latest node version
nvm install node
node -v  

## branch: front-structure
Create feature branch
mkdir backend
cd backend
npm create vite@latest
Select React
Select Javascript
cd frontend
npm install
npm run dev
Copy/paste url into the browser to see the React app running

## branch: back-structure
### dependencies
cd ../backend
npm init
npm i --save-dev @babel/cli @babel/core @babel/node @babel/preset-env
npm i body-parser cors express mongoose nodemon
create a .babelrc file
update package.json to include a start script

### server setup
create index.js
cd backend
npm start
Type localhost:4000 to see the server running
## controllers, models, routes
create separate directories for controllers, models, routes
