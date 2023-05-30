# movie-data

For this project, I developed a movie data website. The site is designed to display information from a provided JavaScript object about various movies. I populated the user interface with this data to enable users to easily access different movies based on their release dates.

&nbsp;

 interface, as well as how I would incorporate the JavaScript data provided into the design

&nbsp;

**BUILDING:**

- To start the implementation of the movie data website, I began by incorporating the provided JavaScript code into the project. From there, I focused on developing the HTML section where users would interact with the data. Using my wireframe as a reference, I began coding a navigation section that would allow users to filter movies based on their release date. To accomplish this, I utilised checkboxes that would allow users to select different date ranges and view the corresponding movies

- Once I had completed the HTML section for the movie filter, I proceeded to implement the CSS styling. I then added my own JavaScript code to link and integrate the filter functionality. The implemented code enables users to filter movie cards by their release year range, by selecting checkboxes that correspond to their preferred date ranges. When the "apply filters" button is clicked, the code selects the checked checkboxes, creates an array of the selected years, and then iterates through each movie card to determine if its release year falls within the selected range. If it does, the movie card is displayed, and if not, it is hidden from view. 

- After implementing the functionality, I proceeded to style the remaining sections of the web page, with a focus on the main section where the movie cards would be displayed. To lay out the cards, I used CSS grid, and added information to each card such as an image of the movie, the movie name, and the release year. Once the main components were in place, I added finishing touches such as a colour theme and background to enhance the overall look and feel.

&nbsp;

 **DEBUGGING:**

- During the development of this project, I encountered an error when attempting to get the provided JavaScript code to work with the movie filter. Initially, the code was only filtering and displaying one movie. To fix this, I modified my code to loop through each year until all movies released within the selected year range were displayed. This change enabled the filter functionality to work. 
