
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HeizoelSorten from "./pages/HeizoelSorten";
import Lieferservice from "./pages/Lieferservice";
import Preise from "./pages/Preise";
import UeberUns from "./pages/UeberUns";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Widerrufsrecht from "./pages/Widerrufsrecht";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Polish Routes */}
          <Route path="/rodzaje-oleju-opalowego" element={<HeizoelSorten />} />
          <Route path="/uslugi-dostawy" element={<Lieferservice />} />
          <Route path="/ceny" element={<Preise />} />
          <Route path="/o-nas" element={<UeberUns />} />
          <Route path="/regulamin" element={<Impressum />} />
          <Route path="/polityka-prywatnosci" element={<Datenschutz />} />
          <Route path="/warunki-sprzedazy" element={<AGB />} />
          <Route path="/prawo-odstapienia" element={<Widerrufsrecht />} />
          
          {/* German Route Redirects */}
          <Route path="/heizoelsorten" element={<Navigate to="/rodzaje-oleju-opalowego" replace />} />
          <Route path="/lieferservice" element={<Navigate to="/uslugi-dostawy" replace />} />
          <Route path="/preise" element={<Navigate to="/ceny" replace />} />
          <Route path="/ueber-uns" element={<Navigate to="/o-nas" replace />} />
          <Route path="/impressum" element={<Navigate to="/regulamin" replace />} />
          <Route path="/datenschutz" element={<Navigate to="/polityka-prywatnosci" replace />} />
          <Route path="/agb" element={<Navigate to="/warunki-sprzedazy" replace />} />
          <Route path="/widerrufsrecht" element={<Navigate to="/prawo-odstapienia" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
