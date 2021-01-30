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
