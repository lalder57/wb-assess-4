import express from 'express';
import morgan from 'morgan';  // Helps with logging for debugging; not necessary
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

const app = express ();

// Set up middleware
app.use(morgan('dev')) // while in the dev environment, use morgan for additional logging, etc. 
app.use(express.urlencoded({ extended: false}))  // Allows express to interpret body objects from POST requests
app.use(express.static('public')) // for certain imports, check the 'public' directory first
app.use(express.json()) // lets server and front-end know that they'll be communicating with JSON

import handlerfunctions from './controller.js';

// Routes:
// Before creating endpoints, address the following:
// - What is the purpose of this endpoint
// - Will I need any queries/param/body objects? 
// - What will the endpoint string look like? (url)
// - What should the response look like? (keep consistent)

// First Route is going to GET links, won't need a body/query/params, 
app.get('/api/links', handlerFunctions.getLinks)

// Second Route is going to add a link (POST), will need a body
app.post('/api/addLink', handlerFunctions.addLink)

// Third Route is going to DELETE a link, will need a body.
app.delete('/api/deleteLink/:id', handlerFunctions.deleteLink)

// Fourth Route is goint to edit a link (PUT), will need a body.
app.put('/api/editlink', handlerFunctions.editLink)




// Open up door to server
ViteExpress.listen(app, 8000, () => console.log("We're live at http://localhost:8000"))