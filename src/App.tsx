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
        <section className="py-24 bg-bg-deep">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              <Hero />
              <Chat />
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
