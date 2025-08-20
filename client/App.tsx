import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PlaceholderPage from "./components/PlaceholderPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/services"
                element={
                  <PlaceholderPage
                    title="Our Services"
                    description="Discover our comprehensive range of marketing services designed to elevate your brand and drive results."
                  />
                }
              />
              <Route
                path="/case-studies"
                element={
                  <PlaceholderPage
                    title="Case Studies"
                    description="Explore our portfolio of successful campaigns and see how we've helped brands achieve their goals."
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <PlaceholderPage
                    title="About Us"
                    description="Meet our talented team and learn about our mission to create exceptional marketing experiences."
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <PlaceholderPage
                    title="Contact Us"
                    description="Ready to start your next project? Get in touch with our team and let's create something amazing together."
                  />
                }
              />
              <Route
                path="/channelpartners"
                element={
                  <PlaceholderPage
                    title="Channel Partners"
                    description="Meet our taWe work closely with our channel partners to build strong, mutually beneficial relationships that drive growth, innovation, and value for clients worldwide."
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
