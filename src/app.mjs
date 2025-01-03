import './config.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import './db.js';
import { User, Recipe } from './db.js';
import passport from 'passport';
import session from 'express-session';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// Body parser setup
app.use(express.urlencoded({ extended: false }));

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Logging middleware
app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.query);
  next();
});

// Functions for validation for the Security Requirement
function validateRecipeInput(req, res, next) {
  const { title, instructions } = req.body;
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).send('Invalid recipe title');
  }
  if (!instructions || typeof instructions !== 'string' || instructions.trim() === '') {
    return res.status(400).send('Invalid recipe instructions');
  }
  next();
}

function validateRegisterInput(req, res, next) {
  const { username, password } = req.body;
  if (!username || typeof username !== 'string' || username.trim() === '') {
    return res.status(400).send('Invalid username');
  }
  if (!password || typeof password !== 'string' || password.length < 6) {
    return res.status(400).send('Your password must be at least 6 characters long');
  }
  next();
}

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Passport local strategy
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      const match = await bcrypt.compare(password, user.hash);
      if (!match) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});


// First route
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/templates/index.html'));
});

// Route to render our first required form
app.get('/add-recipe', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/templates/add-recipe.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/templates/login.html'));
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/templates/register.html'));
});

app.post('/register', validateRegisterInput, async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, hash });
    await newUser.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

// API endpoint to fetch recipes
app.get('/api/recipes', isAuthenticated, async (req, res) => {
  try {
    const recipes = await Recipe.find({ author: req.user_id });
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching recipes or Not logged in correctly" });
  }
});

// Route to handle form submission
app.post('/add-recipe', validateRecipeInput, async (req, res) => {
  try {
    const { title, instructions } = req.body;
    const newRecipe = new Recipe({ title, instructions, createdAt: new Date() });
    await newRecipe.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving recipe");
  }
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;