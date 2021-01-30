# Matcha
Matcha is a Tinder clone that allows users to match with other users and chat, built with Full-stack Javascript, React (JSX), HTML running on a node server.
This project was an introduction to the fundamentals of advanced web development and other advanced web development technologies and concepts.

## Requirements
- NPM
- Node
- NVM

## Installation and Setup
NOTE: This is for setting the project to run on Arch Linux Manjaro using Xampp. Follow your OS specific instructions for other platforms.
- Install NPM and Node:
    ```
    sudo pacman -S xampp
    ```
- Set up a database user and initialize the database:
    [Mysql Arch Wiki](https://wiki.archlinux.org/index.php/PHP#MySQL/MariaDB)
- Clone the project into the /opt/lampp/htdocs directory
    ```
    git clone https://github.com/tcajee/camagru.git /opt/lampp/htdocs/camagru
    ```
- Start the Xampp servers via the included GUI.
- Initialize the Database tables by calling the setup script [Database Setup](https://localhost/camagru/config/setup.php)
- Navigate to [PHP Myadmin](https://localhost/phpmyadmin/) to verify that the database has been populated.
- After running the setup you will be redirected to [Camagru Home](https://localhost/camagru/)

## Tools & Technologies
#### Back-end:
- Apache:  An open source web server and the most widely used server worldwide for delivery of web content. Used to  serves the project on localhost for development.
- PHP: A general-purpose language suited for web development (requirement of the project).
#### Front-end:
- HTML: The standard markup language used to develop web Pages. It only defines the layout of the page contents. 
- CSS: Used to define the style of the website. It augments HTML and can be used to create semi-dynamic websites.
- JavaScript: A programming language that is often used alongside HTML and CSS to make dynamic websites. It is usually referred to as the language of the web because of its strong compatibility with web browsers and HTML.
#### Data Management System (DBMS):
- MariaDB: An open source SQL server used as the primary database driver along with the Structured Query Language we used for the project database queries.

#### Project structure:
```
camagru
├── app
│   ├── controllers -> Contains all page-specific back-end functionality
│   │   └── *.php
│   ├── lib -> Contains addition helper functionality
│   │   └── helpers
│   │       └── *.php
│   └── views -> Contains templates and all page-specific layouts
│       ├── *.php
│       ├── layouts
│       │   └── *.php
│       └── *.php
├── config -> Contains all initial application and database functionality
│   └── *.php
├── core -> Contains all primary back-end application functionality
│   └── *.php
├── css -> Contains all stylesheets
│   └── *.css
├── img -> Contains all image files
│   └── *.png
│   └── *.jpg
├── index.php -> Main entry point to the application
└── js -> Contains all page-specific client-side functionality and AJAX
   └── *.js
```

## Testing(Needsto change)
[Marking sheet linked here](https://github.com/tcajee/camagru/blob/master/camagru.pdf)


# Matcha 2020

This is a general guide to istall the relevant dependancies and run the project in developement mode.

For a production version you will need to build the app using npm build and add code for the server to serve the static files.

## Setup

### Database Setup (Postgresql)

Install postgresql with relevant package manager

This link will explain how to set up postgres on Arch:

[Postgresql Arch Wiki](https://wiki.archlinux.org/index.php/PostgreSQL)

Make sure to:

- [Initialize the Database Cluster](https://wiki.archlinux.org/index.php/PostgreSQL)

- [Start and enable the posrgres service](https://wiki.archlinux.org/index.php/Systemd#Using_units)

- [Create a user for the postgres shell](https://wiki.archlinux.org/index.php/PostgreSQL)
	Use your OS username to make it easier to log in

- [Create the databse](https://wiki.archlinux.org/index.php/PostgreSQL)
	Use the database credentials found in the .env file

### NPM and Node

- Install node and npm

- To check install run:
	```bash
	node -v && npm -v
	```

The app and server was written using node version v13.14.0

- Install [nvm](https://github.com/nvm-sh/nvm)

- Run the command:
	```bash
	nvm install 13 && nvm use 13
	
	```

## Cloning the project

Grab the url from Github or [Here](https://github.com/sminnaar/matcha.git)

Clone the repository into any availible directory:
```
	git clone https://github.com/sminnaar/matcha.git
```

## Running the App and Server

Two instances of npm have to be run:
- cd into app and server in two seperate terminals

- Run *npm install && npm update* in both

- Then run *npm start* in both

Site is hosted on:

	http://localhost:3000/


#### Project structure:
```
matcha/
├── app
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── AuthRoute.js
│   │   ├── components
│   │   │   ├── browse
│   │   │   │   ├── browse.css
│   │   │   │   └── index.js
│   │   │   ├── browseProfile
│   │   │   │   └── index.js
│   │   │   ├── changeEmail
│   │   │   │   └── index.js
│   │   │   ├── changePassword
│   │   │   │   └── index.js
│   │   │   ├── chat
│   │   │   │   ├── chat.css
│   │   │   │   └── index.js
│   │   │   ├── editImages
│   │   │   │   ├── editImages.css
│   │   │   │   └── index.js
│   │   │   ├── editInterests
│   │   │   │   ├── editInterests.css
│   │   │   │   └── index.js
│   │   │   ├── editProfile
│   │   │   │   ├── editProfile.css
│   │   │   │   └── index.js
│   │   │   ├── forgotPassword
│   │   │   │   └── index.js
│   │   │   ├── generic
│   │   │   │   └── title
│   │   │   │       ├── index.js
│   │   │   │       └── title.css
│   │   │   ├── header
│   │   │   │   ├── header.css
│   │   │   │   └── index.js
│   │   │   ├── home
│   │   │   │   └── index.js
│   │   │   ├── login
│   │   │   │   └── index.js
│   │   │   ├── matches
│   │   │   │   ├── index.js
│   │   │   │   └── matches.css
│   │   │   ├── registration
│   │   │   │   └── index.js
│   │   │   ├── reset-password
│   │   │   │   └── index.js
│   │   │   ├── userProfile
│   │   │   │   ├── index.js
│   │   │   │   └── userProfile.css
│   │   │   ├── verify-account
│   │   │   │   └── index.js
│   │   │   └── verify-email
│   │   │       └── index.js
│   │   ├── history.js
│   │   ├── index.js
│   │   ├── resources
│   │   │   └── matcha-favicon.png
│   │   └── validation
│   │       └── validation.js
│   └── webpack.config.js
├── README.md
└── server
    ├── databaseSetup.js
    ├── index.js
    ├── key.js
    ├── package.json
    ├── package-lock.json
    ├── sample.env
    ├── sql
    │   ├── blocked
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   ├── selectFromUsers.sql
    │   │   └── select.sql
    │   ├── chat_messages
    │   │   ├── create.sql
    │   │   └── select.sql
    │   ├── genders
    │   │   └── selectAll.sql
    │   ├── images
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   ├── selectAll.sql
    │   │   ├── selectCount.sql
    │   │   ├── selectFirst.sql
    │   │   └── select.sql
    │   ├── init
    │   │   ├── extensions.sql
    │   │   ├── functions.sql
    │   │   ├── populate.sql
    │   │   └── tables.sql
    │   ├── interests
    │   │   └── select.sql
    │   ├── likes
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   ├── selectCountOnLiked.sql
    │   │   └── select.sql
    │   ├── location
    │   │   ├── check.sql
    │   │   ├── createOrUpdate.sql
    │   │   ├── create.sql
    │   │   └── update.sql
    │   ├── matches
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   ├── selectFromUser.sql
    │   │   ├── selectFromUsers.sql
    │   │   └── select.sql
    │   ├── notifications
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   └── select.sql
    │   ├── reported
    │   │   ├── create.sql
    │   │   ├── selectFromUsers.sql
    │   │   └── select.sql
    │   ├── sexualities
    │   │   └── selectAll.sql
    │   ├── tokens
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   └── select.sql
    │   ├── user_interests
    │   │   ├── create.sql
    │   │   ├── remove.sql
    │   │   └── select.sql
    │   ├── user_profiles
    │   │   ├── create.sql
    │   │   ├── select.sql
    │   │   └── update.sql
    │   ├── users
    │   │   ├── authenticate.sql
    │   │   ├── authorize.sql
    │   │   ├── create.sql
    │   │   ├── geographicDistance.sql
    │   │   ├── getVerificationStatus.sql
    │   │   ├── selectEmail.sql
    │   │   ├── selectOnEmail.sql
    │   │   ├── selectOnUsername.sql
    │   │   ├── selectPassword.sql
    │   │   ├── select.sql
    │   │   ├── suggestions
    │   │   │   ├── bisexual.sql
    │   │   │   ├── heterosexual.sql
    │   │   │   └── homosexual.sql
    │   │   ├── updateEmail.sql
    │   │   ├── updatePassword.sql
    │   │   ├── updateRating.sql
    │   │   ├── update.sql
    │   │   ├── validate
    │   │   │   ├── email.sql
    │   │   │   └── username.sql
    │   │   └── verify.sql
    │   └── views
    │       ├── create.sql
    │       ├── selectCountOnViewed.sql
    │       ├── selectOnUsers.sql
    │       └── selectOnViewed.sql
    └── validation
        └── validation.js
```

# Requirements

You can use micro-frameworks, and all the libraries in the world for this project.
• We will consider that a “micro-framework” has a router, and eventually templating,
but no ORM, validators or User Accounts Manager.1
. As long as you respect these
constraints you are free to use what you like.

Your website must have a decent layout: at least a header, a main section and a
footer.
• Your website must be usable on a mobile phone and keep an acceptable layout on
small resolutions.

All your forms must have correct validations and the whole website must be secure.
This part is mandatory and will be checked extensively in defense. To give you an
idea, here are a few elements that are not considered secure:
◦ To have a “plain text” password stored in your database.
◦ To be able to inject HTML of “user” Javascript code in unprotected variables.
◦ To be able to upload unwanted content.
◦ To be able to alter a SQL request.

# Marking Sheet Stuff

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