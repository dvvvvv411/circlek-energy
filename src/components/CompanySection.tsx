
import { MapPin, Mail, Clock, Building2, Award, Shield, CheckCircle } from 'lucide-react';

const CompanySection = () => {
  const qualityFeatures = [
    {
      icon: Award,
      title: "DIN EN 10203",
      description: "Certyfikowana jakość",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Shield,
      title: "100% Bezpieczeństwo",
      description: "Sprawdzone dostawy",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: CheckCircle,
      title: "Premium Serwis",
      description: "Najwyższe standardy",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Building2,
      title: "W całej Polsce",
      description: "Dostawa w wybranym terminie",
      color: "from-orange-500 to-red-600"
    }
  ];

  const contactItems = [
    {
      icon: MapPin,
      title: "Nasza lokalizacja",
      content: (
        <>
          Düsseldorfer Str. 10<br />
          10719 Berlin<br />
          Niemcy
        </>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Mail,
      title: "Kontakt e-mail",
      content: (
        <a 
          href="mailto:info@bl-heizoel.de" 
          className="text-primary hover:text-primary/80 transition-colors font-medium hover:underline"
        >
          info@bl-heizoel.de
        </a>
      ),
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Godziny zamówień",
      content: (
        <>
          Online: 24/7 dostępne<br />
          Wsparcie: Pon-Pt 8:00-18:00
        </>
      ),
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.03),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
              O nas
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              O <span className="gradient-text">Blueline</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
              <p>
                Jesteśmy Twoim zaufanym partnerem w dostawach wysokiej jakości i taniego oleju opałowego w całej Polsce. 
                Jako innowacyjna firma z Berlina, specjalizujemy się w cyfrowych dostawach dla klientów prywatnych i biznesowych.
              </p>
              
              <p>
                Dzięki naszym zoptymalizowanym kanałom zakupów i bezpośredniej współpracy z wiodącymi rafineriami możemy zaoferować Ci 
                <span className="font-semibold text-primary"> premium olej opałowy od 70 groszy za litr</span> - 
                przy niezmiennie wysokiej jakości.
              </p>
              
              <p>
                Nasz przepis na sukces: transparentne ceny, niezawodny premium serwis i bezpłatna dostawa od 2000 litrów w całej Polsce. 
                <span className="font-semibold text-gray-900"> Ponad 100.000 zadowolonych klientów</span> potwierdza naszą jakość.
              </p>
            </div>

            {/* Quality Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {qualityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white border border-gray-200/50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact & Legal Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 mb-8 hover:shadow-xl transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Kontakt i lokalizacja
                </h3>
                <p className="text-gray-600">
                  Twój bezpośredni kontakt z nami
                </p>
              </div>

              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50/50 transition-colors duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <div className="text-gray-600 leading-relaxed">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legal Info Card */}
            <div className="bg-gradient-to-br from-gray-50/50 to-white/50 border border-gray-200/50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Informacje prawne</h4>
              <div className="space-y-3 text-center">
                <div className="p-4 bg-white/50 rounded-2xl">
                  <p className="font-semibold text-gray-900">Blueline (BL Trade GmbH)</p>
                </div>
                <div className="p-4 bg-white/50 rounded-2xl">
                  <p className="text-gray-700">Amtsgericht Charlottenburg (Berlin) HRB 251767 B</p>
                </div>
                <div className="p-4 bg-white/50 rounded-2xl">
                  <p className="text-gray-700">USt-ID: DE311826397</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
