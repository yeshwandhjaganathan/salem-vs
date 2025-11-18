import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import ScrollToTop from "./ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Outlets from "./pages/Outlets";
import NotFound from "./pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          {/* Scroll to top on route change */}
          <ScrollToTop />

          {/* Navbar always visible */}
          <Navbar />

          {/* Page content */}
          <main className="flex-1 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/outlets" element={<Outlets />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer & Floating UI */}
          <Footer />
          <FloatingChat />

          {/* Global toaster notifications */}
          <Toaster />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
