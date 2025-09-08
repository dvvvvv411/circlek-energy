
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import SEO from '@/components/SEO';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Preise = () => {
  const scrollToPriceCalculator = () => {
    // Navigate to home page and scroll to calculator
    window.location.href = '/#price-calculator';
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Ceny Oleju Opałowego & Warunki | Od 2,97 zł/L | Blueline"
        description="Transparentne ceny oleju opałowego bez ukrytych kosztów. Standardowy olej od 2,97 zł/L, Premium od 3,10 zł/L. Gwarancja ceny do dostawy!"
        keywords="ceny oleju opałowego, koszty oleju, gwarancja ceny, transparentne ceny, tani olej opałowy"
        canonicalUrl="https://bl-heizoel.de/ceny"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Calculator className="w-4 h-4 mr-2 text-primary" />
              Transparentna polityka cenowa
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transparentne <span className="gradient-text">Ceny i Warunki</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uczciwe i transparentne ceny bez ukrytych kosztów. 
              Skorzystaj z naszych rabatów ilościowych i korzyści dla klientów Premium.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Aktuelle Preise */}
      <PageSection className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aktualne Ceny Oleju Opałowego</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Skorzystaj z naszych konkurencyjnych cen i najwyższej jakości
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Standard Heizöl EL */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Standardowy Olej Opałowy EL</h3>
                    <div className="relative inline-block">
                      <div className="text-6xl font-bold text-primary mb-2">2,97 zł</div>
                      <div className="absolute -top-2 -right-8 text-sm text-gray-500 font-medium">z VAT</div>
                    </div>
                    <div className="text-gray-600 font-medium">za litr</div>
                  </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Jakość DIN 51603-1</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Niska zawartość siarki</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Dostępny natychmiast</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Do wszystkich kotłów olejowych</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Heizöl Plus */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-700/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-primary/30 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-red-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    PREMIUM
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Olej Opałowy Plus</h3>
                  <div className="relative inline-block">
                    <div className="text-6xl font-bold text-primary mb-2">3,10 zł</div>
                    <div className="absolute -top-2 -right-8 text-sm text-gray-500 font-medium">z VAT</div>
                  </div>
                  <div className="text-gray-600 font-medium">za litr</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Jakość Premium z dodatkami</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Ultra-niska zawartość siarki</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Wydłużona trwałość</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Zoptymalizowane spalanie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center space-y-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-700 font-medium">
                Potrzebujesz indywidualnej oferty?
              </p>
              <Button 
                onClick={scrollToPriceCalculator}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calculator className="w-5 h-5 mr-3" />
                do kalkulatora cen
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Preisgarantie */}
      <PageSection background="primary" className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasza Gwarancja Ceny</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Twoje bezpieczeństwo to nasza obietnica - transparentne koszty bez niespodzianek
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 rounded-3xl backdrop-blur-sm transform rotate-1"></div>
            <div className="relative bg-white/90 border border-white/40 rounded-3xl p-12 shadow-xl backdrop-blur-sm">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-4xl">🛡️</div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Po złożeniu zamówienia gwarantujemy uzgodnioną cenę aż do dostawy - 
                  nawet przy rosnących cenach rynkowych. Zyskujesz pewność planowania i 
                  transparentne koszty bez nieoczekiwanych niespodzianek.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl transform rotate-1"></div>
                  <div className="relative bg-white border border-green-200/50 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Gwarantowane</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Stała cena przy zamówieniu</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Brak dodatkowych kosztów</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Transparentne ceny</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl transform -rotate-1"></div>
                  <div className="relative bg-white border border-red-200/50 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">📞</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Serwis</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Bezpłatne doradztwo</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Indywidualne oferty</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Osobista opieka</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Preise;
