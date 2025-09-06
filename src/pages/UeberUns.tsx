
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
        title="Über uns & Service | Blueline | Premium Heizöl-Händler"
        description="Blueline – Ihr vertrauensvoller Partner für Heizöl. Innovatives Unternehmen aus Berlin mit über 100.000 zufriedenen Kunden deutschlandweit."
        keywords="Blueline, Berlin, Heizöl Unternehmen, Premium Heizöl, Heizöl Berlin"
        canonicalUrl="https://bl-heizoel.de/ueber-uns"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Users className="w-4 h-4 mr-2 text-primary" />
              Ihr Partner für Premium-Heizöl
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Über uns & <span className="gradient-text">Unser Service</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ihr vertrauensvoller Partner für Heizöl in Berlin und ganz Deutschland. 
              Digitaler Vorreiter mit Tradition und modernster Technik.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Unternehmen */}
      <PageSection className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blueline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ihre vertrauensvolle Adresse für Premium-Heizöl aus Berlin
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Unsere Geschichte</h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Gegründet 2023 in Berlin, haben wir uns als zuverlässiger Heizöllieferant 
                    in der Region etabliert. Was als lokales Unternehmen begann, ist heute 
                    ein deutschlandweit agierendes Premium-Unternehmen mit modernsten Tankfahrzeugen 
                    und volldigitalisierten Bestell- und Lieferprozessen.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Unser Erfolgsrezept: Persönliche Betreuung kombiniert mit innovativer Technik, 
                    transparente Preise und absolute Zuverlässigkeit. Über 100.000 zufriedene Kunden 
                    vertrauen bereits auf unseren Premium-Service.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Unternehmensdaten</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Gegründet:</span>
                    <span className="font-bold text-primary text-lg">2023</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <span className="text-gray-600 font-medium">Standort:</span>
                    <span className="font-bold text-gray-900">Berlin</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Liefergebiet:</span>
                    <span className="font-bold text-gray-900">Deutschlandweit</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <span className="text-gray-600 font-medium">Kunden:</span>
                    <span className="font-bold text-primary text-lg">100.000+</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-600 font-medium">Bestellung:</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unser Service-Versprechen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vier Säulen unseres Erfolgs - darauf können Sie sich verlassen
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Persönlich</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Individuelle Beratung und persönliche Ansprechpartner für alle Ihre Fragen.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Qualität</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Höchste Heizöl-Qualität nach DIN-Norm mit regelmäßigen Laborprüfungen.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Zuverlässig</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pünktliche Lieferung zum vereinbarten Termin - darauf können Sie sich verlassen.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fair</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transparente Preise ohne versteckte Kosten und faire Konditionen für alle.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Zusatzservices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rundum-Service für alle Ihre Heizöl- und Anlagenbedürfnisse
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
                  <h3 className="text-2xl font-bold text-gray-900">Technischer Service</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Tankreinigung und -wartung durch Fachbetriebe</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Heizungsservice und -wartung in Kooperation</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Tankprüfung und Dichtheitsprüfung</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Beratung zur optimalen Tankgröße</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">Kundenservice</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">24/7 Notfall-Hotline für Geschäftskunden</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">SMS/E-Mail Benachrichtigung vor Lieferung</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Online-Kundenbereich mit Lieferhistorie</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Flexible Zahlungskonditionen</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakt & Standort</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ihre Ansprechpartner in Berlin - wir sind für Sie da
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
                  <h3 className="text-2xl font-bold text-gray-900">Firmenadresse</h3>
                </div>
                
                <div className="space-y-6 text-center">
                  <div className="p-4 bg-white/60 rounded-xl border border-white/40">
                    <p className="font-bold text-lg text-gray-900 mb-2">Blueline (BL Trade GmbH)</p>
                    <p className="text-gray-700">
                      Düsseldorfer Str. 10<br/>
                      10719 Berlin
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700">
                      <strong className="text-primary">E-Mail:</strong> info@bl-heizoel.de<br/>
                      <strong className="text-primary">Telefon:</strong> 030 23258380
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
                  <h3 className="text-2xl font-bold text-gray-900">Rechtliche Angaben</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">Amtsgericht:</strong> Charlottenburg (Berlin) HRB 251767 B</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">USt-ID:</strong> DE311826397</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">Geschäftsführer:</strong> Dzhamil Bulgakov</p>
                  </div>
                  <div className="p-3 bg-white/60 rounded-xl border border-white/40">
                    <p className="text-gray-700"><strong className="text-primary">Gründung:</strong> 2023</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50/80 rounded-xl border border-gray-200/50">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Alle Angaben ohne Gewähr. Preise verstehen sich inkl. MwSt. 
                      und können je nach Marktlage variieren.
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
