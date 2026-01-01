import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import TrustedBySection from '../components/TrustedBySection'
import FeaturesSection from '../components/FeaturesSection'
import ProgressSection from '../components/ProgressSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      
      <main className="flex-1 flex flex-col items-center w-full">
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <ProgressSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
