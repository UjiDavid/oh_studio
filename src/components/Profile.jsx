import ActionCall from './ActionCall';
import Clients from './Clients';
import Experience from './Experience';
import Footer from './Footer';
import Navbar from './Navbar';
import ProfileHero from './ProfileHero';

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
