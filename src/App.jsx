import { SocialSidebar } from './components/SocialMedia';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Creations from './components/Creations';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <SocialSidebar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Creations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
