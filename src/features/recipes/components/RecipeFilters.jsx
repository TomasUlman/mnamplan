import { Search, UtensilsCrossed } from "lucide-react";
import { MEAL_TYPE_OPTIONS } from "../../../utils/mealTypes";

export function RecipeFilters({
  query,
  typeFilter,
  onQueryChange,
  onTypeFilterChange,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#f9735b]">
          <UtensilsCrossed size={17} /> Recepty
        </p>
        <h2 className="mt-1 text-3xl font-black">Databáze dobrot</h2>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_auto] lg:min-w-[620px]">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#c7865a]"
            size={19}
          />
          <input
            className="w-full rounded-full border border-orange-100 bg-white py-3 pl-12 pr-4 font-semibold outline-none ring-[#f9735b]/20 transition focus:ring-4"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Hledat podle názvu..."
          />
        </label>

        <select
          className="rounded-full border border-orange-100 bg-white px-4 py-3 font-bold outline-none ring-[#f9735b]/20 transition focus:ring-4"
          value={typeFilter}
          onChange={(event) => onTypeFilterChange(event.target.value)}
        >
          <option value="all">Všechny typy</option>
          {MEAL_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
