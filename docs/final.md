<h1> Final Report</h1>

<h2>Overview</h2>

<p><b>Title of Web Application</b>: <i>FarmFind</i></p>

<p><b>Members</b>: Jasmine Anderson, Henley Khranovich, Nicholas Stewart</p>

<p><b>Link to application via Heroku instance</b>: <a href='https://inst377-farmfind.herokuapp.com/'>https://inst377-farmfind.herokuapp.com/</a>

<h2>Information Problem</h2>

<p> In 2013, the United States Department of Agriculture (USDA) categorized Prince George’s County as an area consisting of a large number of “food deserts” — geographic areas that lack healthy, affordable food options.  
Officials even acknowledged the existence of such areas in 2019 upon introducing a new grocery store option called Good Food Market to the Seat Pleasant area. 

<h2>Identified Stakeholders & Target Browsers</h2>

<p>Stakeholders of <i>FarmFind</i> include:

<ul>
<li><b>The general public</b></li>
<li><b>Beginning and experienced farmers</b></li>
<li><b>Beneficiaries of various nutrition programs</b>:
  <ul>
    <li>Supplemental Nutrition Assistance Program (SNAP) households</li>
    <li>Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)  beneficiaries</li>
    <li>Seniors Farmers' Market Nutrition Program (SFMNP) - eligible senior citizens</li>
  </ul>
</li>
</ul>

<h2>Data Source</h2>

<p>Interested in the topic of food scarcity, we decided to leverage the <a href='https://data.princegeorgescountymd.gov/resource/sphi-rwax.json'>Prince George's County Farmers Market Data endpoint</a>. The data contains 21 records and 37 columns, including a unique identifier called <code>farmers_market_id</code>. Although the data has not been updated since June 8th 2015 (only three days after the dataset was created), we deemed the collection to be an appropriate source given its consistent format and incorporation of geographic information (e.g., longitude and latitude coordinates).

<h2>Chosen Strategies</h2>

<p> When designing our wireframes, we sought to incorporate a global navigation menu with clickable elements linking to other in-app pages. To allow users to quickly search for farmers markets of interest, we designed a filter-based system on the foundation of an HTML form. We believed that the form "results" could take the form of clickable listings that direct users to the profiles of farmers markets. Additionally, we envisioned an interactive map that could display all results. In our initial design, users would be directed to a given market's profile page upon clicking that same market's pop-up.

<h2>Technical System Decision Rationale</h2>

<p>We chose to use the following technologies to design and develop our appliction:</p>
  <ul>
    <li>
    <b>HTML, CSS, and JavaScript</b> served as a foundation. Using HTML, we created an initial structure and, with CSS, we added stylistic 
    elements, including colors, fonts, animations. JavaScript on the front-end edits (and even generates new) HTML elements.
    </li>
    <li>
    We used <b>Leaflet</b> to generate interactive maps focusing on farmers markets in Prince George's County.
    </li>
    <li>
    <b>Express.js</b> (within Node.js) served as a web application framework that primarily allowed us to write handlers for requests corresponding to 
    different HTTP verbs (e.g., POST). 
    </li>
    <li>
    We used <b>NeDB</b>, a database management system, to store data from the Prince George's County Farmers Market Data API endpoint. 
    NeDB allowed us to create a "datastore," which is the equivalent of a collection in the context of MongoDB.
    </li>
  </ul>

<h2>Contributions to Problem Solutions</h2>

<i>FarmFind</i> provides two major affordances:
<ol>
  <li><b>Flexibility</b> afforded by the ability to filter farmers markets based on certain characteristics</li>
  <li><b>Increased locational awareness</b> of farmers markets provided through the display of an interactive map</li>
</ol>

Overall, <i>FarmFind</i>'s value is founded upon visual, dynamic geospatial information filterable through user input.

<h2>Challenges Faced and Impact on Final Design</h2>

<p>Our group encountered several challenges when designing and developing the application. First, using SQLite to insert data proved to be extremely challenging. Ultimately, we chose to leverage NeDB instead on account of its clear syntax and documentation. 
Additionally, we did not manage to add an image to the left-corner of the global navigation bar. Instead, we opted for a simple approach — using a different font style to differentiate the application's name
from the other text on the page. Also, our group relied on the POST method to both accept user input and send matching database results to the front-end as a result of difficulties involving the incorporation of GET and PUT.</p>

<h2>Possible Future Work Directions</h2>

<p>
  Developers may improve the current web application in several areas. First, the application has experienced little success on browsers besides Google Chrome. Additional testing on other browsers could contribute to <i>FarmFind</i>'s accessibility. Additionally, the incorporation of custom error messages may aid users and other developers in understanding mistakes as well as the proper procedures corresponding to in-app navigation. Finally, the addition of a dynamically-changing profile page to view additional information regarding farmers markets may benefit those seeking to view certain details, including hours of operation.
</p>


