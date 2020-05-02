// ***************************************** //
// Required libraries for the server to work //
// ***************************************** //

import express from 'express';
import fetch from 'node-fetch';
// const sqlite3 = require('sqlite3').verbose(); // We're including a server-side version of SQLite, the in-memory SQL server.
// const open = sqlite3.open; // We're including a server-side version of SQLite, the in-memory SQL server.
import sqlite3 from 'sqlite3';
/*import { open } from 'sqlite';*/
/*import writeUser from './libraries/writeuser';*/
import { router } from './server_files/api_router.js';

// Defining initial settings for the in-memory SQL database
//const dbSettings = {
//    filename: './tmp/database.db', // defines the location of the database
//   driver: sqlite3.Database // defines the computer program that implements a protocol for a database connection
//}; 
  
  const app = express();
  const port = process.env.PORT || 3000;
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  //app.use('/api', routes);

  app.listen(port, () => {
    console.log(`The app is listening on port ${port}!`)
  });