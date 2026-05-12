import { RecipeFilters } from './components/RecipeFilters';
import { RecipeGrid } from './components/RecipeGrid';
import { RecipesEmptyState } from './components/RecipesEmptyState';

export function RecipesSection({
  isLoading,
  recipes,
  query,
  typeFilter,
  onQueryChange,
  onTypeFilterChange,
  onCreateRecipe,
  onViewRecipe,
  onEditRecipe,
  onDeleteRecipe,
}) {
  const isEmpty = !isLoading && recipes.length === 0;

  return (
    <section className="mt-8 rounded-[2rem] bg-white/75 p-4 ring-1 ring-orange-100 sm:p-6">
      <RecipeFilters
        query={query}
        typeFilter={typeFilter}
        onQueryChange={onQueryChange}
        onTypeFilterChange={onTypeFilterChange}
      />

      {isLoading ? (
        <p className="mt-8 rounded-3xl bg-orange-50 p-8 text-center font-bold text-[#7c4a28]">
          Načítám recepty...
        </p>
      ) : null}

      {isEmpty ? <RecipesEmptyState onCreateRecipe={onCreateRecipe} /> : null}

      {!isLoading && !isEmpty ? (
        <RecipeGrid
          recipes={recipes}
          onViewRecipe={onViewRecipe}
          onEditRecipe={onEditRecipe}
          onDeleteRecipe={onDeleteRecipe}
        />
      ) : null}
    </section>
  );
}
