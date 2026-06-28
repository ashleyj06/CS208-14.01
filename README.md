# CS208 Full Stack-Final Project
- Name: Ashley Johnson
- GitHub:[https//github.com/ashleyj06](https://github.com/ashleyj06)
- Term: Summer 2026

## Project Discription
This is a full-stack application for CS208, built with Node.js, Express, and
MariaDB (MySQL). The application is a website for Downtown Donuts that allows customers to browse niformation about the business, view the menu, learn about the company, and submit customer comments. The website features multiple pages, a responsive design, and a database-backed customer comment system.

## Install the Database Tables
To set up the database, run `install_db.sh`. This script will install MariaDB and start the server running. You only need to run this script once per
Codespace.

```bash
./setup_scripts/install_db.sh
```

Use the following for questions that the script asks:

- Switch to unix_socket authentication [Y/n] n
- Change the root password? [Y/n] Y
- Set the password to 12345
- Remove anonymous users? [Y/n] Y
- Disallow root login remotely? [Y/n] Y
- Remove test database and access to it? [Y/n] Y
- Reload privilege tables now? [Y/n] Y

Test to make sure the db is running:

```bash
sudo service mariadb status
```

## Create the Database Tables
Creat the inital tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```
## Install Dependencies
Install the required dependencies using npm:
```bash
npm install
```
## Run Application
Start the application using the following command:
```bash
npm start
```
## Edge Cases
- 
- It says please fill out this field and wont show the whitespace comment
- 
- If the user rapidly double clicks the submit button it will make two of the same comments

## Source
Chatgpt:[https//chatgpt.com](https://chatgpt.com)