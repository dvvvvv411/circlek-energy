
import { useState, useEffect } from 'react';
import PriceCalculator from './PriceCalculator';
import { Star, Truck } from 'lucide-react';

const HeroSection = () => {
  // Handle hash-based navigation to price calculator
  useEffect(() => {
    if (window.location.hash === '#price-calculator') {
      setTimeout(() => {
        const element = document.getElementById('price-calculator');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-32 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">100.000+ zufriedene Kunden</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
                  Deutschlands
                  <br />
                  <span className="gradient-text">führender</span>
                  <br />
                  <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-600">Online-Heizöl-Händler</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed">
                Premium Heizöl ab <span className="font-bold text-primary">70 Cent pro Liter</span>
                <br />
                <span className="text-xl text-gray-600">Kostenlose Lieferung ab 2.000L deutschlandweit</span>
              </h2>
            </div>

            {/* Feature Panel */}
            <div className="bg-white/70 backdrop-blur border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Ihre Vorteile auf einen Blick</h3>
              <div className="grid md:grid-cols-3 gap-6 md:divide-x divide-gray-200">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">€</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ab <span className="whitespace-nowrap">70 Cent</span></p>
                    <p className="text-sm text-gray-600">pro Liter</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2 md:px-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Kostenlos</p>
                    <p className="text-sm text-gray-600">ab <span className="whitespace-nowrap">2.000 L</span></p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2 md:px-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">24/7</p>
                    <p className="text-sm text-gray-600">Bestellung</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                Berechnen Sie jetzt Ihren individuellen Preis und profitieren Sie von 
                <span className="font-semibold text-primary"> bis zu 30% Ersparnis</span> gegenüber lokalen Anbietern.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Kunden in ganz Deutschland vertrauen auf unsere Qualität</span>
              </div>
            </div>
          </div>

          {/* Right Column - Price Calculator */}
          <div id="price-calculator" className="lg:pl-8">
            <PriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
