import ActionCalContact from './ActionCalContact';
import Footer from './Footer';
import Navbar from './Navbar';

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
