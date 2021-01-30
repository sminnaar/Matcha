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

## Running the App and Server

Two instances of npm have to be run:
- cd into app and server in two seperate terminals

- Run *npm install && npm update* in both

- Then run *npm start* in both

Site is hosted on:

	http://localhost:3000/
