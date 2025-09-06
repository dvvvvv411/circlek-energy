
import { MapPin, Mail, Clock, Building2, Award, Shield, CheckCircle } from 'lucide-react';

const CompanySection = () => {
  const qualityFeatures = [
    {
      icon: Award,
      title: "DIN EN 10203",
      description: "Zertifizierte Qualität",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Shield,
      title: "100% Sicherheit",
      description: "Geprüfte Lieferungen",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: CheckCircle,
      title: "Premium Service",
      description: "Höchste Standards",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Building2,
      title: "Deutschlandweit",
      description: "Lieferung zum Wunschtermin",
      color: "from-orange-500 to-red-600"
    }
  ];

  const contactItems = [
    {
      icon: MapPin,
      title: "Unser Standort",
      content: (
        <>
          Düsseldorfer Str. 10<br />
          10719 Berlin<br />
          Deutschland
        </>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Mail,
      title: "E-Mail Kontakt",
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
      title: "Bestellzeiten",
      content: (
        <>
          Online: 24/7 verfügbar<br />
          Support: Mo-Fr 8:00-18:00
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
              Über uns
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Über <span className="gradient-text">Blueline</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
              <p>
                Wir sind Ihr vertrauensvoller Partner für hochwertige und günstige Heizöl-Lieferungen in ganz Deutschland. 
                Als innovatives Unternehmen aus Berlin haben wir uns auf die digitale Belieferung von Privat- und Geschäftskunden spezialisiert.
              </p>
              
              <p>
                Durch unsere optimierten Beschaffungswege und die direkte Zusammenarbeit mit führenden Raffinerien können wir Ihnen 
                <span className="font-semibold text-primary"> Premium Heizöl ab 70 Cent pro Liter</span> anbieten - 
                und das bei kompromisslos hoher Qualität.
              </p>
              
              <p>
                Unser Erfolgsrezept: Transparente Preise, zuverlässiger Premium-Service und die kostenlose Lieferung ab 2.000 Litern deutschlandweit. 
                <span className="font-semibold text-gray-900"> Über 100.000 zufriedene Kunden</span> bestätigen unsere Qualität.
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
                  Kontakt & Standort
                </h3>
                <p className="text-gray-600">
                  Ihr direkter Draht zu uns
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
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Rechtliche Angaben</h4>
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
