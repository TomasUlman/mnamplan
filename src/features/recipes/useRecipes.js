import { useEffect, useMemo, useState } from 'react';
import { recipeRepository } from '../../services/recipeRepository';

export function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Hook schválně mluví jen s repository. Komponenty díky tomu neřeší localStorage ani budoucí API.
  async function loadRecipes() {
    setIsLoading(true);
    const loadedRecipes = await recipeRepository.list();
    setRecipes(loadedRecipes);
    setIsLoading(false);
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return recipes.filter((recipe) => {
      const matchesQuery = recipe.title.toLowerCase().includes(normalizedQuery);
      const matchesType = typeFilter === 'all' || recipe.type === typeFilter;
      return matchesQuery && matchesType;
    });
  }, [query, recipes, typeFilter]);

  async function createRecipe(recipeInput) {
    await recipeRepository.create(recipeInput);
    await loadRecipes();
  }

  async function updateRecipe(recipeId, recipeInput) {
    await recipeRepository.update(recipeId, recipeInput);
    await loadRecipes();
  }

  async function deleteRecipe(recipeId) {
    await recipeRepository.remove(recipeId);
    await loadRecipes();
  }

  async function resetRecipes() {
    const seedRecipes = await recipeRepository.resetToSeed();
    setRecipes(seedRecipes);
  }

  return {
    recipes,
    filteredRecipes,
    query,
    setQuery,
    typeFilter,
    setTypeFilter,
    isLoading,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    resetRecipes,
  };
}
