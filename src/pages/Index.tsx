
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import USPSection from '@/components/USPSection';
import TrustSection from '@/components/TrustSection';
import CompanySection from '@/components/CompanySection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

import { companyStructuredData, localBusinessStructuredData } from '@/data/structuredData';

const Index = () => {
  const structuredData = [companyStructuredData, localBusinessStructuredData];

  return (
    <div className="min-h-screen">
        <SEO
        title="Circle K Energy | Premium Olej Opałowy od 2,97 zł/L | Bezpłatna Dostawa od 2000L"
        description="Premium olej opałowy od 2,97 zł za litr z bezpłatną dostawą od 2000L w całej Polsce. Oblicz cenę już teraz!"
        keywords="olej opałowy tani, zamówienie olej opałowy, dostawa oleju opałowego Polska, tanie ceny oleju, olej opałowy online"
        structuredData={structuredData}
        canonicalUrl="https://bl-heizoel.de/"
      />
      <Header />
      <HeroSection />
      <USPSection />
      <TrustSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
