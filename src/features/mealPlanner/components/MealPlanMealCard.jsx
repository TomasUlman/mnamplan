import { getMealType } from '../../../utils/mealTypes';

export function MealPlanMealCard({ meal }) {
  const mealType = getMealType(meal.type);

  return (
    <div className="rounded-2xl bg-white p-4 text-[#3b2418]">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f9735b]">
        {mealType.emoji} {mealType.label}
      </p>
      <p className="mt-1 font-black leading-tight">
        {meal.recipe ? meal.recipe.title : `Chybí recept pro: ${mealType.label}`}
      </p>
      {meal.recipe ? (
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#7c4a28]">
          {meal.recipe.ingredients.slice(0, 4).join(' • ')}
        </p>
      ) : null}
    </div>
  );
}
