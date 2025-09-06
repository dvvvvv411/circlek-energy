
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { MapPin, Droplets, Truck } from 'lucide-react';
import { useCheckout } from '@/hooks/useCheckout';
import { OrderData } from '@/services/orderService';
import { formatPLN, formatPricePerLiter } from '@/lib/currency';

const PriceCalculator = () => {
  const [fuelType, setFuelType] = useState('standard');
  const [liters, setLiters] = useState<number>(3000);
  const [postalCode, setPostalCode] = useState('');
  
  const { processOrder, isProcessing } = useCheckout();

  // Pricing in PLN (Polish Złoty) - converted from EUR
  const prices = {
    standard: 2.97, // zł/L (converted from 0.70 EUR)
    premium: 3.10   // zł/L (converted from 0.73 EUR)
  };

  const quickSelectAmounts = [1500, 3000, 5000];

  // Calculate delivery fee - 190.93 zł for orders under 2000L, free above
  const calculateDeliveryFee = (literAmount: number) => {
    return literAmount >= 2000 ? 0 : 190.93; // 190.93 zł (converted from 45 EUR)
  };

  const calculateTotal = () => {
    const basePrice = liters * prices[fuelType as keyof typeof prices];
    const deliveryFee = calculateDeliveryFee(liters);
    return basePrice + deliveryFee;
  };

  const handleQuickSelect = (amount: number) => {
    setLiters(amount);
  };

  const handleOrder = async () => {
    // Validate inputs - Polish postal code format: NN-NNN
    const polishPostalCodeRegex = /^\d{2}-\d{3}$/;
    if (!postalCode || !polishPostalCodeRegex.test(postalCode)) {
      return;
    }
    
    if (liters < 1500) {
      return;
    }

    const orderData: OrderData = {
      shop_id: "2235b3dc-adb8-4380-9df2-c4bf14ec3ac3",
      product: fuelType === "standard" ? "standard_heizoel" : "premium_heizoel",
      liters: liters,
      price_per_liter: prices[fuelType as keyof typeof prices],
      total_amount: calculateTotal(),
      delivery_fee: calculateDeliveryFee(liters),
      postal_code: postalCode
    };

    await processOrder(orderData);
  };

  const deliveryFee = calculateDeliveryFee(liters);
  const basePrice = liters * prices[fuelType as keyof typeof prices];
  const totalPrice = calculateTotal();

  return (
    <div id="price-calculator" className="glassmorphism-card p-8 animate-scale-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Natychmiastowy Kalkulator Cen
        </h3>
        <p className="text-gray-600">
          Twoja indywidualna cena w kilka sekund
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column - Input Fields */}
        <div className="flex flex-col h-full space-y-6">
          {/* Postal Code Input - First */}
          <div className="space-y-2">
            <Label htmlFor="postal-code" className="text-base font-semibold text-gray-900">
              Twój Kod Pocztowy
            </Label>
            <div className="relative">
              <Input
                id="postal-code"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="np. 00-001"
                className="text-lg pl-12"
                maxLength={6}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Quantity Input - Second */}
          <div className="space-y-3">
            <Label htmlFor="liters" className="text-base font-semibold text-gray-900">
              Ilość w Litrach
            </Label>
            <div className="relative">
              <Input
                id="liters"
                type="number"
                min="1500"
                step="500"
                value={liters}
                onChange={(e) => setLiters(Number(e.target.value) || 0)}
                placeholder="np. 3000"
                className="text-lg pl-12"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Droplets className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            {/* Quick Select Buttons */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Popularne ilości:</p>
              <div className="flex flex-wrap gap-2">
                {quickSelectAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleQuickSelect(amount)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 whitespace-nowrap ${
                      liters === amount
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {amount.toLocaleString()} L
                  </button>
                ))}
              </div>
            </div>
            
            <p className="text-sm text-gray-500">Minimalna ilość zamówienia: 1500 litrów</p>
          </div>

          {/* Fuel Type Selection - Third */}
          <div className="space-y-3">
            <Label className="text-base font-semibold text-gray-900">
              Wybierz Typ Oleju Opałowego
            </Label>
            <RadioGroup value={fuelType} onValueChange={setFuelType} className="space-y-3">
              <div className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-colors">
                <RadioGroupItem value="standard" id="standard" />
                <div className="flex-1">
                  <Label htmlFor="standard" className="cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Standardowy Olej Opałowy</span>
                      <span className="text-primary font-bold whitespace-nowrap">{formatPricePerLiter(prices.standard)}</span>
                    </div>
                    <p className="text-sm text-gray-500">Sprawdzona jakość w najlepszej cenie</p>
                  </Label>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-primary/30 transition-colors">
                <RadioGroupItem value="premium" id="premium" />
                <div className="flex-1">
                  <Label htmlFor="premium" className="cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Premium Olej Opałowy</span>
                      <span className="text-primary font-bold whitespace-nowrap">{formatPricePerLiter(prices.premium)}</span>
                    </div>
                    <p className="text-sm text-gray-500">Najwyższa jakość z dodatkami</p>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Right Column - Price Breakdown */}
        <div className="flex flex-col h-full space-y-6">
          {/* Price Breakdown */}
          <div className="flex-1 flex flex-col bg-background border rounded-xl p-6 space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Przegląd Cen</h4>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cena podstawowa <span className="whitespace-nowrap">({liters} L)</span></span>
              <span className="font-semibold whitespace-nowrap">{formatPLN(basePrice)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Dostawa</span>
              </div>
              <span className={`font-semibold whitespace-nowrap ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                {deliveryFee === 0 ? 'BEZPŁATNA' : formatPLN(deliveryFee)}
              </span>
            </div>
            
            {deliveryFee === 0 && (
              <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium text-center">
                🎉 Oszczędzasz {formatPLN(190.93)} na kosztach dostawy!
              </div>
            )}
            
            <div className="border-t pt-4">
              <p className="text-xl font-bold text-gray-900">Cena Całkowita</p>
              <p className="text-4xl font-extrabold text-primary whitespace-nowrap mt-1">{formatPLN(totalPrice)}</p>
            </div>
          </div>

          {/* CTA Area */}
          <div className="mt-auto">
            <Button 
              onClick={handleOrder}
              disabled={!postalCode || !/^\d{2}-\d{3}$/.test(postalCode) || liters < 1500 || isProcessing}
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-xl font-semibold transition-all hover-scale"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Przetwarzanie...</span>
                </div>
              ) : (
                'Zamów Teraz'
              )}
            </Button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Bezpłatne i niezobowiązujące sprawdzenie ceny
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
