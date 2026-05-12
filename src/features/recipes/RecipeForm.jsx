import { useMemo, useState } from 'react';
import { RecipeBasicFields } from './components/RecipeBasicFields';
import { RecipeFormActions } from './components/RecipeFormActions';
import { RecipeSourceFields } from './components/RecipeSourceFields';
import { RecipeTextAreas } from './components/RecipeTextAreas';

const emptyRecipe = {
  title: '',
  type: 'breakfast',
  imageUrl: '',
  sourceUrl: '',
  ingredientsText: '',
  steps: '',
};

function recipeToForm(recipe) {
  if (!recipe) return emptyRecipe;

  return {
    title: recipe.title,
    type: recipe.type,
    imageUrl: recipe.imageUrl ?? '',
    sourceUrl: recipe.sourceUrl ?? '',
    ingredientsText: recipe.ingredients.join('\n'),
    steps: recipe.steps,
  };
}

export function RecipeForm({ recipe, onSubmit, onCancel }) {
  const [form, setForm] = useState(() => recipeToForm(recipe));
  const [wasSubmitted, setWasSubmitted] = useState(false);

  // Uživatel píše ingredience po řádcích, aplikace si je drží jako pole stringů.
  const ingredients = useMemo(
    () => form.ingredientsText.split('\n').map((item) => item.trim()).filter(Boolean),
    [form.ingredientsText],
  );

  const isValid = form.title.trim() && form.steps.trim() && ingredients.length > 0;

  function updateField(field, value) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWasSubmitted(true);

    if (!isValid) return;

    onSubmit({
      title: form.title.trim(),
      type: form.type,
      imageUrl: form.imageUrl.trim(),
      sourceUrl: form.sourceUrl.trim(),
      ingredients,
      steps: form.steps.trim(),
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <RecipeBasicFields form={form} onFieldChange={updateField} />
      <RecipeSourceFields form={form} onFieldChange={updateField} />
      <RecipeTextAreas form={form} onFieldChange={updateField} />

      {wasSubmitted && !isValid ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          Vyplň název, aspoň jednu ingredienci a postup.
        </p>
      ) : null}

      <RecipeFormActions onCancel={onCancel} />
    </form>
  );
}
