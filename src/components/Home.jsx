import styles from "../style";
import { Navbar, Hero } from "../components";
import {
  Career,
  Business,
  CardDeal,
  CTA,
  Footer,
  Stats,
  Testimonials,
} from "./index";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <ScrollToTop />
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Career />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
