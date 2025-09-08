
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Shield, Droplets, Thermometer } from 'lucide-react';

const HeizoelSorten = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Rodzaje Oleju Opałowego | Standard & Premium | Circle K Energy"
        description="Wysokiej jakości olej opałowy: Standardowy od 2,97 zł/L i Premium Plus od 3,10 zł/L. Niskosiarczysty, zgodny z normą DIN. Zamów teraz!"
        keywords="rodzaje oleju opałowego, standardowy olej opałowy, premium olej opałowy, niskosiarczysty olej, DIN 51603-1, Polska"
        canonicalUrl="https://bl-heizoel.de/rodzaje-oleju-opalowego"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Droplets className="w-4 h-4 mr-2 text-primary" />
              Premium Jakość Oleju Opałowego
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Wysokiej Jakości <span className="gradient-text">Olej Opałowy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Odkryj nasze premium rodzaje oleju opałowego dla optymalnej wydajności grzewczej. 
              Wszystkie rodzaje spełniają najwyższe standardy jakości i są szczególnie przyjazne dla środowiska.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Heizöl-Sorten Overview */}
      <PageSection className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze Jakości Oleju Opałowego</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dwa pierwszorzędne rodzaje oleju opałowego dla różnych potrzeb i budżetów
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Standard Heizöl EL */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-700/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Droplets className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Standardowy Olej Opałowy EL</h3>
                      <p className="text-sm text-gray-500 font-medium">Zgodny z DIN 51603-1</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">2,97 zł</div>
                    <div className="text-sm text-gray-500">za litr</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sprawdzona jakość dla niezawodnego ciepła w Twoim domu. Zgodny ze standardem DIN 51603-1.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Niskosiarczysty (maks. 1000 mg/kg)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Optymalna jakość spalania
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Odpowiedni dla wszystkich nowoczesnych pieców olejowych
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Heizöl Plus */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-700/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</div>
                </div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Premium Olej Opałowy Plus</h3>
                      <p className="text-sm text-primary font-medium">Z dodatkami</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">3,10 zł</div>
                    <div className="text-sm text-gray-500">za litr</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Najwyższa jakość z dodatkami dla lepszej wydajności i dłuższej żywotności Twojego systemu grzewczego.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Niskosiarczysty (maks. 50 mg/kg)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Z dodatkami przeciwstarzeniowymi
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Ulepszone właściwości płynięcia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Qualitätsmerkmale */}
      <PageSection background="gray" className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cechy jakości</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jakość naszego oleju opałowego przekonuje sprawdzonymi standardami i najwyższą czystością
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                    <Thermometer className="w-10 h-10 text-primary relative z-10" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Optymalna wartość opałowa</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Co najmniej 42,6 MJ/kg dla maksymalnej wydajności energetycznej i sprawności Twojego ogrzewania.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                    <Shield className="w-10 h-10 text-primary relative z-10" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Sprawdzona czystość</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Regularne kontrole jakości i badania laboratoryjne gwarantują najwyższą czystość.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                    <Droplets className="w-10 h-10 text-primary relative z-10" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Przyjazny dla środowiska</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jakość niskosiarkowa redukuje emisje i chroni środowisko.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Lagerung & Haltbarkeit */}
      <PageSection className="py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Przechowywanie i trwałość</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nasz olej opałowy jest trwały przez kilka lat przy prawidłowym przechowywaniu. 
              Dla optymalnej jakości zalecamy przestrzeganie następujących punktów:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Empfehlungen */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl transform rotate-1"></div>
              <div className="relative bg-white border border-green-200/50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Zalecenia</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Przechowywanie w ciemnym, chłodnym miejscu</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Regularna konserwacja zbiornika</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Ochrona przed wodą kondensacyjną</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Vermeiden */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl transform -rotate-1"></div>
              <div className="relative bg-white border border-amber-200/50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Unikaj</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Bezpośrednie promienie słoneczne</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Wahania temperatury</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Zanieczyszczenia</p>
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

export default HeizoelSorten;
