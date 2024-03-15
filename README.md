<h1>Recipe CRUD App</h1>
<p>In this project, you will build a Recipe tracking app. The app will allow a user to add new recipes, display a list of recipes and delete a recipe from the list by clicking a <code>delete</code> button. You will also be asked to add styling as provided in the mockup.</p>
<img src="https://github.com/HaesolS/recipe-tracker-app/assets/147211855/fce2f986-72d8-42bf-9bbb-739215abec8f">
<p>This project has starter code you can use for the application. You will need to add handlers and other logic to make this code work.</p>
<h2>Specific Instructions</h2>
<p>Find the <code>TODO</code> comments in the code and create the necessary functionality. Below is a list of specific items you will need to complete for this lesson.</p>
<p>
  <ul>
    <li>The app will display a recipe's name, cuisine, photo, ingredients, preparation instructions and action buttons (delete).</li>
    <li>You should create at least one additional component that is used by the <code>RecipeList</code> component.</li>
    <li>The app does not need to match the exact appearance of the mockup, but should be similar and pass the styling tests.</li>
    <li>You should add handlers and other attributes to the starter code as needed.</li>
  </ul>
</p>
<p>To create a recipe entry, your app will need to have a form with input fields for the name of the dish, the cuisine it belongs to, and an URL that points to a picture of the dish. Use <code><textarea></code> for the ingredients and preparation. For the tests to pass, use the following names for your inputs: <code>&lt;input name="name"&gt;</code>, <code>&lt;input name="cuisine"&gt;</code>, <code>&lt;input name="photo"&gt;</code>, <code><textarea name="ingredients"></code> and <code><textarea name="preparation"></code>.</p>
<p>The new recipe must be added to the <b>end</b> of the list of recipes.</p>
<p>To read and display the list of recipes use the table structure that is provided in the starter code. Each recipe should display the name, cuisine, photo, ingredients, preparation and a delete button.
<p>Clicking the delete button should remove the entire row/recipe from the list. For the tests to pass, make sure that the <code>delete</code> button has delete as a name value (<code>name="delete"</code>). e.g. <code>&lt;button name="delete" onClick={deleteRecipe}>Delete&lt;/button&gt;</code>.
<h2>Styling Instructions</h2>
<p>The <code>Delicious Food Recipes</code> text surrounded by an <code>h1</code> tag should use the <code>'Playfair Display SC'</code> font that has already been imported in <code>App.css</code>. It should also be <code>centered</code> and have a size of <code>64px</code>.</p>
<p>Read <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child">the documentation for nth-child</a>. Use <code>nth-child</code> to set the width of the columns. It is suggested that you set the <code>width</code> for the <i>preparation</i> and <i>ingredients</i> columns to <code>30%</code>. For the rest of the columns, set the width to <code>10%</code>.</p>
<p>Use <code>nth-child(odd)</code> to set the table's <i>zebra striping</i> color pattern for the rows in <code>tbody</code>. The color in the mockup is <code>#fff0c7</code> but feel free to use a color of your preference that suits the design.</p>
<p>The <i>preparation</i> and <i>ingredient</i> columns should display a scrollbar if there is too much text. Use the predefined <code>content_td</code> class and <code>p</code> tag to wrap the text so that it uses a scrollbar if the text is too long (such as <code>&lt;td className="content_td">&lt;p&gt;{(recipe.ingredients)}&lt;/p&gt;&lt;/td&gt;</code> ).</p>
<p>Use the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a> property to <code>scale-down</code> the images and set the image <code>width</code> and <code>height</code> to <code>100%</code>.
<h2>Success Criteria</h2>
<p>
<ul>
  <li>Functionality:</li>
    <ul>
      <li>User can create a recipe entry.</li>
      <li>User can read the list of recipes. The new recipe must be added to the end of the list of recipes.</li>
      <li>User can delete a recipe.</li>
      <li>CSS is used to make the app look like the mockup.</li>
    </ul>
  <li>React Code Organization:</li>
    <ul>
      <li>Uses multiple components that play well together.</li>
      <li>Recipe data is contained in the state.</li>
    </ul>
  <li>General Code Organization:</li>
    <ul>
      <li>Minimal code duplication</li>
    </ul>
</ul>
