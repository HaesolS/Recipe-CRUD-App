import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
import RecipeDelete from "./RecipeDelete";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const createRecipe = (recipe) => setRecipes([...recipes, recipe]);
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((post, index) => index !== indexToDelete)
    );

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes} createRecipe={createRecipe} />
      <RecipeDelete deleteRecipe={deleteRecipe} recipes={recipes} />
    </div>
  );
}

export default App;
