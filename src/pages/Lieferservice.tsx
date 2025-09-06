
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Truck, Shield, Clock, Calculator, CheckCircle, Star, Gauge, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Lieferservice = () => {
  const navigateToPriceCalculator = () => {
    window.location.href = '/#price-calculator';
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Dostawa Oleju Opałowego w Polsce | 4-7 Dni Roboczych | Blueline"
        description="Niezawodna dostawa oleju opałowego w całej Polsce w 4-7 dni roboczych. Pojazdy z certyfikatem TÜV, bezpłatna dostawa od 2.000L. Zamów teraz!"
        keywords="dostawa oleju opałowego Polska, pojazdy cysternowe, certyfikat TÜV, bezpłatna dostawa, transport oleju opałowego"
        canonicalUrl="https://bl-heizoel.de/uslugi-dostawy"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Truck className="w-4 h-4 mr-2 text-primary" />
              Premium Dostawa w Całej Polsce
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Dostawa w Całej <span className="gradient-text">Polsce</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Niezawodna dostawa w 4-7 dni roboczych w całej Polsce. 
              Profesjonalne pojazdy cysternowe, przeszkoleni kierowcy i najwyższe standardy bezpieczeństwa.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              <div className="group">
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Truck className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">4-7 dni roboczych</p>
                      <p className="text-sm text-gray-600">w całej Polsce</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">100% Sicher</p>
                      <p className="text-sm text-gray-600">Certyfikat TÜV</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">Bezpłatnie</p>
                      <p className="text-sm text-gray-600">ab 2.000L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Warum Blueline? */}
      <PageSection className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dlaczego Blueline?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ponad 100.000 zadowolonych klientów ufa naszej ekspertyzie i serwisowi Premium
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Zaufanie klientów</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Klienci w całej Polsce ufają naszej niezawodności i ekspertyzie Premium.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Gauge className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Najlepsze ceny</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Olej opałowy od 2,97 zł za litr - do 30% taniej niż lokalni dostawcy z jakością Premium.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">100.000+ klientów</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ponad 100.000 zadowolonych klientów już ufa naszemu serwisowi Premium.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Gwarancja bezpieczeństwa</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Wszystkie cysterny mają certyfikat TÜV i spełniają najnowsze standardy bezpieczeństwa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Tankfahrzeuge & Technik */}
      <PageSection background="gray" className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nowoczesne cysterny i technologia</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nasza najnowocześniejsza flota pojazdów gwarantuje bezpieczną i przyjazną dla środowiska dostawę
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Najnowocześniejsza flota</h3>
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Cysterny z certyfikatem TÜV</p>
                      <p className="text-gray-600">Regularna konserwacja i kontrole bezpieczeństwa gwarantują najwyższe standardy</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Śledzenie GPS w czasie rzeczywistym</p>
                      <p className="text-gray-600">Transparentne śledzenie Twojej dostawy w każdej chwili</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Ekologiczne silniki (Euro 6)</p>
                      <p className="text-gray-600">Standard Euro 6 dla minimalnych emisji i ochrony środowiska</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Przeszkoleni kierowcy (ADR)</p>
                      <p className="text-gray-600">Certyfikat ADR dla profesjonalnego transportu materiałów niebezpiecznych</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Opcje pojemności cystern</h4>
                  <p className="text-gray-600 mt-2">Odpowiedni pojazd dla każdych potrzeb</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Małe pojazdy</span>
                      <p className="text-sm text-gray-600">Do wąskich dojazdów</p>
                    </div>
                    <span className="text-xl font-bold text-primary">bis 3.000L</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div>
                      <span className="font-semibold text-gray-900">Pojazdy standardowe</span>
                      <p className="text-sm text-gray-600">Najczęściej używany rozmiar</p>
                    </div>
                    <span className="text-xl font-bold text-primary">bis 10.000L</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Duże pojazdy</span>
                      <p className="text-sm text-gray-600">Do dużych zbiorników</p>
                    </div>
                    <span className="text-xl font-bold text-primary">bis 25.000L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service & Sicherheit */}
      <PageSection className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serwis i bezpieczeństwo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Najwyższe standardy bezpieczeństwa, punktualności i profesjonalnego serwisu
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gwarancja bezpieczeństwa</h3>
                  <p className="text-gray-600 text-sm mb-4">Kompleksowa ochrona każdego transportu</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Pełne ubezpieczenie wszystkich transportów</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Kierowcy z certyfikatem ADR</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Infolinia awaryjna 24/7</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Certyfikat ochrony środowiska</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Punktualna dostawa</h3>
                  <p className="text-gray-600 text-sm mb-4">Niezawodnie i terminowo</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Powiadomienia SMS</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">2-godzinne okno czasowe</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Dostawa Pn-Sob 7-17</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Dostępny serwis ekspresowy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Profesjonalny serwis</h3>
                  <p className="text-gray-600 text-sm mb-4">Kompleksowa obsługa na miejscu</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Kontrola zbiornika w cenie</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Czyste napełnianie</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Cyfrowa faktura</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Obsługa klienta na miejscu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Optimized CTA */}
      <PageSection background="primary" className="py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Zamów teraz olej opałowy i <span className="gradient-text">oszczędzaj!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dostawa w całej Polsce w 4-7 dni roboczych. Bezpłatna dostawa od 2.000 litrów.
              Oblicz teraz online swoją indywidualną cenę.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button onClick={navigateToPriceCalculator} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calculator className="w-5 h-5 mr-3" />
                  do kalkulatora cen
                </Button>
              </div>
            </button>
            
            <Link to="/preise" className="group">
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-xl border-2 border-white/30 bg-white/10 text-gray-900 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300">
                Pokaż ceny
              </Button>
            </Link>
          </div>
          
          <div className="inline-flex items-center justify-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">Ponad 100.000 zadowolonych klientów w całej Polsce</span>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Lieferservice;
