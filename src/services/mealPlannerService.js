const DAYS = ['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle'];
const MEAL_ORDER = ['breakfast', 'lunch', 'dinner'];

function pickRandom(items, fallback = null) {
  if (!items.length) return fallback;
  return items[Math.floor(Math.random() * items.length)];
}

function pickMeal(recipes, type, usedRecipeIds) {
  const typedRecipes = recipes.filter((recipe) => recipe.type === type);
  const unusedRecipes = typedRecipes.filter((recipe) => !usedRecipeIds.has(recipe.id));

  // Nejdřív zkoušíme neopakovat recepty. Když dojdou, klidně některý použijeme znovu.
  const recipe = pickRandom(unusedRecipes.length ? unusedRecipes : typedRecipes);

  if (recipe) usedRecipeIds.add(recipe.id);
  return recipe;
}

export function generateMealPlan(recipes, mode = 'day') {
  const usedRecipeIds = new Set();
  const days = mode === 'week' ? DAYS : ['Dnes'];

  return days.map((day) => ({
    day,
    meals: MEAL_ORDER.map((type) => ({
      type,
      recipe: pickMeal(recipes, type, usedRecipeIds),
    })),
  }));
}
