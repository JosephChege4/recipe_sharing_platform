import './config.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import './db.js';
import hbs from 'hbs';
import { User, Recipe } from './db.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// configure app to use hbs as templating library
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Body parser setup
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Logging middleware
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.query);
  next();
});

// First route
app.get('/', async (req, res) => {
  const recipes = await Recipe.find({});
  res.render('index', { recipes });
});

// Route to render the form
app.get('/add-recipe', (req, res) => {
  res.render('add-recipe');
});

// Route to handle form submission
app.post('/add-recipe', async (req, res) => {
  try {
    const { title, instructions } = req.body;
    const newRecipe = new Recipe({ title, instructions, createdAt: new Date() });
    await newRecipe.save();
    res.redirect('/'); // Redirect to recipes list
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving recipe");
  }
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));