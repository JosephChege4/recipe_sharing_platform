// 1ST DRAFT DATA MODEL
import './config.mjs';
import mongoose from 'mongoose';

console.log("Connecting to MongoDB with DSN:", process.env.DSN);
mongoose.connect(process.env.DSN)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Users
// * Users get a username and a password hash for authentication
// * They can have 0 or more favorite recipes and recipes they've created
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true }, // password hash
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }], // Array of favorite recipes
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] // Array of recipes created by the user
});

// Ingredients within a recipe
// * Includes name and quantity (e.g., "2 cups of flour")
// * This is embedded directly within the Recipe schema as an array
const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true }
}, {
  _id: true
});

// Recipes
// * Each recipe must have a related user (author)
// * Recipes can have 0 or more ingredients and optional tags
// * Recipes also include instructions and a timestamp
const RecipeSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  title: { type: String, required: true },
  ingredients: [IngredientSchema],
  instructions: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
// const Ingredient = mongoose.model('Ingredient', IngredientSchema);

export { User, Recipe };