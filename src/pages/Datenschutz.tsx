
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Zbieranie danych na tej stronie internetowej</h2>
                <h3 className="text-lg font-semibold mb-2">Pliki cookies</h3>
                <p>Nasze strony internetowe używają częściowo tzw. plików cookies. Pliki cookies nie wyrządzają szkód na Twoim komputerze i nie zawierają wirusów. Pliki cookies służą do tego, aby nasze usługi były bardziej przyjazne dla użytkownika, efektywne i bezpieczne.</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-4">Pliki dziennika serwera</h3>
                <p>Dostawca stron automatycznie zbiera i przechowuje informacje w tzw. plikach dziennika serwera, które Twoja przeglądarka automatycznie do nas przekazuje. Są to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Typ przeglądarki i wersja przeglądarki</li>
                  <li>Używany system operacyjny</li>
                  <li>URL odnośnika</li>
                  <li>Nazwa hosta komputera uzyskującego dostęp</li>
                  <li>Czas żądania serwera</li>
                  <li>Adres IP</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Formularz kontaktowy i kontakt e-mail</h2>
                <p>Jeśli przesyłasz nam zapytania za pomocą formularza kontaktowego lub e-maila, Twoje dane z formularza zapytania, w tym podane przez Ciebie dane kontaktowe, są przechowywane przez nas w celu przetworzenia zapytania i w przypadku pytań uzupełniających.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Twoje prawa</h2>
                <p>Masz prawo w każdej chwili otrzymać bezpłatne informacje o pochodzeniu, odbiorcy i celu przechowywanych danych osobowych. Masz również prawo do żądania poprawy, zablokowania lub usunięcia tych danych.</p>
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
