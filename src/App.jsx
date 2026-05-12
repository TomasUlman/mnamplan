import { useMemo, useState, useRef } from "react";
import { AppFooter } from "./layout/AppFooter";
import { AppHeader } from "./layout/AppHeader";
import { HeroSection } from "./layout/HeroSection";
import { Modal } from "./ui/Modal";
import { RecipeForm } from "./features/recipes/RecipeForm";
import { RecipeDetail } from "./features/recipes/RecipeDetail";
import { RecipesSection } from "./features/recipes/RecipesSection";
import { useRecipes } from "./features/recipes/useRecipes";
import { MEAL_TYPE_OPTIONS } from "./utils/mealTypes";
import { MealPlanView } from "./features/mealPlanner/MealPlanView";
import { generateMealPlan } from "./services/mealPlannerService";

function getStats(recipes) {
  return MEAL_TYPE_OPTIONS.map((type) => ({
    ...type,
    count: recipes.filter((recipe) => recipe.type === type.value).length,
  }));
}

function App() {
  const {
    recipes,
    filteredRecipes,
    query,
    setQuery,
    typeFilter,
    setTypeFilter,
    isLoading,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    resetRecipes,
  } = useRecipes();

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mealPlanMode, setMealPlanMode] = useState("day");
  const [mealPlan, setMealPlan] = useState([]);

  const mealPlannerRef = useRef(null);

  const stats = useMemo(() => getStats(recipes), [recipes]);

  function scrollToMealPlanner() {
    mealPlannerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function openCreateForm() {
    setEditingRecipe(null);
    setIsFormOpen(true);
  }

  function openEditForm(recipe) {
    setEditingRecipe(recipe);
    setIsFormOpen(true);
  }

  async function handleSubmit(recipeInput) {
    if (editingRecipe) {
      await updateRecipe(editingRecipe.id, recipeInput);
    } else {
      await createRecipe(recipeInput);
    }

    setIsFormOpen(false);
    setEditingRecipe(null);
  }

  async function handleDelete(recipe) {
    const confirmed = window.confirm(
      `Opravdu smazat recept „${recipe.title}”?`,
    );
    if (!confirmed) return;

    await deleteRecipe(recipe.id);
    if (selectedRecipe?.id === recipe.id) setSelectedRecipe(null);
  }

  function handleGenerateMealPlan(mode = mealPlanMode) {
    setMealPlan(generateMealPlan(recipes, mode));
  }

  function handleModeChange(mode) {
    setMealPlanMode(mode);
    setMealPlan(generateMealPlan(recipes, mode));
  }

  async function handleReset() {
    const confirmed = window.confirm(
      "Obnovit startovací recepty? Aktuální změny v localStorage se smažou.",
    );
    if (!confirmed) return;

    await resetRecipes();
    setMealPlan([]);
  }

  // Dokud uživatel nic nevygeneruje ručně, ukážeme automatický náhled podle aktuálních receptů.
  const currentMealPlan = mealPlan.length
    ? mealPlan
    : generateMealPlan(recipes, mealPlanMode);

  return (
    <div className="min-h-screen text-[#3b2418]">
      <AppHeader onCreateRecipe={openCreateForm} onResetData={handleReset} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection
          stats={stats}
          onCreateRecipe={openCreateForm}
          onGenerateMealPlan={() => {
            handleGenerateMealPlan();
            scrollToMealPlanner();
          }}
        />

        <div className="mt-8 scroll-mt-24" ref={mealPlannerRef}>
          <MealPlanView
            mode={mealPlanMode}
            onModeChange={handleModeChange}
            mealPlan={currentMealPlan}
            onGenerate={() => handleGenerateMealPlan()}
          />
        </div>

        <RecipesSection
          isLoading={isLoading}
          recipes={filteredRecipes}
          query={query}
          typeFilter={typeFilter}
          onQueryChange={setQuery}
          onTypeFilterChange={setTypeFilter}
          onCreateRecipe={openCreateForm}
          onViewRecipe={setSelectedRecipe}
          onEditRecipe={openEditForm}
          onDeleteRecipe={handleDelete}
        />
      </main>

      <AppFooter />

      <Modal
        isOpen={isFormOpen}
        title={editingRecipe ? "Upravit recept" : "Přidat recept"}
        onClose={() => setIsFormOpen(false)}
      >
        <RecipeForm
          recipe={editingRecipe}
          onSubmit={handleSubmit}
          onCancel={() => setIsFormOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={Boolean(selectedRecipe)}
        title="Detail receptu"
        onClose={() => setSelectedRecipe(null)}
      >
        {selectedRecipe ? <RecipeDetail recipe={selectedRecipe} /> : null}
      </Modal>
    </div>
  );
}

export default App;
