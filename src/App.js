import AllLayout from "./Main/AllLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Header/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
