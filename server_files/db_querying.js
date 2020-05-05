import sqlite3 from 'sqlite3';
import fetch from 'node-fetch';
import nedb from 'nedb';
import require from 'requirejs'
//import {open} from sqlite3
//import { getAPIData } from '../server.js'

const Datastore = require('nedb');

export function dbTest() {

    const database = new Datastore('database.db') // creating a new database
    database.loadDatabase();

    // reset of the database records
    database.remove({}, { multi: true }, function (err, numRemoved) {
    });

    
    
   fetch('https://data.princegeorgescountymd.gov/resource/sphi-rwax.json')
    .then((r) => r.json())
    .then((jsonData) => {
        //console.log(jsonData);
        database.insert(jsonData);
        console.log('data inserted');

        // forcing single compaction of the database (ensuring that delete statements are removed)
        database.persistence.compactDatafile()
        

    
    })
    .catch((err) => {
        console.log(err);
        res.redirect('/error');
      });
    
}
