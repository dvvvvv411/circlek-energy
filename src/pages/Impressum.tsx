import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <SEO
        title="Regulamin | Blueline | Informacje prawne"
        description="Regulamin Blueline (BL Trade GmbH) - Wszystkie informacje prawne, dane kontaktowe i wpis w rejestrze. Amtsgericht Charlottenburg (Berlin) HRB 251767 B."
        keywords="regulamin, Blueline, BL Trade GmbH, Berlin, HRB 251767 B, informacje prawne"
        canonicalUrl="https://bl-heizoel.de/impressum"
      />
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Regulamin</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dane zgodnie z § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Blueline (BL Trade GmbH)</strong></p>
                  <p>Düsseldorfer Str. 10</p>
                  <p>10719 Berlin</p>
                  <p>Niemcy</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p><strong>Telefon:</strong> 030 23258380</p>
                  <p><strong>E-Mail:</strong> info@bl-heizoel.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wpis w rejestrze</h2>
                <div className="space-y-2">
                  <p><strong>Wpis w rejestrze handlowym:</strong></p>
                  <p>Sąd rejestrowy: Amtsgericht Charlottenburg (Berlin)</p>
                  <p>Numer rejestru: HRB 251767 B</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Numer VAT</h2>
                <p>Numer identyfikacyjny VAT zgodnie z § 27 a ustawy o VAT:</p>
                <p><strong>DE311826397</strong></p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Odpowiedzialny za treść zgodnie z § 55 Abs. 2 RStV</h2>
                <div className="space-y-2">
                  <p>Blueline (BL Trade GmbH)</p>
                  <p>Düsseldorfer Str. 10</p>
                  <p>10719 Berlin</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wyłączenie odpowiedzialności</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Odpowiedzialność za treści</h3>
                  <p>Jako dostawca usług jesteśmy odpowiedzialni za własne treści na tych stronach zgodnie z prawem powszechnym według § 7 ust.1 TMG. Jednak zgodnie z §§ 8 do 10 TMG nie jesteśmy jako dostawca usług zobowiązani do monitorowania przekazywanych lub przechowywanych informacji osób trzecich ani do badania okoliczności wskazujących na działalność niezgodną z prawem.</p>
                  
                  <h3 className="text-lg font-semibold">Odpowiedzialność za linki</h3>
                  <p>Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treści nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treści linkowanych stron zawsze odpowiada odpowiedni dostawca lub operator stron.</p>
                  
                  <h3 className="text-lg font-semibold">Prawo autorskie</h3>
                  <p>Treści i dzieła utworzone przez operatorów stron podlegają niemieckiemu prawu autorskiemu. Powielanie, przetwarzanie, rozpowszechnianie i jakiekolwiek wykorzystanie poza granicami prawa autorskiego wymaga pisemnej zgody odpowiedniego autora lub twórcy.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
