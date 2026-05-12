import { MEAL_TYPE_OPTIONS } from '../../../utils/mealTypes';
import { FormField } from './FormField';

const inputClassName = 'w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 outline-none ring-[#f9735b]/20 transition focus:ring-4';

export function RecipeBasicFields({ form, onFieldChange }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField label="Název receptu *">
        <input
          className={inputClassName}
          value={form.title}
          onChange={(event) => onFieldChange('title', event.target.value)}
          placeholder="Třeba rajčatové těstoviny"
        />
      </FormField>

      <FormField label="Typ jídla *">
        <select
          className={inputClassName}
          value={form.type}
          onChange={(event) => onFieldChange('type', event.target.value)}
        >
          {MEAL_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </FormField>
    </div>
  );
}
