import { Save } from 'lucide-react';
import { Button } from '../../../ui/Button';

export function RecipeFormActions({ onCancel }) {
  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
      <Button type="button" variant="secondary" onClick={onCancel}>Zrušit</Button>
      <Button type="submit"><Save size={18} /> Uložit recept</Button>
    </div>
  );
}
