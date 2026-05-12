import { X } from "lucide-react";
import { Button } from "./Button";

export function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#3b2418]/35 p-3 backdrop-blur-sm sm:items-center">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[2rem] bg-[#fffaf1] p-5 food-shadow sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-black text-[#3b2418]">{title}</h2>
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#3b2418] transition hover:bg-[#f3dfc0]"
            onClick={onClose}
            aria-label="Zavřít"
          >
            <X className="h-7 w-7" strokeWidth={2.8} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
