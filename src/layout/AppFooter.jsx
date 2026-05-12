import { Github } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="px-4 pb-8 text-center text-sm font-semibold text-[#9b6847]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 rounded-[1.5rem] bg-white/60 px-5 py-4 ring-1 ring-orange-100 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Tomáš Ulman. MňamPlán vznikl jako
          experiment s tvorbou aplikace za pomoci AI.
        </p>

        <a
          href="https://github.com/TomasUlman"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-black text-[#3b2418] ring-1 ring-orange-100 transition hover:bg-orange-50"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>

      <p className="mt-3 text-xs text-[#b17a55]">
        Data jsou zatím uložená lokálně v prohlížeči přes localStorage.
      </p>
    </footer>
  );
}
