import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;
