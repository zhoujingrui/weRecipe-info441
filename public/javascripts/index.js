document.getElementById('recipe-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    console.log(title)
    const ingredients = document.getElementById('ingredients').value.split('\n'); // split by line break
    console.log(ingredients)
    const instruction = document.getElementById('instructions').value;
    console.log(instruction)
    const author = document.getElementById('author').value;
    console.log(author)

    const response = await fetch('/api/v1/recipe', {
        method: 'POST',
        body: {
            title: title,
            ingredients: ingredients,
            instruction: instruction,
            author:author
        },
        body: JSON.stringify({ title, ingredients, instruction, author })
    });

    const data = await response.json();
    console.log(data);
    //loadRecipes(); // Reload recipes to show the newly added one
});


async function loadRecipes() {
    const response = await fetch('/api/v21/recipe');
    const recipes = await response.json();
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = `${recipe.title} by ${recipe.author}`;
        recipeList.appendChild(li);
    });
}

//loadRecipes();