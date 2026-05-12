import { MealPlanMealCard } from './MealPlanMealCard';

export function MealPlanDayCard({ dayPlan }) {
  return (
    <article className="rounded-[1.5rem] bg-white/10 p-4 ring-1 ring-white/10">
      <h3 className="text-xl font-black text-orange-50">{dayPlan.day}</h3>
      <div className="mt-4 space-y-3">
        {dayPlan.meals.map((meal) => (
          <MealPlanMealCard key={meal.type} meal={meal} />
        ))}
      </div>
    </article>
  );
}
