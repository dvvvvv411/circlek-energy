
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Widerrufsrecht = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Prawo Odstąpienia | Circle K Energy | Informacje prawne"
        description="Prawo odstąpienia Circle K Energy Trading SA SA Oddział w Polsce - Wszystkie informacje prawne dotyczące zwrotów i odstąpienia od umowy zgodnie z prawem polskim."
        keywords="prawo odstąpienia, Circle K Energy, zwroty, odstąpienie od umowy"
        canonicalUrl="https://bl-heizoel.de/prawo-odstapienia"
      />
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Prawo odstąpienia</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pouczenie o prawie odstąpienia</h2>
                
                <h3 className="text-lg font-semibold mb-2">Prawo odstąpienia</h3>
                <p>Masz prawo odstąpić od tej umowy w ciągu czternastu dni bez podawania przyczyn.</p>
                <p className="mt-2">Okres na odstąpienie wynosi czternaście dni od dnia, w którym Ty lub wskazana przez Ciebie osoba trzecia, która nie jest przewoźnikiem, weszła w posiadanie towaru.</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-6">Wykonywanie prawa odstąpienia</h3>
                <p>Aby skorzystać z prawa odstąpienia, musisz nas poinformować</p>
                <div className="ml-4 mt-2 space-y-1">
                  <p><strong>Circle K Energy Trading SA SA Oddział w Polsce</strong></p>
                  <p>Puławska 86</p>
                  <p>02-603 Warszawa</p>
                  <p>E-Mail: info@circlek-energy.pl</p>
                </div>
                <p className="mt-2">za pomocą jednoznacznego oświadczenia (np. listu wysłanego pocztą lub e-maila) o Twojej decyzji odstąpienia od tej umowy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skutki odstąpienia</h2>
                <p>Jeśli odstąpisz od tej umowy, zwrócimy Ci wszystkie płatności, które od Ciebie otrzymaliśmy, w tym koszty dostawy (z wyjątkiem dodatkowych kosztów wynikających z tego, że wybrałeś inny rodzaj dostawy niż oferowana przez nas najtańsza standardowa dostawa), niezwłocznie i najpóźniej w ciągu czternastu dni od dnia, w którym otrzymaliśmy zawiadomienie o Twoim odstąpieniu od tej umowy.</p>
                
                <p className="mt-4">Do tego zwrotu używamy tego samego sposobu płatności, którego użyłeś w pierwotnej transakcji, chyba że wyraźnie uzgodniono z Tobą coś innego; w żadnym przypadku nie będą Ci naliczane opłaty z tytułu tego zwrotu.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uwagi szczególne</h2>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Ważna uwaga dotycząca dostaw oleju opałowego</h3>
                  <p>Prawo odstąpienia wygasa w przypadku umów dostawy towarów, które nie są prefabrykowane i dla których produkcji decydujący jest indywidualny wybór lub określenie przez konsumenta lub które są wyraźnie dostosowane do osobistych potrzeb konsumenta.</p>
                  <p className="mt-2">W przypadku dostaw oleju opałowego prawo odstąpienia może być ograniczone w pewnych okolicznościach, szczególnie gdy dostawa już się odbyła i olej opałowy został wpompowany do Twojego zbiornika.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Wzór formularza odstąpienia</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold mb-4">Jeśli chcesz odstąpić od umowy, wypełnij ten formularz i odeślij go:</p>
                  <div className="space-y-2 text-sm">
                    <p>Do: Circle K Energy Trading SA SA Oddział w Polsce, Puławska 86, 02-603 Warszawa</p>
                    <p>E-Mail: info@circlek-energy.pl</p>
                    <br />
                    <p>Niniejszym odstępuję/odstępujemy (*) od umowy sprzedaży następujących towarów (*):</p>
                    <p>_________________________________</p>
                    <br />
                    <p>Zamówione dnia (*)/otrzymane dnia (*): _________________________________</p>
                    <p>Nazwisko konsumenta/konsumentów: _________________________________</p>
                    <p>Adres konsumenta/konsumentów: _________________________________</p>
                    <p>Podpis konsumenta/konsumentów (tylko w przypadku notyfikacji na papierze): _________________________________</p>
                    <p>Data: _________________________________</p>
                    <br />
                    <p className="text-xs">(*) Niepotrzebne skreślić.</p>
                  </div>
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

export default Widerrufsrecht;
