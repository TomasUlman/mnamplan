import { CalendarDays, Sparkles } from 'lucide-react';
import { Button } from '../../../ui/Button';

export function MealPlanHeader({ mode, onModeChange, onGenerate }) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-orange-100">
          <CalendarDays size={15} /> Jídelníček
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Co bude dneska dobrého?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-orange-100/80">
          Generátor náhodně vybírá snídani, oběd a večeři z uložených receptů. Když máš málo receptů v některé kategorii, použije dostupné opakovaně.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="grid grid-cols-2 rounded-full bg-white/10 p-1">
          <button
            className={`rounded-full px-4 py-2 text-sm font-black transition ${mode === 'day' ? 'bg-white text-[#3b2418]' : 'text-white/80'}`}
            onClick={() => onModeChange('day')}
          >
            1 den
          </button>
          <button
            className={`rounded-full px-4 py-2 text-sm font-black transition ${mode === 'week' ? 'bg-white text-[#3b2418]' : 'text-white/80'}`}
            onClick={() => onModeChange('week')}
          >
            Týden
          </button>
        </div>
        <Button onClick={onGenerate} className="shadow-none">
          <Sparkles size={18} /> Vygenerovat
        </Button>
      </div>
    </div>
  );
}
