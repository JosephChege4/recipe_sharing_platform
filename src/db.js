// 1ST DRAFT DATA MODEL
import './config.mjs';
import mongoose from 'mongoose';

console.log("Connecting to MongoDB with DSN:", process.env.DSN);
mongoose.connect(process.env.DSN)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Users
// Users get a username and a password hash. I'll do authentication later.
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true }, // password hash
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }], // Array of favorite recipes
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] // Array of recipes created by the user
});

// Ingredients within a recipe
const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true }
}, {
  _id: true
});

// Recipes
const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructions: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  ingredients: [IngredientSchema],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  tags: [String]
});

const User = mongoose.model('User', UserSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
// const Ingredient = mongoose.model('Ingredient', IngredientSchema);

export { User, Recipe };