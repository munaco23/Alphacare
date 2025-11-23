import WebHeroSection from '../components/WebHeroSection';
import WebFeaturesSection from '../components/WebFeaturesSection';
import WebServicesSection from '../components/WebServicesSection';
import WebPricingSection from '../components/WebPricingSection';
import WebFAQSection from '../components/WebFAQSection';
import WebContactSection from '../components/WebContactSection';
import StickyScrollSection from '../components/StickyScrollSection';
const HospitalPage = () => {
  return (
    <>
      <WebHeroSection />
      <WebFeaturesSection />
      <StickyScrollSection />
      <WebServicesSection />
      <WebPricingSection />
      <WebFAQSection />
      <WebContactSection />
    </>
  );
};

export default HospitalPage;
