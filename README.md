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

# Requirements



# Marking Sheet Stuff

- All the forms must have correct validations and the whole website must be secure.
    - No “plain text” password stored in your database.
    - Protect agains script injections.
    - Reject unnwanted or dangerous content.
    - Secure SQL queries.

Respect for limitations
The subject allows the use of a micro-framework, and only that.
If the tool used by the student (if there is one) is not in the subject's list of suggestions,
check that it is a micro-framework according to the definition of the subject.
Reminder:
`We will consider that a" micro-framework "has a router, and possibly templating, but no ORM, validators or management of user
accounts.`
You will have to look at the package files if a library One of the following features must be installed:
- ORM
- Validators
- User Account Management
Also check that:
- the database used is not of type NoSQL.
- no Error tracking library (Sentry, Raven ...) configured is installed on the repo. You DO NOT have to make 500, so it's useless to
catch these mistakes!

With the evaluated, you will have to proceed to a clean installation of the necessary packages to launch its Matcha.
You will also have to hydrate his database with the script he has provided you.
Verify that the database has at least 500 different profiles.

Launch the web server that is supposed to serve the site. This one must not produce any error.

The site must be able to offer a new user registration form.
You must be able to enter:
- a username
- a first and last name
- a secure password (a simple word of French must not be accepted)
- an email address
The form must have validators client and server side for s ensure that the right data is well transmitted.
At the end of registration, it must be completed by sending an email requesting confirmation of the account by single link.
You can not sign in with this account until the link has been clicked.

The user must be able to log in with his credentials, and must be able to receive an email to reset his password in case of
forgetfulness.
A logged in user must be able to complete an extended profile, and must be able to modify this information, as well as that provided
at registration, at any time.
It is permissible for a user to access the profile search, but it must not be able to do more until its extended profile is filled.
 Yes  No.
 Yes  No.
Disconnection must be possible from any page of the site.
If one of the points above has not been respected, the question is counted false and you move on to the next.

The user must be able to complete the following fields:
- His gender.
- His sexual orientation.
- A short bio.
- A list of interests, in the form of tags (\ #Bio, \ #NoMakeup, \ # Fixie4Ever ...)
- Images, maximum five, including one used as a profile photo. \\
If the seed is correctly implemented, you can make a proposal of tags in a certain form (autocompletion, proposal of the top trends
tags ...)
Once his profile filled, he can access the whole site.
This information can be changed at any time, once connected.
If one of the points above has not been respected, the question is counted false and you move on to the next

The user must be able to find, when he logs in, a list of suggested profiles.
This selection will not be possible until the extended profile of the user is filled.
Normally, if this extended profile is not yet filled, you should be asked to fill it out!
Relevant profiles must be offered to the user, corresponding to his sexual orientation.
If the user does not inform his sexuality, he will be considered as bisexual.
Check with the student that the profile proposals are weighted according to three criteria:
- same geographical area as the user
- maximum of common interest tags
- maximum popularity
The display must not crash or exceed a load of more than 5 seconds. By loading, I mean
the total time between the display click and the complete rendering with the profiles.
 Yes  No.
 Yes  No.
You can ask the student to explain his strategy to display a list of relevant suggestions.

The user must be able to perform an advanced search by selecting one or more criteria such as:
- age
range
- popularity score range - location
- one or more tags of interest
The display must be consistent.
If one of the points above has not been respected, the question is counted false and you move on to the next

The list of profile proposals, as well as the search results, must be sortable and filterable by:
- age
- location
- popularity
- tags
If one of the points above has not been respected, the question is counted false and you move on to the next.

The user must be geolocated to the district.
If the user does not want to be geolocated, strategies must be put in place to do it in spite of himself.
The user must be able to modify his location on his profile.

Each user must have a popularity score.
Ask the student to explain his strategy for calculating this score, it must be consistent and a relevant minima.

You must be notified, in real time (we tolerate a margin of 10 seconds), of the following events:
- a "like" of his profile
- someone has visited his profile
- a user "liked" has "liked" in return
- a connected user does not "like" anymore the current user
A you to make the necessary simulations (new account, to use an account of the seed of the evaluated ...)
He must be able to see from any page that a notification has not been read.

The user must be able to consult people who have viewed his profile.
So there must be a history of profile visits, as well as people who have "liked" it.
If one of the points above has not been respected, the question is counted false and you move on to the next.

The public profile of a user must include all the information he has provided, except his email address and password.
It must also include its popularity score and its connection status.
If the user appears disconnected, we must see the date of his last visit.

A user may like, and unliker, the profile of another user.
When two users have "liked each other", they are said to have matched: they can then start the conversation.
A user who does not have a photo should not be able to like another user's profile.
The profile of another user should clearly show whether he is logged in to the current user or if he "like" the current user.

You can defer a profile as "false account", and block a given user.
A blocked user should no longer appear in the search results (or suggestions), and should no longer generate notifications.
An administrator can view blocking requests directly on the app, and act accordingly.

Two connected users can chat in real time (we allow a margin of 10 seconds).
The user must be able to see from any page that he has received a message.

The site must be compatible on Firefox (> = 41) and Chrome (> = 46).
The above functionalities work, without any warning, error or
log bizarre
If the above point was not respected, the question is counted
false and you proceed to the next one.

Mobile
The site is presentable on mobile as well as on small resolutions?
Is the layout of the site respected?
If the above point has not been respected, the question is counted as
false and you move on to the next one.

Make sure that:
- The passwords are encrypted in the database. In no case should they be in the clear.
- Of the script inserted in forms must not execute
- There is no SQL injection possible (try a connection with as password 'blabla' OR 1 = '1`)


## Testing(Needsto change)
[Marking sheet linked here](https://github.com/tcajee/camagru/blob/master/camagru.pdf)
