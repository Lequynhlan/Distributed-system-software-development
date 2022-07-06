# Distributed-system-software-development
** Name of the project :**
 With the enthusiastic guidance of Master Nguyen Nhat Hai, we have builed a small project, name of project is a website to manage a cafe using Reactjs technology.Project used for cafe shop owners. The shop owner is an admin who can manage the menu of the bar's drinks, view the sales history and sales statistics. In addition, the project is also used for employees, employees can perform sales operations easily and conveniently.
**** Features:****
 - Login account (staff, admin)
 - Create/Update/Delete drinks, categories
 - Register staff accounts
 - Check the history of orders
 - Search drinks
 - Filter drinks by price/ categories/ best sales/ time
 - Show detail drinks and related drinkss
 - Create orders
 - Check out bills
**Developing****
**Built With
In this project we use main technologies like :
  - React
  - Docker
  - MongoDB
  - Cloudinary
  - Reactstrap
  - Nodejs
**Prerequisties**
 Nodejs: 
  Version: 16.11.0
  Link: https://nodejs.org/en/download/
 
 ** Application that runs the code:**
 Visual Studio Code
   Link: https://code.visualstudio.com/download
**** Support application:****
  Docker:
 Link: https://www.docker.com/
  MongoDB:
   Link: https://www.mongodb.com/
  Cloudinary:
   Link: https://cloudinary.com/users/login?RelayState=%2Fconsole%2F%2Fmedia_library%2Ffolders%2Fhome%3Fcustomer_external_id%3Dc-7e873a567e16317110eb999832b5a0
  PayPal:
   Link: https://developer.paypal.com/developer/applications
**Installed: **
 git clone https://github.com/Lequynhlan/Distributed-system-software-development.git
** server:**
    cd server
    npm install
 **client:**
    cd web2
    npm install -g npm@8.13.2 
**Using:**
 server:
  .env:
    MONGODB_URL = YOUR MONGODB URI
    CLOUD_API_KEY = YOUR CLOUDINARY API KEY
    CLOUD_API_SECRET = YOUR CLOUDINARY API SECRET
    CLOUD_NAME = YOUR CLOUDINARY NAME
     (Link Secure Password Generator: https://passwordsgenerator.net/)
    REFRESH_TOKEN_SECRET = SECURE PASSWORD (LENGTH 100)
    ACCESS_TOKEN_SECRET = SECURE PASSWORD (LENGTH 50)
**  run code:**
    cd server
    npm run dev
** client: **   
    cd web2
    npm start


