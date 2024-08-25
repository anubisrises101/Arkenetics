# Arkenetics

A data tracker for the Video game Ark Survival Evolved. Use this app to keep track of your dino breeders.


// \create the root route linking the index.ejs to the server.js
// \Create the remaining new.ejs, index.ejs, and edit.ejs, and show.ejs files in the views folder
// link each new EJS file to a route in the server.js file, test after each routes completion
// \Create the foods.js schema file in the models directory
// inside foods.js define the constant foodSchema and assign the objects needed to be tracked.
// \Define Food to the schema model then EXPORT the module Food



I've been recommending this order of user stories:
AAU, after logging in/signing up, I want to see my list of creatures.
This is where you query for the creatures that belong to the user and render creatures/index.ejs listing all of the creatures. FYI, this is index functionality for creatures.



AAU, I want to click [ADD CREATURE] in the navbar to see a list of all available creatures in a dropdown to choose from click the [ADD CREATURE] button to see the newly added creature's detail page (or see the newly added creature appear in my list of creatures).  FYI, this is new (seeing the dropdown) + create functionality (handling the form being submitted when the user clicks the button.  Your choice on where to redirect to after creating (copying) the creature - one of those two options above is typical:  see a detail page for the new creature (show functionality) or the list of creatures (index functionality).






9:09
You probably first would choose to redirect to index functionality since you would have that already implemented.
9:09
But then you would implement show next...
9:11





AAU, when viewing the list of my creatures, I want to click the [DETAILS] button (actually a link) displayed next to each of my creatures to see a page of its details.  This is the show functionality for creatures.
9:12




After implementing show functionality, you could then go back and update the redirect in the create action to redirect to the detail (show) page instead of the index page.