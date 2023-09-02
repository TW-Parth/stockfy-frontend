import Header from '../../component/global/Header';
import Banner from './Banner';
import Benefits from './Benefits ';
import Contact from './Contact';
import Footer from './Footer';
import SubscriptionBlock from './SubscriptionBlock';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <SubscriptionBlock />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
