# Matcha 2020
This project was an introduction to the fundamentals of advanced web development and other advanced web development technologies and concepts.
Matcha is a Tinder clone that allows users to match and chat with other users, built with full-stack Javascript with a ReactJS front-end running on a Node/Express 
server.

## Requirements and Constraints
- Any programming languages are allowed
- Only Micro-frameworks are allowed
    - No Object-relational-mapping (ORM) tools 
    - No external input validators
    - No User Accounts Manager

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

## Setting up SMTP Sever

Follow this guide using a newly created gmail account:
    [Setting up your google SMTP server](https://www.siteground.com/kb/google_free_smtp_server/)

After cloning and setting up the SMTP server the sample.env file in the server directory can be renamed to .env and populated.
```
    cd matcha/
    mv /server/sample.env /server/.env
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
The following is a breakdown of the file and folder stucture of our project, summarised for brevity. A brief explanation of the file or folders functionaliy is given.
```
matcha/
├── app -> Contains all front-end source code as a ReactJS app. 
│   ├── package.json -> contains dependency and project information
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── components
│   │   │   ├── chat
│   │   │   │   ├── chat.css
│   │   │   │   └── index.js
│   │   │   ├── generic
│   │   │   │   └── title
│   │   │   │       ├── index.js
│   │   │   │       └── title.css
│   │   ├── index.js
│   │   └── validation
│   │       └── validation.js
├── README.md
└── server
    ├── databaseSetup.js
    ├── index.js
    ├── package.json
    ├── sample.env
    ├── sql
    │   ├── users
    │   │   ├── create.sql
    |   │   ├── authenticate.sql
    │   │   └── validate
    │   │      ├── email.sql
    │   │      └── username.sql
    └── validation
        └── validation.js
```

## Testing
[Marking sheet linked here](https://github.com/tcajee/camagru/blob/master/camagru.pdf)

### Summarised testing points
1.Launch web server
2.Create an account
3.Login
4.Edit extended profile
5.View profile proposals
6.Research /filter
7.geolocation
8.Popularity rating
9.Notifications
10.Consultations?(see who view/liked profile)
11.View profile
12.unlike user
13.block
14.chat

### Expected testing outcomes
1.You should be able to access my Matcha from the web browser by navigation to localhost:3000.
2.You should receive an email with a verification link asking you to verify your account.
3.You should be able to login with the account you just created.
4.Should be able to edit your extended profile.
5. When navigating to the search bar should be able to see a list of users which …
6.You should be able to filter through matches.
7.You should be able to add your geolocation.
8.A person’s popularity rating should increase when you …
9.You should be able to receive notifications when another user has viewed your profile.
10. You should be able to see who has liked or viewed your profile
11.You should be able to view a user’s profile.
12.You should be able to unlike a user( this means you can’t chat with them)
13.You should be able to block a user and no longer have them on recommended list or chat with them.
14.You should be able to chat with a user if and only if you both like each other.
