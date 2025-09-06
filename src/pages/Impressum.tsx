import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <SEO
        title="Impressum | Blueline | Rechtliche Angaben"
        description="Impressum der Blueline (BL Trade GmbH) - Alle rechtlichen Angaben, Kontaktdaten und Registereintrag. Amtsgericht Charlottenburg (Berlin) HRB 251767 B."
        keywords="Impressum, Blueline, BL Trade GmbH, Berlin, HRB 251767 B, rechtliche Angaben"
        canonicalUrl="https://bl-heizoel.de/impressum"
      />
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2">
                  <p><strong>Blueline (BL Trade GmbH)</strong></p>
                  <p>Düsseldorfer Str. 10</p>
                  <p>10719 Berlin</p>
                  <p>Deutschland</p>
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registereintrag</h2>
                <div className="space-y-2">
                  <p><strong>Eintragung im Handelsregister:</strong></p>
                  <p>Registergericht: Amtsgericht Charlottenburg (Berlin)</p>
                  <p>Registernummer: HRB 251767 B</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p><strong>DE311826397</strong></p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="space-y-2">
                  <p>Blueline (BL Trade GmbH)</p>
                  <p>Düsseldorfer Str. 10</p>
                  <p>10719 Berlin</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Haftung für Inhalte</h3>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  
                  <h3 className="text-lg font-semibold">Haftung für Links</h3>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  
                  <h3 className="text-lg font-semibold">Urheberrecht</h3>
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
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
