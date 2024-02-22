import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes, createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="content_row">
          <tr>
            <td>
              <label htmlFor="name">
                <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input type="text" id="cuisine" name="cuisine" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input type="url" id="photo" name="photo" placeholder="URL" value={formData.photo} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea id="ingredients" name="ingredients" rows="2" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea id="preparation" name="preparation" rows="2" placeholder="Preparation" value={formData.preparation} onChange={handleChange} />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
