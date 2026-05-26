import { Calendar, User, X } from "lucide-react";
import { useState } from "react";
import chillPillsImage from "../../imports/39a1a037d04971c4f5367e48b00fa457.jpg";
import walkmanImage from "../../imports/08c20f92962fa1fbc8c16ff955c5ad31.jpg";
import polaroidImage from "../../imports/537309b17bc9f1ea515e9ed1b70c0e70.jpg";

const articles = [
  {
    id: 1,
    title: "Las chill pills ya llegaron y se llaman Valence",
    description: "¡Buenas noticias! Desde México estamos cambiando la terapia.",
    date: "22 Mayo 2026",
    author: "Neuropsicóloga Fernanda Arozqueta",
    image: chillPillsImage,
    content: `
      <p><strong>Algo está cambiando en la salud mental y los números no mienten.</strong></p>
      <p>En 2024, ChatGPT reportó que una de las categorías de uso más frecuentes de sus usuarios era buscar apoyo emocional. No información. No productividad. Apoyo emocional. Millones de personas abriéndole su corazón a un modelo de lenguaje porque necesitaban ser escuchadas en ese momento, a esa hora, ese día.</p>
      <p>No es un dato menor. Es una señal.</p>
      <p>La demanda de contención en tiempo real es real, es masiva y no va a desaparecer. Y la pregunta que nos hacemos en Valence no es si eso está pasando (está pasando) sino quién debería estar ahí cuando pasa.</p>
      <p><strong>Nuestra respuesta es clara: tú.</strong></p>
      <h3>El momento que estamos viviendo</h3>
      <p>Estamos en el punto de inflexión más importante de la historia de la salud mental. La tecnología por fin alcanzó a la demanda. Las personas quieren apoyo continuo, personalizado y accesible, y los LLMs demostraron que hay un apetito enorme por ese acompañamiento entre sesiones.</p>
      <p>Pero los LLMs no tienen formación clínica. No tienen tu criterio. No tienen la relación terapéutica que tú construiste con tu paciente semana a semana.</p>
      <p>Valence sí sabe eso. Y por eso existe.</p>
      <h3>Qué es Valence</h3>
      <p>Valence es infraestructura entre sesiones para salud mental. Captura la experiencia emocional del paciente en tiempo real, la procesa con inteligencia artificial y te entrega señal clínica accionable antes de tu próxima sesión.</p>
      <p>No es un chatbot que reemplaza al terapeuta. Es la herramienta que pone toda esa demanda de contención en tiempo real al servicio de tu práctica clínica. El paciente tiene acompañamiento continuo. Tú tienes contexto. Y la relación terapéutica, que es lo que realmente transforma, sigue siendo tuya.</p>
      <p>Nuestro piloto con 110 usuarios activos en México lo confirma: los pacientes que usaron Valence reportaron sentirse más acompañados entre sesiones y más preparados para cada cita. No porque la tecnología los terapió. Sino porque llegaron con más claridad sobre lo que habían vivido.</p>
      <h3>El psicólogo al centro. Siempre.</h3>
      <p>En un momento en que la IA amenaza con desintermediar profesiones enteras, Valence hace lo contrario: protege tu relevancia clínica y te da más de lo que nadie más puede darte: tiempo, contexto y continuidad.</p>
      <p>La interpretación, la relación terapéutica, la decisión clínica: eso es tuyo. Exclusivamente tuyo. Valence solo se asegura de que llegues a cada sesión con todo lo que necesitas para hacer tu mejor trabajo.</p>
      <h3>¿Y ahora qué?</h3>
      <p>Si eres psicólogo en México y quieres ser parte del cambio, esto es para ti.</p>
      <p>Entra a <a href="https://www.werevalence.com" target="_blank" rel="noopener noreferrer" style="color: #FF5742; text-decoration: underline;">www.werevalence.com</a></p>
      <p><strong>Las chill pills, por fin, ya llegaron.</strong></p>
    `
  },
  {
    id: 2,
    title: "El Walkman que nunca tuvieron y no pueden soltar",
    description: "Cuando el cerebro extraña algo que nunca vivió. Esto es lo que pasa clínicamente.",
    date: "18 Mayo 2026",
    author: "Neuropsicóloga Fernanda Arozqueta",
    image: walkmanImage,
    content: `
      <p>Si has atendido adolescentes en los últimos años, probablemente ya lo viste: el adolescente de 16 años que colecciona cassettes, el adolescente que usa cámara Polaroid, el paciente que siente una añoranza profunda por los años 80 en una década en la que no había nacido.</p>
      <p>No es una pose. Es un fenómeno psicológico real con nombre propio, y vale la pena que lo conozcas.</p>
      <h3>Nostalgia vicaria: extrañar lo que nunca viviste</h3>
      <p>La nostalgia por un período que no se ha vivido directamente ha sido denominada <strong>nostalgia vicaria</strong> (Goulding, 2002). A diferencia de la nostalgia clásica que evoca memorias personales, la nostalgia vicaria se construye a partir de imágenes, objetos, historias y representaciones culturales de una época ajena.</p>
      <p>La experiencia nostálgica de la Generación Z no está arraigada en vivencias propias, sino en representaciones mediadas del pasado: videos de YouTube, reboots de Netflix, estéticas curadas en Instagram y tendencias retro en TikTok. Lo que activa la respuesta emocional no es el recuerdo. Es la construcción afectiva de un pasado idealizado.</p>
      <h3>Por qué el cerebro busca esto</h3>
      <p>La nostalgia es una emoción predominantemente positiva, autorrelevante y social que cumple funciones psicológicas clave (Sedikides & Wildschut, 2008). Entre esas funciones: reforzar la continuidad del self, aumentar el sentido de pertenencia y regular el afecto negativo.</p>
      <p>Para los adolescentes de hoy, esas funciones son especialmente urgentes. Cuando todo está optimizado, las estéticas nostálgicas se sienten humanas; cuando el contenido es infinito, los formatos más antiguos se sienten intencionales. La nostalgia, en ese contexto, no es escapismo. Es regulación emocional.</p>
      <h3>La función de construcción de identidad</h3>
      <p>La investigadora Krystine Batcho explica que este fenómeno ayuda a los adolescentes a construir su identidad durante los años formativos: cuando estás descubriendo quién eres, mirar al pasado ofrece estéticas, valores y referentes culturales ya hechos para probar. El Walkman, la cámara de rollo, el cassette. No son objetos. Son declaraciones de identidad en un mundo donde diferenciarse se vuelve cada vez más difícil.</p>
      <h3>Qué hacer con esto en el consultorio</h3>
      <p>Cuando un adolescente llega con esta nostalgia vicaria, no la desestimes. Pregunta por ella. ¿Qué era esa época para ellos? ¿Qué representa lo que añoran? ¿Simplicidad? ¿Conexión sin pantallas? ¿Un mundo más lento?</p>
      <p><strong>El Walkman que nunca tuvieron les dice algo sobre lo que sí necesitan ahora.</strong></p>
    `
  },
  {
    id: 3,
    title: "La foto que faltaba en la psicología mexicana",
    description: "La comunidad de psicólogos más actual de México ya está aquí. Entra.",
    date: "20 Mayo 2026",
    author: "Neuropsicóloga Fernanda Arozqueta",
    image: polaroidImage,
    content: `
      <p><strong>Hay algo que no te enseñaron en la maestría.</strong></p>
      <p>No está en los manuales del DSM ni en las supervisions clínicas. No lo aprendes en el consultorio ni en los congresos de psicología. Es algo que los psicólogos mexicanos hemos construido solos, en silencio, sin infraestructura y sin comunidad real que nos sostenga.</p>
      <p>La práctica clínica en México es, todavía, un ejercicio profundamente solitario.</p>
      <p>Y eso está a punto de cambiar.</p>
      <h3>El psicólogo mexicano de hoy</h3>
      <p>Vivimos un momento sin precedentes en la historia de la salud mental. La demanda de atención psicológica en México creció más de un 40% después de la pandemia. Los tiempos de espera se alargaron. Los pacientes llegaron más complejos, más urgentes, más informados. Y los psicólogos seguimos atendiendo desde el mismo modelo de siempre: solos, por hora, sin red.</p>
      <p><strong>Terapeutas Anónimos nació exactamente de ahí.</strong></p>
      <h3>Una comunidad al frente, no detrás</h3>
      <p>Terapeutas Anónimos no es un grupo de WhatsApp ni un directorio de referidos. Es la primera comunidad de psicólogos mexicanos construida para estar al frente de los cambios que están transformando nuestra profesión.</p>
      <p>Porque los psicólogos mexicanos tenemos algo que ningún modelo de lenguaje va a tener jamás: formación clínica real, relación terapéutica, criterio humano y contexto cultural. Y eso, en el mundo que viene, vale más que nunca.</p>
      <h3>La foto que faltaba</h3>
      <p>Durante mucho tiempo, la psicología mexicana tuvo todo menos una imagen colectiva de sí misma. Profesionales brillantes trabajando en silos, sin saber quién más estaba haciendo cosas increíbles a tres colonias de distancia.</p>
      <p>Esa foto ahora existe. Y tú estás en ella.</p>
      <p><strong>Bienvenido a Terapeutas Anónimos.</strong></p>
    `
  }
];

export function Newsletter() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="newsletter" className="py-24 container mx-auto px-6 bg-[#FFF8F0]">
      <div className="mb-16">
        <p className="text-[#FF5742] text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Contenido</p>
        <h2 className="text-5xl md:text-6xl mb-6 text-[#1a1a1a]"><span className="italic">Newsletter</span></h2>
        <p className="text-gray-700 max-w-2xl text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
          Artículos y recursos sobre temas relevantes en salud mental para la comunidad profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.id} onClick={() => setSelectedArticle(article)}
            className="bg-white hover:shadow-lg transition-shadow cursor-pointer rounded-sm overflow-hidden">
            {article.image && (
              <div className="w-full h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl mb-4 text-[#1a1a1a] leading-tight">{article.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{article.description}</p>
              <div className="flex flex-col gap-2 text-xs text-gray-600 pt-4 border-t border-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /><span>{article.date}</span></div>
                <div className="flex items-center gap-2"><User className="w-3 h-3" /><span>{article.author}</span></div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-start justify-center p-4 py-12">
            <div className="bg-white rounded-sm max-w-3xl w-full relative">
              <button onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg z-10">
                <X className="w-6 h-6" />
              </button>
              {selectedArticle.image && (
                <div className="w-full h-64 overflow-hidden">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl mb-4 text-[#1a1a1a] leading-tight pr-12">{selectedArticle.title}</h2>
                <div className="flex gap-6 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{selectedArticle.date}</span></div>
                  <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>{selectedArticle.author}</span></div>
                </div>
                <div className="article-content text-gray-800 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
