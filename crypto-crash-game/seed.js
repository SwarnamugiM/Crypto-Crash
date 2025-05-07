// seed.js
const { MongoClient } = require('mongodb');

async function seedDatabase() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('cryptoCrash');

  // Insert Players
  await db.collection('players').insertMany([
    {
      name: 'Alice',
      wallet: { BTC: 1.5, ETH: 3 }
    },
    {
      name: 'Bob',
      wallet: { BTC: 2.1, ETH: 0.5 }
    },
    {
      name: 'Charlie',
      wallet: { BTC: 0.9, ETH: 1.1 }
    },
    {
      name: 'David',
      wallet: { BTC: 3.0, ETH: 2.2 }
    }
  ]);

  // Insert Game Rounds
  await db.collection('rounds').insertMany([
    {
      roundId: 1,
      crashMultiplier: 2.3,
      timestamp: new Date()
    },
    {
      roundId: 2,
      crashMultiplier: 1.7,
      timestamp: new Date()
    }
  ]);

  console.log('✅ Database seeded successfully');
  client.close();
}

seedDatabase();
