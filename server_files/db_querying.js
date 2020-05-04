import sqlite3 from 'sqlite3';
//import {open} from sqlite3

export function dbTest() {
    //const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database(':memory', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');

        // Insert data into SQL database
        //db.run('CREATE TABLE markets(name text)');

        db.run(`INSERT INTO markets(name) VALUES(?)`, ['Example Market'], function(err) {
            if (err) {
              return console.log(err.message);
            }
            // get the last insert id
            console.log(`A row has been inserted with rowid ${this.lastID}`);
          });
    });

    db.close((err) => {
        if (err) {
        return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}