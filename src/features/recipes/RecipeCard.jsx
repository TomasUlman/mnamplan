import { Edit3, Eye, Trash2 } from 'lucide-react';
import { getMealType } from '../../utils/mealTypes';
import { Button } from '../../ui/Button';
import { RecipeImage } from './RecipeImage';

export function RecipeCard({ recipe, onView, onEdit, onDelete }) {
  const mealType = getMealType(recipe.type);

  return (
    <article className="group overflow-hidden rounded-[2rem] bg-white card-glow ring-1 ring-orange-100/80 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-44 overflow-hidden">
        <RecipeImage recipe={recipe} />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-black text-[#7c4a28] backdrop-blur">
          {mealType.emoji} {mealType.label}
        </span>
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 text-xl font-black leading-tight text-[#3b2418]">{recipe.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#7c4a28]">
          {recipe.ingredients.slice(0, 4).join(' • ')}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <Button variant="secondary" className="px-3" onClick={() => onView(recipe)}>
            <Eye size={16} />
            <span className="hidden sm:inline">Detail</span>
          </Button>
          <Button variant="secondary" className="px-3" onClick={() => onEdit(recipe)}>
            <Edit3 size={16} />
            <span className="hidden sm:inline">Edit</span>
          </Button>
          <Button variant="danger" className="px-3" onClick={() => onDelete(recipe)}>
            <Trash2 size={16} />
            <span className="hidden sm:inline">Smazat</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
