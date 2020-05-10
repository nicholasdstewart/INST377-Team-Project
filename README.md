# FarmFind
Contributors: 
<a href = "https://github.com/nicholasdstewart">Nicholas Stewart</a>,  <a href = "https://github.com/jasjenand">Jasmine Anderson</a>, <a href = "https://github.com/Henley21">Henley Khranovich</a>

## README

<b>Title</b>: FarmFind

<b>Description</b>:

As a dynamic web application, <i>FarmFind</i> displays an interactive map and facets which allow users to filter farmers markets in Prince George's County, Maryland based on a variety of characteristics (e.g., payment methods offered, goods offered). In doing so, <i>FarmFind</i> leverages an API endpoint from <a href = "https://data.princegeorgescountymd.gov/">Data Prince George's</a> to provide an accessible interface for identifying and locating farmers markets in the area. In 2013, the United States Department of Agriculture (USDA) categorized Prince George’s County as an area consisting of a large number of “food deserts” — geographic areas that lack healthy, affordable food options. Although <i>FarmFind</i> does not resolve this difficult issue, it may serve as a building-block of future applications geared toward the amerlioration of food desert conditions in the county.

<b>Link to <a href = "https://inst377-farmfind.herokuapp.com/">FarmFind</a> via a Heroku instance.</b>

<b>Target Browsers</b>:

While we hope that <i>FarmFind</i> can be accessible to as many users as possible, the application has been tested and validated for the following browsers:

<ul> 
  <li>Google Chrome on MacOS (Version: 81.0.4044.138)</li>
  <li>Google Chrome on iOS (Version: 13.4.1)</li>
</ul>

<b>Link to the User Manual</b>:

<b>View the [Developer Manual](#dev_manual)</b>

## <a name = "dev_manual">Developer Manual</a>

### How to install application and all dependencies

<ol>
<li>Download a copy of the repository folder by either opening it in Github Desktop or downloading a ZIP file.</li>
<li>Locate the cloned repository folder via your terminal or command prompt.</li>
<li>Run the command <code>npm install</code> to download all dependencies.</li>
<li>Run the command `npm start` to boot up the server and view server-side messages (e.g., error messages). You should receive a message that reads <code>FarmFind is listening on port 3000!</code></li>
<li>Type the localhost port number from step (4) into your browser's address bar (e.g., <code>localhost:3000</code>).</li>
  <li>Confirm that you see <i>FarmFind</i>'s home page, and begin searching!</li>
</ol>
 
### How to run application on a server

### How to run tests for the software

### The API for the server application

The server application incorporates POST to do the following:
<ol>
  <li>Process user-entered form data</li>
  <li>Call a function ("dbQuery") to query the database of farmers markets and return results matching the specifications of the user input</li>
  <li>Return matching results to the front-end</li>
  
Within "dbQuery", we have leveraged the Fetch API to load JSON from the <a href = 'https://data.princegeorgescountymd.gov/resource/sphi-rwax.json'>Farmers Market dataset's API endpoint</a>.

### Expectations regarding known bugs

The following bugs have been detected:
  <ol>
    <li>Results are not filtered on Safari 11.1 on macOS (High Sierra).</li>
    <li>The Leaflet map does not display, and the page reloads when results are filtered on Firefox 57 on macOS (High Sierra).</li>
  </ol>

### Road-map for future development

<i>FarmFind</i> could improve in several aspects. First, the creation of a <b>profile page</b> based on a given farmers market of interest could provide additional information not currently featured on the home page. Additionally, a search bar could allow users to enter text input in order to identify farmers markets based on their name and/or location. Finally, the data could be expanded. <i>FarmFind</i> currently leverages data from 2015 which, compared to APIs, does not incorporate an expansive set of records.

             


