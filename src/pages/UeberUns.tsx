
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Users, Award, Wrench, Heart } from 'lucide-react';

const UeberUns = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="O nas & Usługi | Circle K Energy | Premium Dostawca Oleju Opałowego"
        description="Circle K Energy – Twój zaufany partner w dostawie oleju opałowego. Innowacyjna firma z Warszawy z ponad 100.000 zadowolonymi klientami w całej Polsce."
        keywords="Circle K Energy, Warszawa, firma oleju opałowego, premium olej opałowy, olej opałowy Polska"
        canonicalUrl="https://bl-heizoel.de/o-nas"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Twój Partner w Premium Oleju Opałowym
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              O nas & <span className="gradient-text">Nasze Usługi</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Twój zaufany partner w dostawie oleju opałowego w Warszawie i całej Polsce. 
              Cyfrowy pionier z tradycją i najnowocześniejszą technologią.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Unternehmen */}
      <PageSection className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Circle K Energy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Twoje zaufane źródło premium oleju opałowego z Warszawy
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Nasza historia</h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Założona w 2023 roku w Warszawie, etablowaliśmy się jako niezawodny dostawca oleju opałowego 
                    w regionie. To, co zaczęło się jako lokalna firma, jest dziś przedsiębiorstwem Premium 
                    działającym w całej Polsce z najnowocześniejszymi cysternami 
                    i w pełni zdigitalizowanymi procesami zamówień i dostaw.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Nasz przepis na sukces: Osobista opieka połączona z innowacyjną technologią, 
                    transparentne ceny i absolutna niezawodność. Ponad 100.000 zadowolonych klientów 
                    już ufa naszemu serwisowi Premium.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-700/10 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Dane firmy</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Założona:</span>
                    <span className="font-bold text-primary text-lg">2023</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <span className="text-gray-600 font-medium">Siedziba:</span>
                    <span className="font-bold text-gray-900">Warszawa</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Obsługiwany obszar:</span>
                    <span className="font-bold text-gray-900">w całej Polsce</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <span className="text-gray-600 font-medium">Klienci:</span>
                    <span className="font-bold text-primary text-lg">100.000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Zamówienia:</span>
                    <span className="font-bold text-primary text-lg">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service-Versprechen */}
      <PageSection background="gray" className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasza obietnica serwisowa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cztery filary naszego sukcesu - na tym możesz polegać
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Osobisty</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Indywidualne doradztwo i osobisti opiekunowie na wszystkie Twoje pytania.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Jakość</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Najwyższa jakość oleju opałowego zgodna z normą DIN z regularnymi badaniami laboratoryjnymi.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Wrench className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Niezawodny</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Punktualna dostawa w uzgodnionym terminie - na tym możesz polegać.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Uczciwy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transparentne ceny bez ukrytych kosztów i uczciwe warunki dla wszystkich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Zusatzservices */}
      <PageSection className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze usługi dodatkowe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kompleksowy serwis dla wszystkich Twoich potrzeb związanych z olejem opałowym i instalacjami
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border border-blue-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mr-6">
                    <Wrench className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Serwis techniczny</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Czyszczenie i konserwacja zbiorników przez wykwalifikowane firmy</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Serwis i konserwacja ogrzewania w ramach współpracy</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Przegląd zbiorników i kontrola szczelności</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Doradztwo dotyczące optymalnej wielkości zbiornika</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border border-green-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mr-6">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Obsługa klienta</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Infolinia 24/7 dla klientów biznesowych</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Powiadomienia SMS/e-mail przed dostawą</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Internetowy panel klienta z historią dostaw</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Elastyczne warunki płatności</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Kontakt & Standort */}
      <PageSection background="primary" className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="kontakt" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakt & Lokalizacja</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Twoi opiekunowie w Warszawie - jesteśmy dla Ciebie
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl backdrop-blur-sm transform rotate-1"></div>
              <div className="relative bg-white/90 border border-white/40 rounded-3xl p-10 shadow-xl backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl">🏢</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Adres firmy</h3>
                </div>
                
                <div className="space-y-6 text-center">
                  <div className="p-4 bg-white/60 rounded-xl border border-white/40">
                    <p className="font-bold text-lg text-gray-900 mb-2">Circle K Energy Trading SA SA Oddział w Polsce</p>
                    <p className="text-gray-700">
                      Puławska 86<br/>
                      02-603 Warszawa
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700">
                      <strong className="text-primary">E-Mail:</strong> info@circlek-energy.pl
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl backdrop-blur-sm transform -rotate-1"></div>
              <div className="relative bg-white/90 border border-white/40 rounded-3xl p-10 shadow-xl backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl">⚖️</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Informacje prawne</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">Sąd:</strong> National Court Register</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">KRS:</strong> KRS0001011992</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">NIP:</strong> PLKRS.000101199</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">Dyrektor Zarządzający:</strong> Philippe André Muheim</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">Gründung:</strong> 2023</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50/80 rounded-xl border border-gray-200/50">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Wszelkie informacje bez gwarancji. Ceny zawierają VAT 
                      i mogą się różnić w zależności od sytuacji rynkowej.
                    </p>
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

export default UeberUns;
