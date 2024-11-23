import puppeteer from 'puppeteer';
import app from '../../src/app.mjs';
import http from 'http';
import mongoose from 'mongoose';
import { User } from '../../src/db.js';
import bcrypt from 'bcrypt';


let server, port;

describe('Functional Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        // Start the server dynamically
        server = http.createServer(app);
        await new Promise((resolve) => server.listen(0, resolve));
        port = server.address().port;

        // Launch Puppeteer
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
        server.close();
        await mongoose.connection.close(); // Close MongoDB connection
    });

    beforeEach(async () => {
        await User.deleteMany({}); // Remove all users
        await User.create({
            username: 'testuser',
            hash: await bcrypt.hash('testpass', 10),
        });
    });

    test('User can log in successfully', async () => {
        await page.goto(`http://localhost:${port}/login`);
        await page.type('input[name="username"]', 'testuser');
        await page.type('input[name="password"]', 'testpass');
        await page.click('button[type="submit"]');
        await page.waitForNavigation();
        expect(page.url()).toBe(`http://localhost:${port}/`);
    });
});
