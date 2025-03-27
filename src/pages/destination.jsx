import Footer from "@/components/Footer";
import HeroSection from "@/components/page-destination/hero/HeroSection";
import Navbar from "@/components/tools/NavBar";
import styles from "../styles/destinationPage.module.css";
import RouteHigh from "@/components/page-destination/routeHighlights/RouteHigh";
import Step1 from "@/components/page-destination/step1/Step1";
import Step2 from "@/components/page-destination/step2/step2";
import Step3 from "@/components/page-destination/step3/step3";

function DestinationPage() {
  return (
    <div className={styles.destinationPage}>
        <div className={styles.container}>
          <Navbar color={"#000000"} />
          <div className={styles.heroAndCard}>
            <HeroSection />
          </div>
          <RouteHigh />
          <Step1 />
          <Step2 />
          <Step3 />
        </div>
      <Footer />
    </div>
  );
}

export default DestinationPage;
