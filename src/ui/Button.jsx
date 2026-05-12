export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-[#f9735b] text-white shadow-lg shadow-orange-200 hover:-translate-y-0.5 hover:bg-[#ec5d45]',
    secondary: 'bg-white text-[#3b2418] ring-1 ring-orange-100 hover:-translate-y-0.5 hover:bg-orange-50',
    ghost: 'bg-transparent text-[#7c4a28] hover:bg-orange-100/70',
    danger: 'bg-red-50 text-red-700 ring-1 ring-red-100 hover:bg-red-100',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
