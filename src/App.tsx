
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Success from "./pages/Success";
import Consult from "./pages/Consult";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/success" element={<Success />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Language-specific routes */}
          <Route path="/kr" element={<Index language="kr" />} />
          <Route path="/kr/services" element={<Services language="kr" />} />
          <Route path="/kr/packages" element={<Packages language="kr" />} />
          <Route path="/kr/success" element={<Success language="kr" />} />
          <Route path="/kr/consult" element={<Consult language="kr" />} />
          <Route path="/kr/blog" element={<Blog language="kr" />} />
          <Route path="/kr/contact" element={<Contact language="kr" />} />
          <Route path="/cn" element={<Index language="cn" />} />
          <Route path="/cn/services" element={<Services language="cn" />} />
          <Route path="/cn/packages" element={<Packages language="cn" />} />
          <Route path="/cn/success" element={<Success language="cn" />} />
          <Route path="/cn/consult" element={<Consult language="cn" />} />
          <Route path="/cn/blog" element={<Blog language="cn" />} />
          <Route path="/cn/contact" element={<Contact language="cn" />} />
          <Route path="/en" element={<Index language="en" />} />
          <Route path="/en/services" element={<Services language="en" />} />
          <Route path="/en/packages" element={<Packages language="en" />} />
          <Route path="/en/success" element={<Success language="en" />} />
          <Route path="/en/consult" element={<Consult language="en" />} />
          <Route path="/en/blog" element={<Blog language="en" />} />
          <Route path="/en/contact" element={<Contact language="en" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
