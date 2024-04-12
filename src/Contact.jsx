import ActionCalContact from './components/ActionCalContact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Contact = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <ActionCalContact />
      <Footer />
    </div>
  );
};

export default Contact;
