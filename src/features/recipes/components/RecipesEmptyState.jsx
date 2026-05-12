import { Plus } from 'lucide-react';
import { Button } from '../../../ui/Button';

export function RecipesEmptyState({ onCreateRecipe }) {
  return (
    <div className="mt-8 rounded-[2rem] bg-orange-50 p-8 text-center">
      <p className="text-5xl">🥄</p>
      <h3 className="mt-3 text-2xl font-black">Nic tu není</h3>
      <p className="mt-2 text-[#7c4a28]">Zkus změnit filtr nebo přidej nový recept.</p>
      <Button className="mt-5" onClick={onCreateRecipe}>
        <Plus size={18} /> Přidat recept
      </Button>
    </div>
  );
}
