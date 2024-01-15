/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer = null) {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer === null) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach((layer) => {
    if (layer === "noodles") {
      noodles += 50;
    } else if (layer === "sauce") {
      sauce += 0.2;
    }
  });
  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let scaledRecipe = {};
  for (let ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * (portions / 2);
  }
  return scaledRecipe;
}
