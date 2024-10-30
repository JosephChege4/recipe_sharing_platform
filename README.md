The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# Recipe Sharing Platform

## Overview

This platform allows users to create, share, and discover recipes. Each recipe includes a list of ingredients, preparation instructions, and optional images. Users can also search by ingredients, dietary restrictions, or cuisine type, and save favorite recipes to their profile.

## Data Model

The application will store Users, Recipes, and potentially Comments/Ratings (if implemented).

- **Users** can have multiple **Recipes** (via references).
- Each **Recipe** will include embedded **Ingredients** and possibly **Comments** if users can provide feedback on recipes.

### Sample Documents

An Example User:

```javascript
{
  username: "chefmaster",
  hash: // a password hash,
  favorites: // an array of references to Recipe documents,
  recipes: // an array of references to Recipe documents
}
```

An Example Recipe:

```javascript
{
  author: // a reference to a User object,
  title: "Classic Pancakes",
  ingredients: [
    { name: "flour", quantity: "2 cups" },
    { name: "milk", quantity: "1.5 cups" },
    { name: "egg", quantity: "1" }
  ],
  instructions: "Mix ingredients and cook on medium heat...",
  tags: ["breakfast", "vegetarian"],
  createdAt: // timestamp,
  comments: [
    { user: // reference to a User, text: "Loved it!", createdAt: // timestamp 
    }
  ]
}
```

## [Link to Commented First Draft Schema](db.js)

## Wireframes

1. **/recipe/create** - page for creating a new recipe
   ![recipe create](documentation/recipe-create.png)
   
2. **/recipes** - page for displaying all recipes with filters
   ![recipes](documentation/recipes.png)
   
3. **/recipe/:slug** - page for displaying a specific recipe with details and comments
   ![recipe details](documentation/recipe-details.png)

4. **/user/:username** - user profile page displaying their recipes and favorites
   ![user profile](documentation/user-profile.png)

## Site Map

- **Home** -> / (displays latest/featured recipes)
- **Create Recipe** -> /recipe/create
- **All Recipes** -> /recipes
  - **Individual Recipe** -> /recipe/:slug
- **User Profile** -> /user/:username

## User Stories or Use Cases

1. As a non-registered user, I can register a new account with the site.
2. As a registered user, I can log in to the site.
3. As a user, I can create a new recipe.
4. As a user, I can view all recipes with the option to filter by ingredients or dietary tags.
5. As a user, I can save recipes to my favorites list.
6. As a user, I can add comments to recipes to share my feedback.

## Research Topics

* (3 points) Unit Testing with JavaScript
   * Using Jest to write at least four unit tests that verify core functionality, such as route responses and recipe data handling.
   * Tests will be linked in the repository and include a screenshot of successful test runs.
  
* (5 points) Automated Functional Testing for Routes
   * Implementing Headless Chrome for automated testing of key routes, including viewing, creating, editing, and deleting a recipe.
   * A minimum of four tests will be written, with links to the test code in the repository and a screen capture showing successful test runs.
  
* (2 points) CSS Framework or UI Toolkit
   * Utilizing Tailwind CSS to style the application, with customizations applied to achieve a consistent theme across pages.
   * Relevant code and customizations will be included in the repository.

10 points total out of 8 required points

## [Link to Initial Main Project File](app.js)

## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [Multer documentation](https://www.npmjs.com/package/multer) - (for image upload functionality)
3. [MongoDB text search documentation](https://docs.mongodb.com/manual/text-search/) - (for implementing search and filter)