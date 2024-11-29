// index.js

// Class to meet project requirements
class Recipe {
    constructor(title, instructions) {
        this.title = title;
        this.instructions = instructions || 'No description provided.';
    }

    render() {
        // Render the recipe to DOM
        const recipeDiv = document.createElement('div');
        recipeDiv.textContent = `
            <h2>${this.title}</h2>
            <p>${this.instructions}</p>
        `;
        return recipeDiv;
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('recipes-container');

    try {
        // fetch recipes from the backend API
        const response = await fetch('/api/recipes');
        const recipes = await response.json();

        // Higher order function as required
        const renderedRecipes = recipes.map(recipeData => {
            const recipe = new Recipe(recipeData.title, recipeData.instructions);
            return recipe.render(); // Returns the rendered DOM element
        });
        
        // Add recipes to the container
        renderedRecipes.forEach(recipeElement => {
            container.appendChild(recipeElement);
        });        
    } catch (error) {
        console.error('Error fetching recipes:', error);
        container.innerHTML = '<p>Failed to load recipes. Please try again later.</p>';
    }
});

