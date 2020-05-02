// ********************************* //
// Setting up the API for the server //
// ********************************* //

export function router() {
    
app.route('/api')
  // GET REQUEST HANDLING BELOW: //
  .get((req, res) => {
    //processDataForFrontEnd(req, res)
    console.log("/api get request", req.body)
  })
  // POST REQUEST HANDLING BELOW: //
  .post((req, res) => {
    console.log("/api post request", req.body);
  })
  // PUT REQUEST HANDLING BELOW: //
  .put((req, res) => {
    console.log("/api put request", req.body);
  })
}
