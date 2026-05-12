import { ExternalLink } from "lucide-react";
import { getMealType } from "../../utils/mealTypes";
import { RecipeImage } from "./RecipeImage";

export function RecipeDetail({ recipe }) {
  const mealType = getMealType(recipe.type);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="overflow-hidden rounded-[1.75rem] bg-orange-100">
        <RecipeImage recipe={recipe} />
      </div>
      <div>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-[#7c4a28]">
          {mealType.emoji} {mealType.label}
        </span>
        <h3 className="mt-4 text-3xl font-black leading-tight text-[#3b2418]">
          {recipe.title}
        </h3>

        {recipe.sourceUrl ? (
          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#f9735b] ring-1 ring-orange-100 hover:bg-orange-50"
          >
            Zdroj receptu <ExternalLink size={16} />
          </a>
        ) : null}

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <section className="rounded-[1.5rem] bg-white p-5 ring-1 ring-orange-100">
            <h4 className="text-lg font-black">Ingredience</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#6b4226]">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2">
                  <span>🍅</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.5rem] bg-white p-5 ring-1 ring-orange-100">
            <h4 className="text-lg font-black">Postup</h4>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#6b4226]">
              {recipe.steps}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
