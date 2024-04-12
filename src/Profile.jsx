import ActionCall from './components/ActionCall';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProfileHero from './components/ProfileHero';

const Profile = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <ProfileHero />
      <Experience />
      <Clients />
      <ActionCall />
      <Footer />
    </div>
  );
};

export default Profile;
