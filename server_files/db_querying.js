import express from 'express';
import sqlite3 from 'sqlite3';
import fetch from 'node-fetch';
import nedb from 'nedb';
import require from 'requirejs'
//import { formDataQuery } from '../server.js'
//import { raw_user_data } from '../server.js'
//const server_module = require('../server.js');


const Datastore = require('nedb');

function dbTest(raw_user_data) {

  return new Promise((resolve, reject) => {

    const database = new Datastore('database.db') // creating a new database
    database.loadDatabase();

    // reset of the database records: 
    // Reference: https://github.com/louischatriot/nedb/issues/84
    database.remove({}, { multi: true }, function (err, numRemoved) {
    });

    console.log("Database reset");

   fetch('https://data.princegeorgescountymd.gov/resource/sphi-rwax.json')
    .then((r) => r.json())
    .then((jsonData) => {
        //console.log(jsonData);
        database.insert(jsonData);
        console.log('data inserted');

        // forcing single compaction of the database (ensuring that delete statements are removed)
        database.persistence.compactDatafile()
        console.log('database compacted')

        // ADD QUERIES HERE 

        // Example Query:
        database.find(raw_user_data, function (err, docs) {
            // If no document is found, docs is equal to []
            console.log(docs[1])
            resolve(docs) // sends back all the matching documents back to the server's post request
          });
    })

  })
    .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
    
}

export default dbTest
