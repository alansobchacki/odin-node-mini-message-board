Project: Mini Message Board
=============

A basic message board where users can leave messages for others.

Here's the [live project demo.](https://odin-node-message-board.adaptable.app/)

About
-----

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) [Node](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) curriculum. It is the second project required for completion of the Node Course [2/9].

These were the project requirements:

- [x] Use express-generator to set up a basic project using whichever templating language you prefer (I chose EJS).
- [x] Create 2 routes: the index ("/") and a new-message form ("/new").
- [x] Create an array at the top of your index router called messages and put a couple of sample messages inside of it.
- [x] Next, in your index template (in the "views" folder) loop through the messages array using whichever templating language you selected and for each one, display the user, text and the date the message was added.
- [x] In the router add a router.get() for the "/new" route and point it to a template named "form". In the views directory create your form template. Add a heading, 2 inputs (one for the author’s name and one for the message text) and a submit button.
- [x] At the end of the router.post() function use res.redirect('/') to send users back to the index page after submitting a new message.
- [X] Deploy your app in a PaaS of your choice (I chose Adaptable).

What I Learned
-----

Building a basic Node/Express app, HTTP methods (mostly GET and POST), middlewares, MVC, CRUD, relational and non-relational databases... back-end development looks fun.

Notes
-----

My first back-end powered app!

This is a very simple app that will only create and display messages. It has no database, so any new messages will disappear after the server hibernates (don't be naughty).

Database management and more advanced features to come in the future projects!
