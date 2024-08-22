

I need to establish in the /model directory a foods.ejs file 
I need to create a new file for my mongoose schemas and input data I need to track
I need to establish a GET with a route to './views/food/' to SHOW all the foods I have set up to track such as name, inventory, expiration, ....
Next to add a way to GET the form to CREATE a NEW food with the route '/views/foods/new' 
I need to establish a POST with a route of './views/food' to CREATE the new food
Then establish a second GET with a route to './views/food/:foodid' to show a SPECIFIC food and its information
I need to then apply those updates with PUT to the route './views/:foodId/edit?' to save changes to the chosen food
I need to establish a PUT with a route to './views/food/:foodId??' to UPDATE information on a specific food
Next establish a way to DELETE saved foods by id  with a route './views/foods/:fruitId' 

create the new, foods, edit files inside the view directory
make sure to use the res.render() to view said files
Build out the HTML for the NEW site must include forms to create foods
Build the POST route to handle CREATE functions for data sent by the form ACTION
Repeat for each process for the remaining routes in Server.js and views.ejs
TEST after completing each route to ensure functionality

// Add boilerplate for index.ejs home page/landing page
// Change the title of the document to reflect the project
// Add the Nav bar to the top of the body
// add the introductory message on the index.ejs
// give instructions on how to work the site

// create the root route linking the index.ejs to the server.js 
// Create the remaining new.ejs, index.ejs, and edit.ejs, and show.ejs files in the views folder 
// link each new EJS file to a route in the server.js file, test after each routes completion
// Create the foods.js schema file in the models directory
// inside foods.js define the constant foodSchema and assign the objects needed to be tracked.
// Define Food to the schema model then EXPORT the module Food 
// Create the route function for each page needed : SHOW, INDEX, NEW, and EDIT

// in new.ejs write out the html element for forms to input the NAME data, INVENTORY data, and the EXPIRATION data. (use labels and input fields)
// establish a <button> to submit your changes and redirects you to the CREATE route where it SHOWS the new food you added by ID 
// In the create.ejs write the HTML elements to display the created foods NAME, how many are in INVENTORY, and how long until they EXPIRE
// moving to index.ejs file write the HTML elements to display the foods currently saved in the database by using forEach and referencing the ID of each food to list
// Upon selecting a food item in the index.ejs it directs you to the foods page where it SHOWS all the info of the food you selected
// Write in the HTML element to create a button below the food info to DELETE the food.
// Write the function to deleteFood by findByIdAndDelete and redirect to '/index.ejs'
