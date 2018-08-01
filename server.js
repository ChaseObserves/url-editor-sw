// VARIABLES

var fs = require("fs");
var express = require("express");

var data = fs.readFileSync("all-blog-posts.json");
var blogs = JSON.parse(data);

var moreData = fs.readFileSync("full-recipes.json");
var recipes = JSON.parse(moreData);

// SET UP SERVER

var app = express();

var PORT = 3000;

var server = app.listen(PORT, listening);

function listening() {
  console.log("listening on port", PORT);
}

// FUNCTIONS TO EDIT DATA

function addURLblogs() {
  for (var key in blogs) {
    if (blogs.hasOwnProperty(key)) {
      var blogBodyHTML = JSON.stringify(blogs[key].articleBodyHTML);
      var url = "https://www.sunwarrior.com";
      var position = blogBodyHTML.indexOf("/uploads");
      var output = [
        blogBodyHTML.slice(0, position),
        url,
        blogBodyHTML.slice(position)
      ].join("");
      finalOutput = output
        .replace(/[\"][/]uploads/g, "https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        // .replace(/[\"]/g, "")
        .replace(/>rn/g, ">");
      blogs[key].articleBodyHTML = finalOutput;
    }
  }
}

function addURLrecipes() {
  for (var key in recipes) {
    if (recipes.hasOwnProperty(key)) {
      var recipeBodyHTML = JSON.stringify(recipes[key].articleBodyHTML);
      var ingredientsHTML = JSON.stringify(recipes[key].ingredients);
      var directionsHTML = JSON.stringify(recipes[key].directions);
      var url = "https://www.sunwarrior.com";
      var position = recipeBodyHTML.indexOf("/uploads");
      var directionsPosition = directionsHTML.indexOf("/uploads");
      var output = [
        recipeBodyHTML.slice(0, position),
        url,
        recipeBodyHTML.slice(position)
      ].join("");
      var directionsOutput = [
        directionsHTML.slice(0, directionsPosition),
        url,
        directionsHTML.slice(directionsPosition)
      ].join("");
      finalOutput = output
        .replace(/[\"][/]uploads/g, "https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        .replace(/>rn/g, ">");
      recipes[key].articleBodyHTML = finalOutput;
      finalIngredients = ingredientsHTML
        .replace(/[\"][/]uploads/g, "https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        .replace(/rnt/g, "")
        .replace(/>rn/g, ">")
        .replace(/[\"]s:.*:[\"]/g, "");
      recipes[key].ingredients = finalIngredients;
      finalDirections = directionsOutput
        .replace(/[\"][/]uploads/g, "https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        .replace(/rnt/g, "")
        .replace(/>rn/g, ">");
      recipes[key].directions = finalDirections;
    }
  }
}

// SAVE NEW FILES

function saveFile() {
  newBlogData = JSON.stringify(blogs, null, 2);
  newRecipeData = JSON.stringify(recipes, null, 2);
  fs.writeFile("all-blog-posts-new.json", newBlogData, finished);
  fs.writeFile("full-recipes-new.json", newRecipeData, finished);
  function finished(err) {
    console.log("all set!");
  }
}

addURLblogs();
addURLrecipes();
saveFile();
