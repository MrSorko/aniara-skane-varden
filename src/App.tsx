import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // useEffect här
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Aniara Psykiatri",
      "url": "https://www.aniarapsykiatri.se",
      "telephone": "+46701234567"
    });
    document.head.appendChild(script);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/om-mig" element={<About />} />
            <Route path="/vard-tjanster" element={<Services />} />
            <Route path="/sa-funkar-det" element={<HowItWorks />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;