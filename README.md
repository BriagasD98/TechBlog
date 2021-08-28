# TechBlog
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Deployment](#Deployment)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Questions](#Questions)
  <br/>
  
  ## Installation
  1) clone the repository by entering the following command in the command line: <br/> 
  ```
  git clone git@github.com:
  ```
  2) Install the necessary dependencies by entering the following commands into the command line: <br/>
  ```
  npm init -y
  ```
  ```
  npm i mysql2 sequelize
  ```
  ```
  npm i express
  ```
  ```
  npm i dotenv
  ```
  ```
  npm i express-handlebars
  ```
  ```
  npm i express-session
  ```
  ```
  npm i connect-session-sequelize
  ```
  **I have hidden my sql credentials. You must input your own personal mysql user and password into a new .env file on your local computer to use the application!**
  
  <br/>
  
  ## Usage
  
  <br/>
  
  In your **MySQL command line**, enter the following commands to setup the database:
  
  ```
  SOURCE db/schema.sql;
  ```
  ```
  USE techblog_db;
  ```
  Once all necessary dependencies have been installed, go to the command line and enter the following commands:
  ```
  npm run seed
  ```
  ```
  npm start
  ```
  <br/>
  
  **npm run seed** will seed data into the database and **npm start** will connect to the database to so users
  may perform RESTful CRUD operations. **Insomnia Core is our testing app of choice!**
  
  <br/>
  
  ![Screenshot (66)](https://user-images.githubusercontent.com/83102464/131232849-12bc9d5e-0315-402b-849a-825f41abf356.png)
  
  <br/>
  
  ![Screenshot (67)](https://user-images.githubusercontent.com/83102464/131232854-fff01e43-1ca5-43bd-9417-30822b0b410f.png)
  
  <br/>
  
  ![Screenshot (68)](https://user-images.githubusercontent.com/83102464/131232857-e284f936-b3f0-42bc-8f09-3dc7429cd4cb.png)

  <br/>
  
  ![Screenshot (69)](https://user-images.githubusercontent.com/83102464/131232858-4dee5f49-099b-4afd-b042-3ff893e0e7a1.png)

  <br/>
  
  ![Screenshot (70)](https://user-images.githubusercontent.com/83102464/131232859-d16ccace-ca5c-4f4b-a87f-8001ff331466.png)
  
  <br/>

  ## Deployment
  To see a deployed and live **TechBlog**, please follow this link: <br/>
  https://tranquil-tundra-80963.herokuapp.com/login
  <br/>

  ## License
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  For License information, visit:
  [MIT](https://opensource.org/licenses/MIT)
  <br/>
  <br/>
  ## Contributing
  Contact me Via Email or Github for more information on how to contribute!
  <br/>
  <br/>
  
  ## Questions  
  If you have questions about the project, feel free to reach out to me via Github or Email:
  <br/>
  **My GitHub profile** is [BriagasD98](https://github.com/BriagasD98)
  <br/>
  My Email: [briagasdavid@yahoo.com](mailto:briagasdavid@yahoo.com).
