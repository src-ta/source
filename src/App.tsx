import { Nav } from './components/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Chat } from './sections/Chat';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Chat />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
