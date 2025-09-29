
import { useState } from 'react';
import { OrderService, OrderData } from '@/services/orderService';
import { useToast } from '@/hooks/use-toast';

export const useCheckout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const processOrder = async (orderData: OrderData) => {
    setIsProcessing(true);
    
    try {
      console.log('Processing order:', orderData);
      
      // Call the API to get the token
      const token = await OrderService.createOrderToken(orderData);
      
      console.log('Received token:', token);
      
      // Show success message
      toast({
        title: "Przetwarzanie zamówienia",
        description: "Za chwilę zostaniesz przekierowany do kasy...",
      });
      
      // Redirect to checkout
      setTimeout(() => {
        OrderService.redirectToCheckout(token);
      }, 1500);
      
    } catch (error) {
      console.error('Order processing failed:', error);
      
      toast({
        title: "Błąd zamówienia",
        description: error instanceof Error ? error.message : "Wystąpił nieoczekiwany błąd. Spróbuj ponownie.",
        variant: "destructive",
      });
      
      setIsProcessing(false);
    }
  };

  return {
    processOrder,
    isProcessing,
  };
};
