import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Newsletter } from "./components/Newsletter";
import { Directorio } from "./components/Directorio";
import { Comparte } from "./components/Comparte";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />
      <main>
        <Hero />
        <Newsletter />
        <Directorio />
        <Comparte />
      </main>
      <Footer />
    </div>
  );
}
