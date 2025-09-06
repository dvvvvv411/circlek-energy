
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Polityka prywatności</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Ochrona danych w skrócie</h2>
                <h3 className="text-lg font-semibold mb-2">Informacje ogólne</h3>
                <p>Poniższe wskazówki dają prosty przegląd tego, co dzieje się z Twoimi danymi osobowymi podczas odwiedzania tej strony internetowej. Dane osobowe to wszystkie dane, za pomocą których można Cię osobiście zidentyfikować.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informacje ogólne i obowiązkowe</h2>
                <h3 className="text-lg font-semibold mb-2">Ochrona danych</h3>
                <p>Operatorzy tych stron bardzo poważnie traktują ochronę Twoich danych osobowych. Traktujemy Twoje dane osobowe poufnie i zgodnie z ustawowymi przepisami ochrony danych oraz niniejszą polityką prywatności.</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-4">Podmiot odpowiedzialny</h3>
                <div className="space-y-2">
                  <p>Podmiotem odpowiedzialnym za przetwarzanie danych na tej stronie internetowej jest:</p>
                  <p><strong>BL Trade GmbH</strong></p>
                  <p>Düsseldorfer Str. 10</p>
                  <p>10719 Berlin</p>
                  <p>E-Mail: info@bl-heizoel.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-semibold mb-2">Cookies</h3>
                <p>Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-4">Server-Log-Dateien</h3>
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Kontaktformular und E-Mail-Kontakt</h2>
                <p>Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Ihre Rechte</h2>
                <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
