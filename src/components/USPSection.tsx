
import { Coins, Truck, Shield, TrendingDown, MapPin, Award } from 'lucide-react';

const USPSection = () => {
  const usps = [
    {
      icon: Coins,
      title: "Od 2,97 zł za litr",
      description: "Wiodące na rynku ceny standardowego i premium oleju opałowego dzięki zoptymalizowanym zakupom i bezpośredniej współpracy z rafineriami.",
      highlight: "Do 30% taniej",
      accent: "from-emerald-500 to-green-600"
    },
    {
      icon: Truck,
      title: "Bezpłatna dostawa od 2000L",
      description: "Bezpłatna premium dostawa w całej Polsce przy większych zamówieniach. Niezawodnie i punktualnie w wybranym terminie.",
      highlight: "W całej Polsce",
      accent: "from-red-500 to-red-700"
    },
    {
      icon: Shield,
      title: "Niezawodny serwis",
      description: "Punktualne dostawy, sprawdzeni partnerzy i transparentne procesy – dla maksymalnego bezpieczeństwa.",
      highlight: "100.000+ klientów",
      accent: "from-purple-500 to-violet-600"
    }
  ];

  const stats = [
    { icon: TrendingDown, value: "100.000+", label: "Zadowolonych klientów", color: "text-emerald-600" },
    { icon: MapPin, value: "50M+", label: "Litrów dostarczone", color: "text-red-600" },
    { icon: Award, value: "24/7", label: "Zamówienia", color: "text-purple-600" },
    { icon: Shield, value: "99%", label: "Zadowolenie klientów", color: "text-orange-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Premium Serwis Oleju Opałowego
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Dlaczego <span className="gradient-text">Circle K Energy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jesteśmy Twoim cyfrowym ekspertem oleju opałowego dla całej Polski. Odkryj nasze przekonujące zalety i premium serwis.
          </p>
        </div>

        {/* Main USPs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${usp.accent} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${usp.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    {usp.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                    {usp.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {usp.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-primary/30 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Zaufanie przez liczby</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Te wskaźniki mówią same za siebie i pokazują nasze zaangażowanie w jakość i zadowolenie klientów.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
