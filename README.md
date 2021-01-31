# Matcha 2020
This project was an introduction to the fundamentals of advanced web development and other advanced web development technologies and concepts.
Matcha is a Tinder clone that allows users to match and chat with other users, built with full-stack Javascript with a ReactJS front-end running on a Node/Express 
server.

## Requirements and Constraints of the Project
- Any programming languages are allowed
- Only Micro-frameworks are allowed
    - No Object-relational-mapping (ORM) tools 
    - No external input validators
    - No User Accounts Manager

## Required Tecnologies to Run the Project
- Node(v13.14.0)
- NPM(16.14.4)
- NVM(latest)

## Tools & Technologies

#### Back-end:
- NodeJS/ExpressJS server:  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
- JavaScript: JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

#### Front-end:
- CSS: Used to define the style of the website. It augments HTML and can be used to create semi-dynamic websites.
- JavaScript: JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
- ReactJS: An open-source, front end, JavaScript library for building user interfaces or UI components. React is only concerned with state management and rendering that state to the DOM and is typically used alongside HTML with JSX and JavaScript.

#### Data Management System (DBMS):
- Postgres: PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

## Installation and Setup
This is a general guide to install the relevant dependencies and run the project in developement mode.
For a production version you will need to build the app using `npm build` and add code for the server to serve the static files.

### Database Setup (Postgresql)
Install `postgresql` with relevant package manager

This link will explain how to set up postgres on Arch Linux: [Postgresql Arch Wiki](https://wiki.archlinux.org/index.php/PostgreSQL)

Make sure to:
- [Initialize the Database Cluster](https://wiki.archlinux.org/index.php/PostgreSQL)
- [Start and enable the postgres service](https://wiki.archlinux.org/index.php/Systemd#Using_units)
- [Create a user for the postgres shell](https://wiki.archlinux.org/index.php/PostgreSQL). Use your OS username to make it easier to log in.
- [Create the database](https://wiki.archlinux.org/index.php/PostgreSQL). Uses the database credentials found in the `.env` file.

### NPM and Node
- Install `node` and `npm`
- To check install run:
	```bash
	node -v && npm -v
	```
The app and server was written using node version `v13.14.0`
- Install [nvm](https://github.com/nvm-sh/nvm)
- Run the command:
	```bash
	nvm install 13 && nvm use 13
	```

## Cloning the project
Grab the URL from Github or directly [here](https://github.com/sminnaar/matcha.git)
Clone the repository into any availible directory:
```
git clone https://github.com/sminnaar/matcha.git
```

## Running the App and Server
Two instances of npm have to be run:
- Navigate into `app` folder and the `server` folder in two seperate terminals

- Run next command in both:
```
npm install && npm update
```
- Then run the command below in both:
```
npm start
```
The live site will be found at: `http://localhost:3000/`

#### Project structure:
The following is a breakdown of the file and folder stucture of our project, summarised for brevity. A brief explanation of the file or folders functionality is given.
```
matcha/
├── app 	 Contains all front-end application source code as a ReactJS app. 
│   ├── package.json ---> Contains dependency and project information
│   ├── src ---> Contains primary ReactJS code. 
│   │   ├── App.css ---> Global application styling definitions
│   │   ├── App.js ---> Main ReactJS application definitions for all functionality
│   │   ├── components ---> Contains React component defintions for each piece of functionality
│   │   │   ├── chat ---> An example component
│   │   │   │   ├── chat.css ---> Optional CSS styling 
│   │   │   │   └── index.js ---> Contains all component functionality as a React Class component
│   │   ├── index.js ---> The entry point to the React app which handles library includes and app configuration 
│   │   └── validation 
│   │       └── validation.js ---> Contains JavaScript validation class for general front-end validation 
└── server ---> Contains all back-end application source code as a Node/Express server
    ├── databaseSetup.js ---> Contains database credentials and Postgres connection functionality
    ├── index.js ---> Contains primary server definitions for all libraries, routes and configurations
    ├── package.json ---> Contains dependency and project information
    ├── sql ---> Contains all SQL queries, separated by functionality
    │   ├── users ---> As an example:
    │   │   ├── create.sql ---> Contains the query used to create a new user 
    |   │   ├── authenticate.sql ---> Contains the query used to check user login credentials
    │   │   └── validate 
    │   │      └── username.sql ---> Contains the query used to check if the username exists
    └── validation
        └── validation.js ---> Contains JavaScript validation class for all general back-end validation 
```

## Testing
[Marking sheet linked here](https://github.com/tcajee/camagru/blob/master/camagru.pdf)

### Summarised testing points
- Launch web server
- Create an account
- Login
- Edit extended profile
- View profile proposals
- Searching / filtering
- Geolocation 
- Popularity rating
- Notifications
- Profile views/likes
- View user profile
- Unlike user
- Block user
- User chat

### Expected testing outcomes
- You should be able to access Matcha from the web browser by navigation to `localhost:3000`.
- You should receive an email with a verification link asking you to verify your account.
- You should be able to login with the account you just created.
- You Should be able to edit your extended profile.
- When navigating to the search bar should be able to see a list of users 
- You should be able to filter through matches.
- You should be able to access the user geolocation.
- A user popularity rating should increase when you like
- You should be able to receive notifications when another user has viewed your profile.
- You should be able to see who has liked or viewed your profile
- You should be able to view a user’s profile.
- You should be able to unlike a user( this means you can’t chat with them)
- You should be able to block a user and no longer have them on recommended list or chat with them.
- You should be able to chat with a user if and only if you both like each other.
