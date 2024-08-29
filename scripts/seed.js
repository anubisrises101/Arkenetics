const mongoose = require('mongoose');
const Creature = require('../models/creature'); 

// mongoose.connect('insert your URI')
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.log(err));
const creaturesObject = creatures.CREATURES
const dataToInsert = Object.keys(creaturesObject).map(key => {
    return {
        ...creaturesObject[key]
    };
});

// Function to chunk the array
function chunkArray(dataArray, chunkSize) {
    const chunks = [];
    for (let i = 0; i < dataArray.length; i += chunkSize) {
      chunks.push(dataArray.slice(i, i + chunkSize));
    }
    return chunks;
  }
  
  async function seedDatabase() {
    try {
      // Connect to MongoDB
    //   await mongoose.connect('insert my DB string');
  
      // Extract and transform the nested object into an array
      
  
      // Chunk the data for batch insertion
      const chunkSize = 2;  // Set your preferred chunk size
      const dataChunks = chunkArray(dataToInsert, chunkSize);
  
      // Insert each chunk sequentially
      for (const chunk of dataChunks) {
        await Creature.insertMany(chunk);
        console.log(`Inserted ${chunk.length} documents`);
      }
  
      console.log('Seeding completed successfully.');
    } catch (error) {
      console.error('Error seeding the database:', error);
    } finally {
      // Close the connection
      await mongoose.connection.close();
    }
  }
  
  seedDatabase();

console.log(dataToInsert[0])
