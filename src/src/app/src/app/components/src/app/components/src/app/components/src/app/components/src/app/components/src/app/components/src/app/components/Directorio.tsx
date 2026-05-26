import { MapPin, Calendar, Users, Globe, Link as LinkIcon, ChevronLeft, ChevronRight, X, GraduationCap, BookOpen, Lightbulb, Phone, Mail, Instagram } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const psychologists = [
  { id: 1, name: "Michelle Aziz", specialty: "Terapeuta infantil, terapeuta gestalt, terapeuta corporal biodinámica, especialista en crianza durante la primera infancia", topics: "Asesorías a padres y cuidadores de la primera infancia, en temas de apego, comportamientos, vínculos y cambios", population: "Adultos", modality: "Ambas", location: "Lomas de Chapultepec", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "Calendly u otra plataforma", bookingLink: "https://needo.mx/asesorias/", phone: "5526535420", email: "michelle@needo.mx", instagram: "@michelleazizk", languages: "Español", workshops: "Si", workshopTopics: "Crianza, Desarrollo Infantil, Apego, Berrinches, Límites, Batería Emocional, Desarrollo del Cerebro Infantil", projects: "Podcast: Needo Talks, Podcast: Bendita Terapia, Editorial Needo Books", studies: "", additionalInfo: "Tengo 1 libro: Berrinches: Herramientas para una crianza emocional y 5 libros infantiles" },
  { id: 2, name: "Loretta Nieto", specialty: "Terapia de pareja y terapia sexual", topics: "Temas sexuales, solución de conflictos en pareja, infidelidad, la pareja después de los hijos etc..", population: "Adultos jóvenes (18–25), Adultos, Parejas", modality: "Ambas", location: "Estoy en Qro y una vez cada 2-3 meses en Santa Fe cdmx", availability: "Lista de espera larga (más de 1 mes)", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5585803853", email: "Psiclorettanieto@gmail.com", instagram: "@Psicologiaconloretta", languages: "Español", workshops: "Si", workshopTopics: "La pareja después de los hijos, como conectar sexualmente con tu pareja, resolución de conflictos en pareja", projects: "Trabajando en ello", studies: "Maestría en terapia sexual y de pareja (Universidad de Barcelona) y doctorado en investigación de psicología (UDLA)", additionalInfo: "" },
  { id: 3, name: "Ivanna velasco", specialty: "Adicciones", topics: "Consumo, dependencia y adicciones. Prevención, tratamiento y post tratamiento.", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "Presencial", location: "Virreyes", availability: "Tengo lista de espera corta (menos de 1 mes)", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5536552062", email: "ivanna.velasco05@gmail.com", instagram: "@ibu_v", languages: "Español", workshops: "Si", workshopTopics: "Cualquier tema que tenga que ver con emociones o consumo", projects: "", studies: "Anahuac y monte fénix", additionalInfo: "" },
  { id: 4, name: "Ivona Kokovic", specialty: "Gestalt", topics: "relaciones de pareja, dependencia emocional, manejo de emociones, crisis de vida, duelo, estrés, límites personales y procesos de autoconocimiento.", population: "Adultos jóvenes (18–25), Adultos, Adultos mayores", modality: "Ambas", location: "Polanco", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo, Correo electrónico", bookingLink: "", phone: "5632454545", email: "coachivona@gmail.com", instagram: "Ivonakoksi.therapist", languages: "Español, Inglés, Serbio", workshops: "Si", workshopTopics: "De muchas (communicacion, interupcion en desarollo etc", projects: "https://www.innerworkbyivona.com", studies: "En instituto de himanista (IHPG) Desarollo humano y enfoque gestalt", additionalInfo: "" },
  { id: 5, name: "Kepa Borda", specialty: "Gestalt y psicocorporal", topics: "Adicciones/depresión/ansiedad/impulso suicida", population: "Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Lomas de Chapultepec", availability: "Tengo lista de espera corta (menos de 1 mes)", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5560700989", email: "pedrobcrmit@gmail.com", instagram: "Kepa.bo", languages: "Español, Inglés", workshops: "Si", workshopTopics: "Sensibilización emocional, Ansiedad, Adicciones, Meditación y psicoterapia", projects: "Terapia de grupo Y talleres de sensibilización emocional", studies: "IHPG, Escuela Gestalt Viva Claudio Naranjo, Corpore", additionalInfo: "Es una terapia viva/práctica en donde se promueve aplicar con acciones lo explorado en terapia." },
  { id: 6, name: "Amaya Escourido Echeverria", specialty: "Cognitivo conductual", topics: "Ansiedad, depresion, tca, asesoria a padres", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "En línea", location: "", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo, Llamada, Correo electrónico, Calendly u otra plataforma", bookingLink: "", phone: "5621248080", email: "amaya.eevc@gmail.com", instagram: "Psicoterapia.ae", languages: "Español, Inglés", workshops: "Lo estoy desarrollando", workshopTopics: "", projects: "", studies: "Isep Madrid. Psicoterapia infantijuvenil y TCA", additionalInfo: "" },
  { id: 7, name: "JORGE LUIS ESTEVEZ CHAVARRIA", specialty: "GESTALT", topics: "Duelos y abusos", population: "Adultos jóvenes (18–25), Adultos, Adultos mayores, Parejas", modality: "Ambas", location: "NARVARTE", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo, Correo electrónico", bookingLink: "", phone: "5526990747", email: "jorgeluisestevez1963@gmail.com", instagram: "", languages: "Español", workshops: "Si", workshopTopics: "DUELO", projects: "PODCAST", studies: "UNIGEA", additionalInfo: "" },
  { id: 8, name: "Regina Cejudo de la Sierra", specialty: "Adolescentes, familias y logoterapia", topics: "Comunidad LGBTQIA+ y Adolescentes", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Condesa", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "+52 55 3710 6089", email: "regina.cejudo@gmail.com", instagram: "@ceju.re", languages: "Español", workshops: "Si", workshopTopics: "Para orientación a madres y padres de personas de la comunidad LGBTQIA+, de orientación a familias y de sexualidad", projects: "Club de lectura con enfoque psicológico", studies: "Maestría en psicopedagogía en la universidad de Barcelona y especialidad en logoterapia en SMAEL", additionalInfo: "" },
  { id: 9, name: "Saúl Nieto Serrano", specialty: "Humanista Gestalt / Sistémico Familiar", topics: "Ansiedad, depresión, problemas de conducta, manejo de emociones, psicoeducación, problemas de comunicación en la familia, evaluación y trabajo familiar", population: "Niños (0–12), Adolescentes (13–17), Adultos jóvenes (18–25), Adultos, Parejas, Familias", modality: "Ambas", location: "Narvarte / Alamos", availability: "Tengo lista de espera corta (menos de 1 mes)", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5530345833", email: "nietosaul.cics@gmail.com", instagram: "@Elixir_para_neuronas_podcast", languages: "Español", workshops: "Lo estoy desarrollando", workshopTopics: "Temas en terapia familiar y psicología y alimentación", projects: "Podcast: Elixir para neuronas rebeldes / Platicas: La silla rebelde", studies: "Instituto de la Familia A. C. / Terapia Sistémico Familiar", additionalInfo: "Docente a nivel licenciatura en las carreras de psicología, pedagogía y nutrición" },
  { id: 10, name: "Paulette Guraieb Galland", specialty: "Desarrollo humano", topics: "", population: "Adolescentes (13–17), Adultos jóvenes (18–25)", modality: "Ambas", location: "Zona poniente, Lerma", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Depende del caso, contáctenme primero", howToBook: "WhatsApp directo, Llamada, Correo electrónico", bookingLink: "", phone: "+525568034444", email: "pguraiebgalland@gmail.com", instagram: "", languages: "Español, Inglés", workshops: "Si", workshopTopics: "De sensibilización gestalt, en diferentes temas dependiendo del público/necesidad", projects: "", studies: "Desarrollo Humano en IHPG, maestría en psicoterapia Gestalt", additionalInfo: "" },
  { id: 11, name: "Estrella Agami", specialty: "Psicoterapia psicoanalítica adultos", topics: "Ninguno en particular.", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Prado norte", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5527352396", email: "estrellagami@gmail.com", instagram: "Estrella.agami", languages: "Español", workshops: "Lo estoy desarrollando", workshopTopics: "", projects: "No por el momento", studies: "En centro Eleia. En clínica psicoanalítica", additionalInfo: "" },
  { id: 12, name: "Denisse Avayou", specialty: "Especialista en TCA y crianza positiva", topics: "Imagen corporal disfuncional, conductas alimentarias de riesgo y padres que buscan conectar con sus hijos desde el amor y amabilidad.", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos, Parejas", modality: "En línea", location: "", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo, Llamada", bookingLink: "", phone: "5538200773", email: "denavayou@gmail.com", instagram: "Psic.denissea", languages: "Español", workshops: "Si", workshopTopics: "Para mujeres adolescentes en prevención de TCA", projects: "Podcast con 2 psicoterapeutas y yo", studies: "CEPAC- clínica de TCA en el hospital ABC. Babytribu: Máster en crianza y UNIR: Maestría en intervención social y familiar sistémica", additionalInfo: "Soy mamá de 2 niñas ♥️" },
  { id: 13, name: "Alicia López Piña", specialty: "Terapeuta existencial y fenomenologica. Especialista en terapia familiar y de pareja", topics: "Problemáticas de pareja, familiares. Duelos. Procesos relacionados con ansiedad, crisis existenciales, autoestima, vínculos afectivos y etapas de transición.", population: "Adultos jóvenes (18–25), Adultos, Adultos mayores, Parejas, Familias", modality: "Ambas", location: "Colonia del valle", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5532076963", email: "marialy29@gmail.com", instagram: "@TERAPIACONALILP", languages: "Español", workshops: "Si", workshopTopics: "Resignificar el proceso de Menopausia y otros momentos de cambio", projects: "Libros de Orientación vocacional Editorial Paidos", studies: "Maestría en terapia existencial en Cirex y especialidad en terapia familiar y de pareja en Instituto Personas", additionalInfo: "Tengo experiencia en orientación vocacional. Estoy haciendo un diplomado en integración terapéutica de procesos psicodelicos" },
  { id: 14, name: "Lorea De La Parra", specialty: "Psicoanálisis / Trastornos de Conducta Alimentaria", topics: "TCA trastornos de conducta alimentaria", population: "Adultos jóvenes (18–25), Adultos, Parejas", modality: "Ambas", location: "Polanco", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5530376768", email: "loreadlp@gmail.com", instagram: "@psicologa_lorea", languages: "Español, Inglés, Francés", workshops: "Si", workshopTopics: "Imagen corporal / cómo tratar pacientes con TCA para profesionales de la salud", projects: "Curso Body Image Program / Masterclass para profesionales sobre pacientes con TCA", studies: "Formación psicoanálisis en sociedad psicoanalítica México / TCA en Anahuac, TCA en APTA, CEDS en curso", additionalInfo: "Trabajo en clínica APTA, RENACE. No recibo pacientes con un IMC menor a 18.5" },
  { id: 15, name: "Rosa Mary Lázaro", specialty: "Psicoterapia Integrativa y Dialéctica Conductual", topics: "Ansiedad, Depresión, Trastorno Límite de la Personalidad", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Polanco", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5544992464", email: "rosamaryld@hotmail.com", instagram: "Rosca_", languages: "Español", workshops: "No", workshopTopics: "", projects: "", studies: "Ibero y Linehan Institute", additionalInfo: "" },
  { id: 16, name: "Julio Cacheux", specialty: "Psicoanálisis e intervención terapéutica en adicciones", topics: "Depresión, Duelos, Ansiedad, Adicciones, TLP y otras.", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Polanco y Roma Norte", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5585805751", email: "julio.cacheux@gmail.com", instagram: "@julio_cacheux", languages: "Español", workshops: "Si", workshopTopics: "Varios: Depresión, adicciones, problemas de pareja y Desesperanza e ideación suicida.", projects: "Escribiendo libro", studies: "Universidad de Buenos Aires. Maestría en Psicoanálisis", additionalInfo: "Una máxima de vida es que nunca se deja de aprender." },
  { id: 17, name: "Veronica Domit", specialty: "Psicoterapia Gestalt, especializada en Trauma. Certificada en EMDR y IFS", topics: "Trauma, Ansiedad, depresión, adicciones.", population: "Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Prado Norte", availability: "Lista de espera larga (más de 1 mes)", acceptsReferrals: "Depende del caso, contáctenme primero", howToBook: "WhatsApp directo", bookingLink: "", phone: "5565430179", email: "vdomit@gmail.com", instagram: "Psic.veronicadomit", languages: "Español, Inglés", workshops: "Si", workshopTopics: "El último que di fue sobre Alquimia Emocional, cómo transformar un momento difícil en crecimiento", projects: "Estoy dando un grupo de apoyo emocional para estudiantes de posgrado de la UNAM. Y tengo un libro en mente.", studies: "Licenciatura en psicología en la IBERO, maestría en psicoterapia Gestalt en IHPG, EMDR en el EMDR institute, IFS nivel 1 y próximamente 2.", additionalInfo: "" },
  { id: 18, name: "Eduardo Velasco Téllez", specialty: "Humanista", topics: "Propósito de vida / relaciones", population: "Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Condesa", availability: "Lista de espera larga (más de 1 mes)", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5520850499", email: "bamboquiri@gmail.com", instagram: "eduardo_velasco_psicoterapia", languages: "Español, Inglés", workshops: "Si", workshopTopics: "Diferentes temas, psicoterapia corporal, Gestalt. Autoconocimiento", projects: "Bendita Terapia Podcast", studies: "Core Energetics Institute NY, Escuela Gestalt Viva Claudio Naranjo", additionalInfo: "" },
  { id: 19, name: "Mari Cruz Vigil escalera", specialty: "Humanista Gestalt", topics: "Autoconocimiento y desarrollo personal, Manejo emocional, Relaciones interpersonales, Sexualidad femenina.", population: "Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Roma norte", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "2223778459", email: "maricruzvigile@gmail.com", instagram: "Naturar_me", languages: "Español, Inglés", workshops: "Si", workshopTopics: "Sexualidad femenina", projects: "Talleres de sexualidad femenina", studies: "Psicoterapia Gestalt Integrativa- Gestalt Viva Claudio Naranjo, Formación de Sexualidad Integrativa - Cercle, Barcelona.", additionalInfo: "" },
  { id: 20, name: "Daniela Ramírez Charbonneau", specialty: "Adolecentes y adultos con orientación psicoanalítica", topics: "Trastornos de alimentación, psicología deportiva, problemáticas propias de la adolescencia y el manejo con los padres", population: "Adolescentes (13–17), Adultos jóvenes (18–25), Adultos", modality: "Ambas", location: "Bosques de las Lomas", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5568930175", email: "dani.rmz.ch@gmail.com", instagram: "", languages: "Español", workshops: "No", workshopTopics: "", projects: "", studies: "Asociación Psicoanalítica Mexicana (APM)", additionalInfo: "" },
  { id: 21, name: "Andrea Anaya Alós", specialty: "Integral", topics: "", population: "Niños (0–12), Adolescentes (13–17), Adultos jóvenes (18–25), Adultos, Parejas", modality: "En línea", location: "", availability: "Lista de espera larga (más de 1 mes)", acceptsReferrals: "Si, con gusto", howToBook: "WhatsApp directo", bookingLink: "", phone: "5529226378", email: "andreaanayaalos@gmail.com", instagram: "@andreaanayaalos", languages: "Español, Inglés", workshops: "Si", workshopTopics: "Emociones, heridas de la infancia, autoestima", projects: "Podcast y talleres", studies: "UDLA, Institut Mensalus Barcelona, Instituto de psicoterapia de Juego de México, Serendipity, Vinclas Barcelona, ISEP, Feelink", additionalInfo: "" },
  { id: 22, name: "Daniela Durazo", specialty: "imagen corporal, atracones y trastornos alimenticios", topics: "mujeres que quieren mejorar su imagen corporal y atracones", population: "Adultos jóvenes (18–25), Adultos, Adultos mayores", modality: "En línea", location: "", availability: "Sí, tengo lugares disponibles", acceptsReferrals: "Depende del caso, contáctenme primero", howToBook: "Correo electrónico, Calendly u otra plataforma", bookingLink: "https://calendly.com/danieladurazo/disco-call", phone: "+1 305 205 5959", email: "danieladurazoa@gmail.com", instagram: "@bodyimage.binge.coach", languages: "Español, Inglés", workshops: "Si", workshopTopics: "imagen corporal y atracones", projects: "tengo dos programas en grupo uno para atracones con una nutriologa y otro para mejorar tu imagen corporal", studies: "Estados Unidos en Miami, FL", additionalInfo: "N/A" }
];

function ProfileModal({ psych, onClose }: { psych: typeof psychologists[0], onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-start justify-center p-4 py-12">
        <div className="bg-white rounded-sm max-w-3xl w-full relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-lg z-10">
            <X className="w-6 h-6" />
          </button>
          <div className="p-8 md:p-12">
            <h2 className="text-4xl mb-2 text-[#1a1a1a] pr-12">{psych.name}</h2>
            <p className="text-[#FF5742] text-xl mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>{psych.specialty}</p>
            <div className="space-y-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              {psych.topics && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Temas que atiende</p><p className="text-gray-800 leading-relaxed">{psych.topics}</p></div>)}
              <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Población</p><div className="flex items-center gap-2 text-gray-800"><Users className="w-4 h-4" /><span>{psych.population}</span></div></div>
              {psych.languages && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Idiomas</p><p className="text-gray-800">{psych.languages}</p></div>)}
              <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Modalidad</p><div className="flex items-center gap-2 text-gray-800"><Globe className="w-4 h-4" /><span>{psych.modality}</span></div></div>
              {psych.location && psych.location !== "No aplica" && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Ubicación</p><div className="flex items-center gap-2 text-gray-800"><MapPin className="w-4 h-4" /><span>{psych.location}</span></div></div>)}
              <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Disponibilidad</p><div className="flex items-center gap-2 text-gray-800"><Calendar className="w-4 h-4" /><span>{psych.availability}</span></div></div>
              <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Acepta referidos</p><p className="text-gray-800">{psych.acceptsReferrals}</p></div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-500 uppercase tracking-wider text-xs mb-3">Contacto</p>
                <div className="space-y-2">
                  {psych.phone && (<div className="flex items-center gap-2 text-gray-800"><Phone className="w-4 h-4" /><a href={`tel:${psych.phone}`} className="hover:text-[#FF5742]">{psych.phone}</a></div>)}
                  {psych.email && (<div className="flex items-center gap-2 text-gray-800"><Mail className="w-4 h-4" /><a href={`mailto:${psych.email}`} className="hover:text-[#FF5742]">{psych.email}</a></div>)}
                  {psych.instagram && (<div className="flex items-center gap-2 text-gray-800"><Instagram className="w-4 h-4" /><a href={`https://instagram.com/${psych.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5742]">{psych.instagram}</a></div>)}
                </div>
              </div>
              {psych.studies && (<div className="pt-4 border-t border-gray-200"><p className="text-gray-500 uppercase tracking-wider text-xs mb-2 flex items-center gap-2"><GraduationCap className="w-4 h-4" />Estudios de especialidad</p><p className="text-gray-800 leading-relaxed">{psych.studies}</p></div>)}
              {psych.workshops && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4" />Talleres o grupos terapéuticos</p><p className="text-gray-800 mb-2">{psych.workshops}</p>{psych.workshopTopics && (<p className="text-gray-700 text-sm leading-relaxed">{psych.workshopTopics}</p>)}</div>)}
              {psych.projects && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-2 flex items-center gap-2"><Lightbulb className="w-4 h-4" />Proyectos</p><p className="text-gray-800 leading-relaxed">{psych.projects}</p></div>)}
              {psych.additionalInfo && (<div className="pt-4 border-t border-gray-200"><p className="text-gray-500 uppercase tracking-wider text-xs mb-2">Información adicional</p><p className="text-gray-800 leading-relaxed">{psych.additionalInfo}</p></div>)}
              <div className="pt-6 border-t border-gray-300">
                <p className="text-gray-500 uppercase tracking-wider text-xs mb-3">Cómo agendar</p>
                <p className="text-gray-800 mb-3">{psych.howToBook}</p>
                {psych.bookingLink && (<a href={psych.bookingLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FF5742] hover:underline"><LinkIcon className="w-4 h-4" /><span>Link de agenda</span></a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PsychologistCard({ psych, onViewProfile }: { psych: typeof psychologists[0], onViewProfile: () => void }) {
  return (
    <div className="bg-[#FFF8F0] p-8 hover:shadow-lg transition-shadow rounded-sm h-full flex flex-col">
      <h3 className="text-2xl mb-2 text-[#1a1a1a]">{psych.name}</h3>
      <p className="text-[#FF5742] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>{psych.specialty}</p>
      <div className="space-y-4 text-sm flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
        {psych.topics && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Temas que atiende</p><p className="text-gray-800">{psych.topics}</p></div>)}
        <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Población</p><div className="flex items-center gap-2 text-gray-800"><Users className="w-4 h-4" /><span>{psych.population}</span></div></div>
        <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Modalidad</p><div className="flex items-center gap-2 text-gray-800"><Globe className="w-4 h-4" /><span>{psych.modality}</span></div></div>
        {psych.location && psych.location !== "No aplica" && (<div><p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Ubicación</p><div className="flex items-center gap-2 text-gray-800"><MapPin className="w-4 h-4" /><span>{psych.location}</span></div></div>)}
        <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Disponibilidad</p><div className="flex items-center gap-2 text-gray-800"><Calendar className="w-4 h-4" /><span>{psych.availability}</span></div></div>
        <div><p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Acepta referidos</p><p className="text-gray-800">{psych.acceptsReferrals}</p></div>
      </div>
      <div className="pt-6 mt-6 border-t border-gray-300">
        <button onClick={onViewProfile} className="w-full bg-[#FF5742] text-white py-3 rounded-full hover:bg-[#E74536] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
          Ver perfil completo
        </button>
      </div>
    </div>
  );
}

export function Directorio() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPsychologist, setSelectedPsychologist] = useState<typeof psychologists[0] | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', slidesToScroll: 2 });

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const filteredPsychologists = psychologists.filter(psych => {
    const searchLower = searchTerm.toLowerCase();
    return psych.name.toLowerCase().includes(searchLower) ||
           psych.specialty.toLowerCase().includes(searchLower) ||
           psych.topics.toLowerCase().includes(searchLower) ||
           psych.population.toLowerCase().includes(searchLower);
  });

  return (
    <section id="directorio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#FF5742] text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Encuentra profesionales</p>
          <h2 className="text-5xl md:text-6xl mb-6 text-[#1a1a1a]"><span className="italic">Directorio</span></h2>
          <p className="text-gray-700 max-w-2xl text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>Encuentra profesionales de la salud mental en México.</p>
        </div>
        <div className="mb-12">
          <input type="text" placeholder="Buscar por nombre, especialidad, o temas..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 px-6 py-4 rounded-full focus:outline-none focus:border-[#FF5742] bg-[#FFF8F0]"
            style={{ fontFamily: 'Inter, sans-serif' }} />
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {filteredPsychologists.map((psych) => (
                <div key={psych.id} className="flex-[0_0_calc(50%-1rem)] min-w-0">
                  <PsychologistCard psych={psych} onViewProfile={() => setSelectedPsychologist(psych)} />
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#FF5742] hover:text-white hover:border-[#FF5742] transition-colors shadow-lg" aria-label="Previous">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-[#FF5742] hover:text-white hover:border-[#FF5742] transition-colors shadow-lg" aria-label="Next">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        {filteredPsychologists.length === 0 && (
          <div className="text-center py-12 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>No se encontraron resultados.</div>
        )}
      </div>
      {selectedPsychologist && (<ProfileModal psych={selectedPsychologist} onClose={() => setSelectedPsychologist(null)} />)}
    </section>
  );
}
