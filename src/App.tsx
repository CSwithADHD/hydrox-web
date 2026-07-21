import { Navbar } from './components/layout/Navbar';
import { AccordionFeatures } from './components/sections/AccordionFeatures';
import { Classes } from './components/sections/Classes';
import { CtaFooter } from './components/sections/CtaFooter';
import { FitnessClass } from './components/sections/FitnessClass';
import { Hero } from './components/sections/Hero';
import { TrainerBanner } from './components/sections/TrainerBanner';

function App() {
  return (
    <div className="noise-overlay min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <FitnessClass />
        <TrainerBanner />
        <AccordionFeatures />
        <Classes />
        <CtaFooter />
      </main>
    </div>
  );
}

export default App;
