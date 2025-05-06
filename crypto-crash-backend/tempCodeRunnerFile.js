// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('cryptoCrash');

// Create a new document in the collection.
db.getCollection('players').insertOne({
    name: "TestUser",
    wallet: {
      BTC: 1.5,
      ETH: 2
    }
  });
  
