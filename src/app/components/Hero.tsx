import phoneImage from "../../imports/Yellow_Blue_Bold_Minimalist_Documentary_Movie_Poster-1.png";
import { useState } from "react";
import { X } from "lucide-react";

export function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/xaqklyad', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => {
          setShowModal(false);
          setFormStatus('idle');
        }, 3000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section className="relative" style={{ background: 'linear-gradient(to right, white 50%, #EDE8DC 50%)' }}>
      <div className="container mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#FF5742] text-sm uppercase tracking-widest mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comunidad profesional
            </p>
            <h1 className="text-5xl md:text-7xl mb-8 text-[#1a1a1a] leading-tight">
              Terapeutas<br /><span className="italic">Anónimos</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Una plataforma para compartir conocimiento,<br />
              recursos y construir comunidad entre<br />
              profesionales de la salud mental.
            </p>
            <button onClick={() => setShowModal(true)}
              className="inline-block bg-[#FF5742] text-white px-8 py-4 rounded-full hover:bg-[#E74536] transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Únete a la comunidad
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={phoneImage} alt="Teléfono vintage" className="w-full max-w-md object-contain" />
          </div>
        </div>
      </div>

      <div className="bg-[#FF5742] py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white text-xs uppercase tracking-widest mx-8" style={{ fontFamily: 'Inter, sans-serif' }}>Construyendo comunidad</span>
          <span className="text-white text-xs mx-2">•</span>
          <span className="text-white text-xs uppercase tracking-widest mx-8" style={{ fontFamily: 'Inter, sans-serif' }}>Compartiendo conocimiento</span>
          <span className="text-white text-xs mx-2">•</span>
          <span className="text-white text-xs uppercase tracking-widest mx-8" style={{ fontFamily: 'Inter, sans-serif' }}>Fortaleciendo la profesión</span>
          <span className="text-white text-xs mx-2">•</span>
          <span className="text-white text-xs uppercase tracking-widest mx-8" style={{ fontFamily: 'Inter, sans-serif' }}>Construyendo comunidad</span>
          <span className="text-white text-xs mx-2">•</span>
          <span className="text-white text-xs uppercase tracking-widest mx-8" style={{ fontFamily: 'Inter, sans-serif' }}>Compartiendo conocimiento</span>
          <span className="text-white text-xs mx-2">•</span>
          <span className="text-white text-xs uppercase tracking-widest mx-8" style={{ fontFamily: 'Inter, sans-serif' }}>Fortaleciendo la profesión</span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-sm max-w-md w-full p-8 relative">
            <button onClick={() => { setShowModal(false); setFormStatus('idle'); }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl mb-2 text-[#1a1a1a]">Únete a la comunidad</h2>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Completa tus datos para formar parte de Terapeutas Anónimos.
            </p>
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✓</div>
                <p className="text-xl text-[#FF5742]">¡Gracias por unirte a la comunidad!</p>
                <p className="text-gray-600 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Nos pondremos en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Nombre completo *</label>
                  <input type="text" name="name" required className="w-full border border-gray-300 px-4 py-3 rounded-full focus:outline-none focus:border-[#FF5742] bg-[#FFF8F0]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Correo electrónico *</label>
                  <input type="email" name="email" required className="w-full border border-gray-300 px-4 py-3 rounded-full focus:outline-none focus:border-[#FF5742] bg-[#FFF8F0]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Teléfono / WhatsApp *</label>
                  <input type="tel" name="phone" required placeholder="+52 55 1234 5678" className="w-full border border-gray-300 px-4 py-3 rounded-full focus:outline-none focus:border-[#FF5742] bg-[#FFF8F0]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                {formStatus === 'error' && <p className="text-red-500 text-sm">Algo salió mal. Por favor intenta de nuevo.</p>}
                <button type="submit" disabled={formStatus === 'sending'}
                  className="w-full bg-[#FF5742] text-white py-4 rounded-full hover:bg-[#E74536] transition-colors mt-6 disabled:opacity-50"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {formStatus === 'sending' ? '...' : 'Enviar Solicitud'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
