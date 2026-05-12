import { MealPlanDayCard } from './components/MealPlanDayCard';
import { MealPlanHeader } from './components/MealPlanHeader';

export function MealPlanView({ mode, onModeChange, mealPlan, onGenerate }) {
  return (
    <section className="rounded-[2rem] bg-[#3b2418] p-5 text-white food-shadow sm:p-7">
      <MealPlanHeader mode={mode} onModeChange={onModeChange} onGenerate={onGenerate} />

      <div className="mt-7 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {mealPlan.map((dayPlan) => (
          <MealPlanDayCard key={dayPlan.day} dayPlan={dayPlan} />
        ))}
      </div>
    </section>
  );
}
