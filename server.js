// VARIABLES

var fs = require("fs");
var express = require("express");

var data = fs.readFileSync("all-blog-posts-CURRENT.json");
var blogs = JSON.parse(data);

var moreData = fs.readFileSync("all-recipes-CURRENT.json");
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
        .replace(/>rn/g, ">")
        .replace(/[\"][/]store[/]product[/]warrior-.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/warrior-blend\"")
        .replace(/com[/]store[/]product[/]warrior-.*?[\"]/g, "com/collections/all/products/warrior-blend\"")
        .replace(/[\"][/]store[/]product[/]classic-protein.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/classic-protein\"")
        .replace(/com[/]store[/]product[/]classic-protein.*?[\"]/g, "com/collections/all/products/classic-protein\"")
        .replace(/[\"][/]store[/]product[/]classic-plus.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/classic-plus\"")
        .replace(/com[/]store[/]product[/]classic-plus.*?[\"]/g, "com/collections/all/products/classic-plus\"")
        .replace(/com[/]store[/]product[/]illumin8.*?[\"]/g, "com/collections/all/products/illumin8\"")
        .replace(/[\"][/]store[/]product[/]liquid-light.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/us-liquid-light-946-4-ml-32-fl-oz-bottle\"")
        .replace(/com[/]store[/]product[/]liquid-light.*?[\"]/g, "com/collections/all/products/us-liquid-light-946-4-ml-32-fl-oz-bottle\"")
        .replace(/[\"][/]store[/]product[/]ormus-.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/ormus-super-greens\"")
        .replace(/com[/]store[/]product[/]ormus-.*?[\"]/g, "com/collections/all/products/ormus-super-greens\"")
        .replace(/[\"][/]store[/]product[/]vitamin-mineral-rush.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/us-vmr-236-5-ml-8-fl-oz\"")
        .replace(/com[/]store[/]product[/]vitamin-mineral-rush.*?[\"]/g, "com/collections/all/products/us-vmr-236-5-ml-8-fl-oz\"")
        .replace(/[\"][/]store[/]product[/]vitamins-for-her.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/us-raw-vitamins-for-her-90-capsules-bottle\"")
        .replace(/com[/]store[/]product[/]vitamins-for-her.*?[\"]/g, "com/collections/all/products/us-raw-vitamins-for-her-90-capsules-bottle\"")
        .replace(/[\"][/]store[/]product[/]vitamins-for-him.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/us-raw-vitamins-for-him-90-capsules-bottle\"")
        .replace(/com[/]store[/]product[/]vitamins-for-him.*?[\"]/g, "com/collections/all/products/us-raw-vitamins-for-him-90-capsules-bottle\"")
        .replace(/[\"][/]store[/]product[/]immune-shield.*?[\"]/g, "\"https://www.sunwarrior.com/collections/all/products/us-immune-shield-236-5-ml-8-fl-oz-bottle\"")
        .replace(/com[/]store[/]product[/]immune-shield.*?[\"]/g, "com/collections/all/products/us-immune-shield-236-5-ml-8-fl-oz-bottle\"")
        .replace(/com[/]store[/]product[/]cplus-.*?[\"]/g, "com/collections/all/products/classic-plus\"")
        .replace(/com[/]store[/]product[/]sol-.*?[\"]/g, "com/collections/all/products/sol-good-protein-bars\"")
        .replace(/com[/]store[/]product[/]wb-.*?[\"]/g, "com/collections/all/products/warrior-blend\"")
        .replace(/com[/]store[/]product[/]enzorb.*?[\"]/g, "com/collections/all/products/us-enzorb-90-count-capsules-bottle\"")
        .replace(/com[/]store[/]product[/]classic-.*?-sm[\"]/g, "com/collections/all/products/classic-protein\"")
        .replace(/com[/]store[/]product[/]eco-.*?[\"]/g, "com/collections/all/products/ecovessel-boulder-24-oz\"")
        .replace(/com[/]healthhub[/]/g, "com/blogs/health-hub/")
        .replace(/[\"][/]healthhub[/]/g, "\"https://www.sunwarrior.com/blogs/health-hub/")
        .replace(/=https:/g, "=\"https:");
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
        .replace(/[\"][/]uploads/g, "\"https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        .replace(/>rn/g, ">")
        .replace(/com[/]healthhub[/]/g, "com/blogs/health-hub/")
        .replace(/[\"][/]healthhub[/]/g, "\"https://www.sunwarrior.com/blogs/health-hub/");
      recipes[key].articleBodyHTML = finalOutput;
      finalIngredients = ingredientsHTML
        .replace(/[\"][/]uploads/g, "\"https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        .replace(/rnt/g, "")
        .replace(/>rn/g, ">")
        .replace(/[\"]s:.*:[\"]/g, "")
        .replace(/com[/]healthhub[/]/g, "com/blogs/health-hub/")
        .replace(/[\"][/]healthhub[/]/g, "\"https://www.sunwarrior.com/blogs/health-hub/");
      recipes[key].ingredients = finalIngredients;
      finalDirections = directionsOutput
        .replace(/[\"][/]uploads/g, "\"https://www.sunwarrior.com/uploads")
        .replace(/[\\]/g, "")
        .replace(/rnrn/g, "")
        .replace(/rnt/g, "")
        .replace(/>rn/g, ">")
        .replace(/com[/]healthhub[/]/g, "com/blogs/health-hub/")
        .replace(/[\"][/]healthhub[/]/g, "\"https://www.sunwarrior.com/blogs/health-hub/");
      recipes[key].directions = finalDirections;
    }
  }
}

// SAVE NEW FILES

function saveFile() {
  newBlogData = JSON.stringify(blogs, null, 2);
  newRecipeData = JSON.stringify(recipes, null, 2);
  fs.writeFile("all-blog-posts-CURRENT-new.json", newBlogData, finished);
  fs.writeFile("full-recipes-CURRENT-new.json", newRecipeData, finished);
  function finished(err) {
    console.log("all set!");
  }
}

addURLblogs();
addURLrecipes();
saveFile();
