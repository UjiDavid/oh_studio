import ActionCall from './components/ActionCall';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ShopButton from './components/ShopButton';

function App() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <ActionCall />
      <Footer />
      <ShopButton />
    </div>
  );
}

export default App;
