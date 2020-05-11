// ***************************************** //
// Required libraries for the server to work //
// ***************************************** //

import express from "express";
import dbQuery from './server_files/db_querying.js';
  
  const app = express();
  const port = process.env.PORT || 3000;
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  //app.use('/api', routes);

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

      dbQuery(req.body)
          .then((matches) => {
            //console.log(matches);
            res.json(matches); // sends this back to the front-end
          })
    })
    // PUT REQUEST HANDLING BELOW: //
    .put((req, res) => {
      //console.log("/api put request", req.body);
    }) // 

  app.listen(port, () => {
    console.log(`FarmFind is listening on port ${port}!`)
  });

  