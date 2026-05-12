import { Plus, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export function AppHeader({ onCreateRecipe, onResetData }) {
  return (
    <header className="sticky top-0 z-30 border-b border-orange-100/70 bg-[#fff8ed]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="secondary" onClick={onResetData}>
            <RotateCcw size={17} /> Reset dat
          </Button>
          <Button onClick={onCreateRecipe}>
            <Plus size={18} /> Přidat recept
          </Button>
        </div>

        <Button className="md:hidden" onClick={onCreateRecipe} aria-label="Přidat recept">
          <Plus size={20} />
        </Button>
      </div>
    </header>
  );
}
