import valenceLogo from "../../imports/Group_1.png";

export function Footer() {
  return (
    <footer className="bg-[#FF5742] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl mb-3">Terapeutas Anónimos</h3>
          <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>2026</p>
        </div>
        <div className="flex items-center justify-center gap-2 text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span>Powered by</span>
          <img src={valenceLogo} alt="Valence" className="h-6" />
        </div>
      </div>
    </footer>
  );
}
