// tests/app.test.js
import request from 'supertest';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../src/db.js';
import bcrypt from 'bcrypt';
import { jest } from '@jest/globals';
import mongoose from 'mongoose';


afterAll(async () => {
    await mongoose.connection.close(); // Close the MongoDB connection
});

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'test_secret',
    resave: false,
    saveUninitialized: false,
}));

beforeAll(() => {
    app.use(passport.initialize());
    app.use(passport.session());
});

// Mock Passport Local Strategy
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

// Define routes
app.get('/', (req, res) => {
    res.status(200).send('Home Page');
});

app.get('/login', (req, res) => {
    res.status(200).send('Login Page');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

// Test suite
describe('Express App', () => {
    it('should return 200 OK for GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Home Page');
    });

    it('should return 200 OK for GET /login', async () => {
        const res = await request(app).get('/login');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Login Page');
    });

    it('should redirect to /login on failed login', async () => {
        // Mock User.findOne to return null
        jest.spyOn(User, 'findOne').mockImplementation(() => null);

        const res = await request(app)
            .post('/login')
            .send({ username: 'wronguser', password: 'wrongpass' });

        expect(res.statusCode).toEqual(302);
        expect(res.headers.location).toEqual('/login');
    });

    // it('should redirect to / on successful login', async () => {
    //     // Mock User.findOne to return a valid user
    //     jest.spyOn(User, 'findOne').mockImplementation(async () => ({
    //         id: '123',
    //         username: 'testuser',
    //         hash: await bcrypt.hash('testpass', 10),
    //     }));

    //     // Mock bcrypt.compare to return true
    //     jest.spyOn(bcrypt, 'compare').mockImplementation(async () => true);

    //     const res = await request(app)
    //         .post('/login')
    //         .send({ username: 'testuser', password: 'testpass' });

    //     expect(res.statusCode).toEqual(302);
    //     expect(res.headers.location).toEqual('/'); // Expect redirect to '/'
    // });
});
