import React, { useState } from "react";
import RecipeList from "./RecipeList";

function RecipeDelete({ deleteRecipe, index, recipes }) {
  const handleDelete = () => deleteRecipe(index);
  
  return (
    <tr>
      <td className="content_td"><p>{recipes.name}</p></td>
      <td className="content_td"><p>{recipes.cuisine}</p></td>
      <td className="content_td"><img src={recipes.photo} /></td>
      <td className="content_td"><p>{recipes.ingredients}</p></td>
      <td className="content_td"><p>{recipes.preparation}</p></td>
      <td><button name="delete" onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default RecipeDelete;