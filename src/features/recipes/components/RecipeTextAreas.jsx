import { FormField } from './FormField';

const textareaClassName = 'w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 outline-none ring-[#f9735b]/20 transition focus:ring-4';

export function RecipeTextAreas({ form, onFieldChange }) {
  return (
    <>
      <FormField label="Ingredience * - každá na nový řádek" className="block">
        <textarea
          className={`min-h-36 ${textareaClassName}`}
          value={form.ingredientsText}
          onChange={(event) => onFieldChange('ingredientsText', event.target.value)}
          placeholder={'200 g těstovin\nrajčatová passata\nbazalka'}
        />
      </FormField>

      <FormField label="Postup *" className="block">
        <textarea
          className={`min-h-40 ${textareaClassName}`}
          value={form.steps}
          onChange={(event) => onFieldChange('steps', event.target.value)}
          placeholder="Popiš přípravu krok za krokem."
        />
      </FormField>
    </>
  );
}
