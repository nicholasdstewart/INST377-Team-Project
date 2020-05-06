// ***************************************** //
// Required libraries for the server to work //
// ***************************************** //

import express from 'express';
import fetch from 'node-fetch';
// const sqlite3 = require('sqlite3').verbose(); // We're including a server-side version of SQLite, the in-memory SQL server.
// const open = sqlite3.open; // We're including a server-side version of SQLite, the in-memory SQL server.
import sqlite3 from 'sqlite3';
import open from 'sqlite';
/*import writeUser from './libraries/writeuser';*/
import { router } from './server_files/api_router.js';
import dbTest from './server_files/db_querying.js';

// Defining initial settings for the in-memory SQL database
const dbSettings = {
   filename: './tmp/database.db', // defines the location of the database
   driver: sqlite3.Database // defines the computer program that implements a protocol for a database connection
}; 
  
  const app = express();
  const port = process.env.PORT || 3000;
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  //app.use('/api', routes);

// ********************************************** //
// NOTE: Function to PULL DATA from PG County API //
// ********************************************** //
function processDataForFrontEnd(req, res) {
  const baseURL = 'https://data.princegeorgescountymd.gov/resource/sphi-rwax.json'; // Enter the URL for the data you would like to retrieve here

  // Your Fetch API call starts here
  // Note that at no point do you "return" anything from this function -
  // it instead handles returning data to your front end.
    fetch(baseURL)
      .then((r) => r.json())
      .then((data) => {
        res.send({ data: data }); // here's where we send data to our API
      })
      .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
}

// ************************************************** //
// NOTE: Function to SEND FORM DATA to db_querying.js //
// ************************************************** //

  /****************/
  /* API Endpoint */
  /****************/

  app.route('/api')
    // GET REQUEST HANDLING BELOW: //
    /*
    .get((req, res) => {

      //console.log("/api get request")
      //res.json( {test: '123'})

    //})  
    */
    // POST REQUEST HANDLING BELOW: //
    .post((req, res) => {
      console.log("/api post request", req.body);

      dbTest(req.body)
          .then((matches) => {
            console.log(matches);
            res.json(matches); // sends this back to the front-end
          })
    })
    // PUT REQUEST HANDLING BELOW: //
    .put((req, res) => {
      //console.log("/api put request", req.body);
    }) // 

  app.listen(port, () => {
    console.log(`The app is listening on port ${port}!`)
  });

  