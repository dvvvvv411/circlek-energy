
import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Ogólne Warunki Sprzedaży</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Zakres obowiązywania</h2>
                <p>Niniejsze Ogólne Warunki Sprzedaży obowiązują we wszystkich relacjach biznesowych pomiędzy Circle K Energy Trading SA SA Oddział w Polsce (zwaną dalej "Sprzedawcą") a jej klientami (zwanymi dalej "Kupującymi"). Odmienne warunki Kupującego nie są uznawane, chyba że Sprzedawca wyraźnie zgodzi się na ich obowiązywanie na piśmie.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Zawarcie umowy</h2>
                <p>Prezentacja produktów na stronie internetowej nie stanowi wiążącej oferty Sprzedawcy. Kupujący składa wiążącą ofertę zakupu zamówionych towarów poprzez wysłanie zamówienia. Sprzedawca może przyjąć tę ofertę w ciągu 5 dni.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Ceny i warunki płatności</h2>
                <div className="space-y-4">
                  <p>Podane ceny są cenami końcowymi i zawierają ustawowy podatek VAT. Dodatkowe koszty dostawy i wysyłki są wykazywane oddzielnie.</p>
                  <p>Płatność można dokonać poprzez:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Przedpłata przez przelew</li>
                    <li>Faktura (tylko dla klientów biznesowych po sprawdzeniu zdolności kredytowej)</li>
                    <li>Płatność gotówką przy dostawie</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Dostawa i terminy dostaw</h2>
                <div className="space-y-4">
                  <p>Dostawa odbywa się w całej Polsce. Od ilości zamówienia 2 000 litrów dostawa jest bezpłatna.</p>
                  <p>Czas dostawy wynosi zazwyczaj 4-7 dni roboczych po otrzymaniu płatności. W przypadku przedpłaty dostawa następuje po otrzymaniu płatności.</p>
                  <p>Sprzedawca ma prawo do częściowych dostaw, o ile jest to rozsądne dla Kupującego.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Zastrzeżenie własności</h2>
                <p>Dostarczone towary pozostają własnością Sprzedawcy do momentu pełnej zapłaty wszystkich należności z umowy dostawy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Gwarancja</h2>
                <p>Obowiązują ustawowe przepisy gwarancyjne. Roszczenia gwarancyjne przedawniają się u konsumentów w ciągu 2 lat, u przedsiębiorców w ciągu roku od dostarczenia towaru.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Odpowiedzialność</h2>
                <p>Odpowiedzialność Sprzedawcy za szkody jest wyłączona, o ile poniżej nie określono inaczej. Dotyczy to również odpowiedzialności przedstawicieli ustawowych i pomocników wykonawczych Sprzedawcy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Postanowienia końcowe</h2>
                <p>Obowiązuje prawo Polski z wyłączeniem Konwencji Narodów Zjednoczonych o umowach międzynarodowej sprzedaży towarów. Miejscem właściwości sądowej dla wszystkich sporów jest Warszawa, jeżeli Kupujący jest przedsiębiorcą.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AGB;
