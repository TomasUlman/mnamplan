export function FormField({ label, children, className = '' }) {
  return (
    <label className={`space-y-2 ${className}`}>
      <span className="text-sm font-black text-[#3b2418]">{label}</span>
      {children}
    </label>
  );
}
