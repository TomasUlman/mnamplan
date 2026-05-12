import { seedRecipes } from '../data/seedRecipes';
import { createId } from '../utils/ids';
import { readJson, removeItem, writeJson } from '../utils/storage';

const STORAGE_KEY = 'mnamplan.recipes.v1';

function sortRecipes(recipes) {
  return [...recipes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function normalizeRecipe(recipe) {
  return {
    ...recipe,
    imageUrl: recipe.imageUrl?.trim() ?? '',
    sourceUrl: recipe.sourceUrl?.trim() ?? '',
    ingredients: Array.isArray(recipe.ingredients)
      ? recipe.ingredients.map((item) => item.trim()).filter(Boolean)
      : [],
    steps: recipe.steps?.trim() ?? '',
  };
}

// Tohle je jediné místo, které teď ví o localStorage.
// Až bude backend, přepiš metody níže na fetch/Supabase a UI nech být.
export const recipeRepository = {
  async list() {
    const storedRecipes = readJson(STORAGE_KEY, null);

    if (!storedRecipes) {
      writeJson(STORAGE_KEY, seedRecipes);
      return sortRecipes(seedRecipes);
    }

    return sortRecipes(storedRecipes);
  },

  async create(recipeInput) {
    const recipes = await this.list();
    const newRecipe = normalizeRecipe({
      ...recipeInput,
      id: createId('recipe'),
      createdAt: new Date().toISOString(),
    });

    const nextRecipes = sortRecipes([newRecipe, ...recipes]);
    writeJson(STORAGE_KEY, nextRecipes);
    return newRecipe;
  },

  async update(recipeId, recipeInput) {
    const recipes = await this.list();
    const nextRecipes = recipes.map((recipe) => {
      if (recipe.id !== recipeId) return recipe;

      return normalizeRecipe({
        ...recipe,
        ...recipeInput,
        id: recipe.id,
        createdAt: recipe.createdAt,
        updatedAt: new Date().toISOString(),
      });
    });

    writeJson(STORAGE_KEY, nextRecipes);
    return nextRecipes.find((recipe) => recipe.id === recipeId);
  },

  async remove(recipeId) {
    const recipes = await this.list();
    const nextRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    writeJson(STORAGE_KEY, nextRecipes);
  },

  async resetToSeed() {
    removeItem(STORAGE_KEY);
    writeJson(STORAGE_KEY, seedRecipes);
    return sortRecipes(seedRecipes);
  },
};
