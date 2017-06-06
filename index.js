function init() {
  var recipe = {
    name: 'Chicken Noodle Soup',
    description: 'yummy chicken noodle soup',
    ingredients: [
      {quantity: "1 cup", name: 'chicken'},
      {quantity: "3 nanoliters", name: 'stock'},
      {quantity: "12", name: 'noodles'}
    ]
  }
  // Register the partial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  // Register the helper
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li>' + this.name + '</li>')
  })

  // Init the view
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName('main')[0].innerHTML += html;
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var recipeFormHtml = formTemplate(formTemplate);
  document.getElementsByTagName('main')[0].innerHTML += recipeFormHtml;
}

function displayIngredient(ingredient) {
  
}

function displayEditForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var recipeFormHtml = formTemplate(formTemplate);
  document.getElementsByTagName('main')[0].innerHTML += recipeFormHtml;
}

function updateRecipe() {
  
}

function createRecipe() {
  
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
