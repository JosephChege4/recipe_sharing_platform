# Milestone 04 

## NetID
jcm9824

## Name
Joseph Chege Mungai

## Repository Link
[Repository](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4.git)

## URL for Deployed Site
[Deployed Site](http://linserv1.cims.nyu.edu:12174/)

## URL for Form 1 (from Previous Milestone)
[Add Recipe Form](http://linserv1.cims.nyu.edu:12174/add-recipe)

## URL for Form 2 (for Previous Milestone)
[Register Form](http://linserv1.cims.nyu.edu:12174/register)

## URL for Form 3 (for Current Milestone)
[Login Form](http://linserv1.cims.nyu.edu:12174/login)

## URL for Form 4 (for Current Milestone)
[AJAX Interaction (Fetch)](http://linserv1.cims.nyu.edu:12174/)

## Short description for links above

- **Add Recipe Form**: A form that allows users to add a new recipe with a title and instructions
- **Register Form**: A form for user registration, including username and password
- **Login Form**: A form for user authentication, allowing registered users to log in and access protected routes
- **AJAX Interaction (Fetch)**: A client-side fetch request that retrieves a list of recipes from the server, rendering them on the homepage

## Link to github line number(s) for schemas (db.js or models folder)
[Schema](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/db.js#L18-L43)

## Description of research topics above with points

- **2 points** - Applied and customized the Tailwind CSS framework
- **3 points** - Implemented unit testing using Jest
- **5 points** - Developed automated functional tests using Puppeteer

**Total Points: 10** 

## Links to github line number(s) for research topics described above 
*Screenshots for tests are in the 'documentation' folder*
- [CSS Framework or UI Toolkit (Tailwind)](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/public/css/tailwind.css#L1-L3)
- [CSS Framework or UI Toolkit (Tailwind)](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/tailwind.config.js#L1-L10)
- [Unit Testing with JavaScript (Jest)](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/tests/app.test.js#L79-L122)
- [Unit Testing with JavaScript (Jest)](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/jest.config.js)
- [Automated Test Code (Puppeteer)](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/tests/functional/functional.test.js#L1-L49)
- [Screenshot for Tests](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/documentation/test_screenshot.png)

## Optional Project Notes
I didn't implement everything in the wireframes. I converted the 'recipes'.png page to the '/' route. I changed 'create.png' into the '/add-recipe' route. The 'recipe-details.png' hasn't been implemented during this project.

## References
*Lines linked here were based on the acknowledgments in the README file. Also, outside of these links and class notes, ChatGPT assisted me with some structural debugging*

- [Config Setup](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/config.mjs#L3-L7) - Based on Source #4 in *Acknowledgements*

- [Tailwind CSS](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/public/css/tailwind.css#L1-L3) - Based on Sources #3, #5, and #11-13 in *Acknowledgements*

- [Application Routes - Middleware](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/app.mjs#L124-L128) - Based on Source #6 in *Acknowledgements*

- [Database Connection](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/db.js#L8-L14) Based on Sources #4 and #7 in *Acknowledgements*

- [Authentication Logic](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/app.mjs#L76-L107) - Based on Sources #8-10 in *Acknowledgements*

- [Auxilary Security Functions](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/app.mjs#L45-L73) - Based on Sources #20-21 in *Acknowledgements*

- [Static File Serving](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/src/app.mjs#L24-L32) - Based on Source #22 in *Acknowledgements* 

- [Unit Test Code](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/tests/app.test.js#L79-L122) - Based on Sources #14-16 in *Acknowledgements*

- [Automated Test Code](https://github.com/nyu-csci-ua-0467-001-002-fall-2024/final-project-JosephChege4/blob/master/tests/functional/functional.test.js#L1-L49) - Based on Sources #17-19 in *Acknowledgements*

## Attributions 
*All the code under "References" is based on the sources below (also in README)*

1. [MongoDB Atlas Configure IP](https://www.mongodb.com/docs/atlas/security/ip-access-list/#add-ip-access-list-entries) - (for whitelisting Courant's IP Address)
2. [Github Managing Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic) - (for setting up the access tokens before deploying to Courant's server)
3. [Tailwind Setup](https://tailwindcss.com/docs/content-configuration)
4. [Configuration of the Database](https://stackoverflow.com/questions/55267494/the-uri-parameter-to-openuri-must-be-a-string-got-undefined)
5. [Tailwing Navigation](https://tailwindui.com/components/application-ui/navigation/navbars)
6. [Form and Post Handling](https://stackoverflow.com/questions/58566856/res-status-500-message-internal-server-error-find-product-by-name-and-price)
7. [Mongoose Connection](https://mongoosejs.com/docs/connections.html)
8. [User Authentication](https://www.selcukguler.com/blog/passportjs-user-authentication-expressjs-guide)
9. [Passport.js](https://www.passportjs.org/howtos/password/)
10. [Node.js Authentication](https://heynode.com/tutorial/authenticate-users-node-expressjs-and-passportjs/)
11. [More Tailwind Nav Bars](https://wpdean.com/tailwind-navbar/)
12. [Even More Tailwind Nav Bars](https://code2care.org/tutorial/step-by-step-navigation-bar-pure-html-css-js/)
13. [Another Tailwind Source](https://www.kindacode.com/article/tailwind-css-create-a-responsive-top-navigation-menu)
14. [Linting with Jest](https://stackoverflow.com/questions/44611190/using-jest-in-my-react-app-describe-is-not-defined)
15. [Testing with Jest](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)
16. [More Testing with Jest](https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/)
17. [Node.js Puppeteer](https://www.digitalocean.com/community/tutorials/how-to-write-end-to-end-tests-in-node-js-using-puppeteer-and-jest)
18. [More Jest and Puppeteer](https://blog.logrocket.com/end-to-end-testing-react-jest-puppeteer)
19. [More Puppeteer](https://www.headspin.io/blog/testing-with-puppeteer-a-complete-guide)
20. [Input Validation](https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/)
21. [Form Inputs](https://www.digitalocean.com/community/tutorials/how-to-handle-form-inputs-efficiently-with-express-validator-in-express-js)
22. [Session Configuration](https://www.npmjs.com/package/express-session/v/1.10.4)