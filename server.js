const express = require('express'); 
const {faker} = require('@faker-js/faker'); 
// import { faker } from '@faker-js/faker';
const app = express(); 
const port = 8000;

app.use(express.json()); 
app.use(express.urlencoded( {extended: true } )); 
///////////////////////////////////////////////////

const userList = [
  {
    name: faker.name.findName()
    , email: faker.internet.email()
  }
  , {
    name: faker.name.findName()
    , email: faker.internet.email()
  }
  , {
    name: faker.name.findName()
    , email: faker.internet.email()
  }
  , {
    name: faker.name.findName()
    , email: faker.internet.email()
  } 
  , {
    name: faker.name.findName()
    , email: faker.internet.email()
  } 
] ; 

app.get('/', (request, response) => {
  response.send("JRF hello world!  Ya hearin me? yes?")

}); 

app.get('/api/userList', (request, response) => {
  response.json(userList); 

}); 

app.post('/api/userList', (request, response) => {
  console.log(request.body); 
  userList.push(request.body); 
  response.json(userList); 
  console.log(userList)
}); 


////////////////////////
app.listen(port, () => {
    console.log(`JRF Express Server is running on port ${port}`); 
}); 

// const express = require("express");
// const app = express();

// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );
