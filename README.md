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