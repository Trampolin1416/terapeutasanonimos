import { useState } from "react";

export function Comparte() {
  const [formType, setFormType] = useState("article");
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/mlgvoeao', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setFormType("article");
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="comparte" className="py-24 bg-[#FFF8F0]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-[#FF5742] text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Únete</p>
            <h2 className="text-5xl md:text-6xl mb-6 text-[#1a1a1a]"><span className="italic">Comparte</span></h2>
            <p className="text-gray-700 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Comparte tu conocimiento con la comunidad o únete al directorio.</p>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">✓</div>
              <p className="text-2xl text-[#FF5742] mb-2">¡Gracias por tu contribución!</p>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Nos pondremos en contacto pronto.</p>
              <button onClick={() => setFormStatus('idle')}
                className="mt-8 bg-[#FF5742] text-white px-8 py-3 rounded-full hover:bg-[#E74536] transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                Enviar otra contribución
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Nombre completo *</label>
                  <input type="text" name="name" required className="w-full border border-gray-300 px-4 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-white" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Email *</label>
                  <input type="email" name="email" required className="w-full border border-gray-300 px-4 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-white" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Tipo de contribución *</label>
                <select name="type" value={formType} onChange={(e) => setFormType(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-white"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  <option value="article">Artículo para newsletter</option>
                  <option value="resource">Recurso o herramienta</option>
                  <option value="event">Evento o conferencia</option>
                  <option value="directory">Unirme al directorio</option>
                </select>
              </div>

              {formType === "directory" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Especialidad *</label>
                    <input type="text" name="specialty" required placeholder="Ej: Terapia Cognitivo-Conductual"
                      className="w-full border border-gray-300 px-4 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-white" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>Ubicación *</label>
                    <input type="text" name="location" required placeholder="Ej: Ciudad de México"
                      className="w-full border border-gray-300 px-4 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-white" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {formType === "directory" ? "Teléfono" : "Título"} *
                </label>
                <input type="text" name="title" required
                  placeholder={formType === "directory" ? "+52 55 1234 5678" : ""}
                  className="w-full border border-gray-300 px-4 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-white" style={{ fontFamily: 'Inter, sans-serif' }} />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {formType === "directory" ? "Biografía" : "Descripción"} *
                </label>
                <textarea name="description" required rows={6}
                  className="w-full border border-gray-300 px-4 py-4 rounded-2xl focus:outline-none focus:border-[#FF5742] resize-none bg-white" style={{ fontFamily: 'Inter, sans-serif' }} />
              </div>

              {formStatus === 'error' && <p className="text-red-500 text-sm">Algo salió mal. Por favor intenta de nuevo.</p>}

              <button type="submit" disabled={formStatus === 'sending'}
                className="w-full bg-[#FF5742] text-white py-5 rounded-full hover:bg-[#E74536] transition-colors disabled:opacity-50"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {formStatus === 'sending' ? '...' : 'Enviar contribución'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
