// ********************************* //
// Setting up the API for the server //
// ********************************* //

app.route('/api')

  // GET REQUEST HANDLING BELOW: //
  .get((req, res) => {
    
  })
  // POST REQUEST HANDLING BELOW: //
  .post((req, res) => {
    console.log("/api post request", req.body);
  })
  // PUT REQUEST HANDLING BELOW: //
  .put((req, res) => {
    console.log("/api put request", req.body);
  })

app.listen(port, () => {
  console.log(`The app is listening on port ${port}!`)
});