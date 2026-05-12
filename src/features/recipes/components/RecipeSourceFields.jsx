import { FormField } from './FormField';

const inputClassName = 'w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 outline-none ring-[#f9735b]/20 transition focus:ring-4';

export function RecipeSourceFields({ form, onFieldChange }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField label="URL obrázku">
        <input
          className={inputClassName}
          value={form.imageUrl}
          onChange={(event) => onFieldChange('imageUrl', event.target.value)}
          placeholder="https://..."
        />
      </FormField>

      <FormField label="Zdroj / odkaz">
        <input
          className={inputClassName}
          value={form.sourceUrl}
          onChange={(event) => onFieldChange('sourceUrl', event.target.value)}
          placeholder="https://..."
        />
      </FormField>
    </div>
  );
}
