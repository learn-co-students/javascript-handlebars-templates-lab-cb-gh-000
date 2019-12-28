function displayEditForm() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredients = document.getElementsByName('ingredients');
  var result = template({'name': name, 'description': description, 'ingredient1': ingredients[0].value, 'ingredient2': ingredients[1].value, 'ingredient3': ingredients[2].value,'ingredient4': ingredients[3].value, 'ingredient5': ingredients[4].value});
  document.getElementById("recipe").innerHTML += result;
}

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var ingredients = document.getElementsByName('ingredients');
  var result = template({'name': name, 'description': description, 'ingredients': ingredients});
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var name = document.getElementById('recipe-name').innerHTML;
  var description = document.getElementById('recipe-description').innerTML;
  var ingredients = document.getElementsByName('recipe-ingredients');
  var result = template({'name': name, 'description': description, 'ingredients': ingredients});
  document.getElementById("recipe").innerHTML = result;
}

function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML)

  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li name='recipe-ingredients'>" + this.value + "</li>")
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
