import { ChefHat, Plus, Soup } from "lucide-react";
import { Button } from "../ui/Button";
import { StatCard } from "./StatCard";

export function HeroSection({ stats, onCreateRecipe, onGenerateMealPlan }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
      <div className="rounded-[2.5rem] bg-white/80 p-6 food-shadow ring-1 ring-orange-100 sm:p-8 lg:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-black text-[#f9735b]">
          <Soup size={18} /> Tvoje recepty, žádný chaos
        </p>

        <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-[#3b2418] sm:text-6xl">
          Plánuj jídlo, na které máš fakt chuť.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[#7c4a28] sm:text-lg">
          MňamPlán je jednoduchá kuchařka s generátorem jídelníčku. Přidej
          vlastní recepty, filtruj je podle typu a nech aplikaci poskládat den
          nebo celý týden.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button onClick={onCreateRecipe}>
            <Plus size={18} /> Přidat vlastní recept
          </Button>
          <Button variant="secondary" onClick={onGenerateMealPlan}>
            <ChefHat size={18} /> Namíchat jídelníček
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:self-center">
        {stats.map((item) => (
          <StatCard key={item.value} item={item} />
        ))}
      </div>
    </section>
  );
}
