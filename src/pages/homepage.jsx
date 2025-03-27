import Welcome from '../components/Welcome';
import Experience from '../components/Experience';
import Destinations from '@/components/Destinations';
import Payment from '@/components/Payment';
import FlexiblePayments from '@/components/FlexiblePayments';
import Footer from '@/components/Footer';
import SocialCall from '@/components/SocialCall';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Welcome />
      <Experience />
      <Destinations />
      <Payment />
      <FlexiblePayments />
      <SocialCall />
      <Footer />
    </div>
  );
}

export default Home;
