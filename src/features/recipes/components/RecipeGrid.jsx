import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RecipeCard } from "../RecipeCard";
import { Button } from "../../../ui/Button";

const RECIPES_PER_PAGE = 6;

export function RecipeGrid({
  recipes,
  onViewRecipe,
  onEditRecipe,
  onDeleteRecipe,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(recipes.length / RECIPES_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  const visibleRecipes = useMemo(() => {
    const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
    const endIndex = startIndex + RECIPES_PER_PAGE;

    return recipes.slice(startIndex, endIndex);
  }, [recipes, currentPage]);

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  }

  if (recipes.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onView={onViewRecipe}
            onEdit={onEditRecipe}
            onDelete={onDeleteRecipe}
          />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-[1.5rem] bg-white/70 p-4 ring-1 ring-orange-100 sm:flex-row">
          <p className="text-sm font-bold text-[#7c4a28]">
            Strana {currentPage} z {totalPages}
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={18} />
              Předchozí
            </Button>

            <Button
              variant="secondary"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Další
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
