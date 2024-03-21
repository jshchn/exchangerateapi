// Add middleware / dependencies
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Array of exchange rates to serve
let exchange = [
    { id: 1, exchange: "USD/MYR=4.70" },
    { id: 2, exchange: "USD/SGD=1.34" },
    { id: 3, exchange: "SGD/MYR=3.52" },
    { id: 4, exchange: "USD/CNY=7.20" },
    { id: 5, exchange: "SGD/USD=0.75" },
  ];

// Enabling CORS for all requests
app.use(cors());

// Enabling body parser middleware to parse JSON bodies into JS objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the root entry point for the REST API
app.get('/', (req, res) => {
  res.send('Welcome to the Exchange Rate REST API. Visit /exchange to see the list.');
});

// Define a route to retrieve all exchanges
app.get('/exchange', (req, res) => {
    res.send(exchange);
  });


// // Define a route to add a new joke
// app.post('/jokes', (req, res) => {
//   // Generate a new ID for the joke
//   const newId = exchange[exchange.length - 1].id + 1;

//   // Get the joke from the request body
//   const joke = req.body;
  
//     // Output the joke to the console for debugging
//     console.log({ id: newId, joke: joke });
//     exchange.push({ id: newId, joke: joke });
  
//     // res.send('A new Joke has been added to the array.');
//     res.send({ id: newId, joke: joke });
//   });

// // Define a route to delete a joke
// app.delete('/jokes/:id', (req, res) => {
//     // Get the joke ID from the request parameters
//     const jokeId = req.params.id;
    
//     // Find the joke with the matching ID
//     const jokeIndex = exchange.findIndex(joke => joke.id == jokeId);
    
//     // Remove the joke from the array
//     exchange.splice(jokeIndex, 1);
    
//     // Send a message as a response
//     res.send({ message: "Joke deleted successfully" });
//   });

// Start the REST API Server
app.listen(port, () => console.log(`Exchange Rate API listening on port ${port}!`));

//Starts the nodeman tool from the dev script defined in the project’s package.json file
// npm run dev