// 1ST DRAFT DATA MODEL
import mongoose from 'mongoose';

// Users
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true }, // password hash
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }], // Array of favorite recipes
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] // Array of recipes created by the user
});

// Recipes
const RecipeSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  ingredients: [IngredientSchema],
  instructions: { type: String, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

// Ingredients for recipes
const IngredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String, required: true }
}, {
  _id: true
});