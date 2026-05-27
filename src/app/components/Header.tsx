export function Header() {
  return (
    <header className="bg-[#FF5742] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-white text-base font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
              Terapeutas Anónimos
            </h1>
          </div>
          <nav className="flex gap-8 items-center">
            <a href="#newsletter" className="text-white text-xs uppercase tracking-wider hover:opacity-80 transition-opacity">Newsletter</a>
            <a href="#directorio" className="text-white text-xs uppercase tracking-wider hover:opacity-80 transition-opacity">Directorio</a>
            <a href="#comparte" className="text-white text-xs uppercase tracking-wider hover:opacity-80 transition-opacity">Comparte</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
