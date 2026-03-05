import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import DoctorProfile from "./pages/DoctorProfile";
import Home from "./pages/Home";
import SearchDoctors from "./pages/SearchDoctors";
import ArticleDetail from "./pages/ArticleDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route  element={<Layout/>} >
            <Route path="/" element={<Home/>}/>
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/search" element={<SearchDoctors />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            

          
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;