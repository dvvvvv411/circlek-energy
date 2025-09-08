
import { Star, Quote, Award, Clock, Truck, Shield } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Maria Kowalska",
      location: "Warszawa",
      rating: 5,
      text: "Fantastyczna obsługa! Olej opałowy został dostarczony punktualnie, a cena była niezbitą. Zdecydowanie zamówimy ponownie.",
      date: "2 tygodnie temu",
      initial: "MK"
    },
    {
      name: "Tomasz Nowak",
      location: "Kraków",
      rating: 5,
      text: "Bardzo profesjonalna obsługa i konkurencyjne ceny. Zamówienie było proste, a dostawa bezpłatna od 2000L.",
      date: "miesiąc temu",
      initial: "TN"
    },
    {
      name: "Anna Wiśniewska",
      location: "Gdańsk",
      rating: 5,
      text: "Od 3 lat nasz dostawca oleju opałowego. Zawsze niezawodny, punktualny i w uczciwych cenach. Absolutnie polecam!",
      date: "3 tygodnie temu",
      initial: "AW"
    }
  ];

  const trustIndicators = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Ocena klientów",
      sublabel: "Google & Trustpilot",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      value: "99%",
      label: "Rekomendacji",
      sublabel: "od naszych klientów",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Clock,
      value: "4-7",
      label: "Dni robocze",
      sublabel: "w całej Polsce",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Bezpieczeństwo",
      sublabel: "sprawdzona jakość",
      color: "from-purple-400 to-violet-500"
    }
  ];

  const securityBadges = [
    { name: "SSL", description: "Szyfrowana transmisja" },
    { name: "TÜV", description: "Sprawdzone bezpieczeństwo" },
    { name: "DIN EN", description: "Standard jakości" },
    { name: "ISO 9001", description: "Zarządzanie jakością" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent)]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-red-700/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Zadowolenie klientów
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Co mówią nasi <span className="gradient-text">klienci</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ponad 100.000 zadowolonych klientów już ufa naszemu premium serwisowi. 
            Przeczytaj sam, co mówią o Circle K Energy.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div 
                key={index}
                className="group bg-white border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${indicator.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{indicator.value}</div>
                <div className="text-gray-700 font-medium mb-1">{indicator.label}</div>
                <div className="text-sm text-gray-500">{indicator.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200/50 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-700 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              {/* Quote Background */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-red-700/20 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-red-700/20 rounded-full flex items-center justify-center font-semibold text-primary">
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Certifications */}
        <div className="bg-gradient-to-r from-gray-50/50 to-white/50 rounded-3xl border border-gray-200/50 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Bezpieczeństwo i Certyfikaty Jakości
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Zaufaj naszemu sprawdzonemu bezpieczeństwu i najwyższym standardom jakości
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityBadges.map((badge, index) => (
              <div 
                key={index}
                className="group p-4 rounded-2xl border border-gray-200/50 bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {badge.name}
                </div>
                <div className="text-sm text-gray-600">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
