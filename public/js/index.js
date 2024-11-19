// index.js

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('recipes-container');

    try {
        // Fetch recipes from the backend API
        const response = await fetch('/api/recipes'); // Replace with your API endpoint
        const recipes = await response.json();

        // Dynamically add recipes to the container
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.innerHTML = `
                <h2>${recipe.title}</h2>
                <p>${recipe.instructions || 'No description provided.'}</p>
            `;
            container.appendChild(recipeDiv);
        });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        container.innerHTML = '<p>Failed to load recipes. Please try again later.</p>';
    }
});

