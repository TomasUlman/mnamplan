import { getMealType } from '../../utils/mealTypes';

export function RecipeImage({ recipe, className = '' }) {
  const mealType = getMealType(recipe.type);

  if (recipe.imageUrl) {
    return (
      <img
        className={`h-full w-full object-cover ${className}`}
        src={recipe.imageUrl}
        alt={recipe.title}
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
    );
  }

  return (
    <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${mealType.accent} ${className}`}>
      <div className="text-center">
        <div className="text-6xl drop-shadow-sm">{mealType.emoji}</div>
        <div className="mt-2 rounded-full bg-white/60 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#7c4a28]">
          {mealType.label}
        </div>
      </div>
    </div>
  );
}
