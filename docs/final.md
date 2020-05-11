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

<h2>Chosen Strategies</h2>

<h2>Technical System Decision Rationalie</h2>

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

<h2>Challenges Faced and Impact on Final Design</h2>

<p>Our group encountered several challenges when designing and developing the application. First, using SQLite to insert data proved to be extremely challenging. Ultimately, we chose to leverage NeDB instead on account of its clear syntax and documentation. 
Additionally, we did not manage to add an image to the left-corner of the global navigation bar. Instead, we opted for a simple approach — using a different font style to differentiate the application's name
from the other text on the page. Also, our group relied on the POST method to both accept user input and send matching database results to the front-end as a result of difficulties involving the incorporation of GET and PUT.</p>

<h2>Possible Future Work Directions</h2>


