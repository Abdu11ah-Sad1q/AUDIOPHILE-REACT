import Home from "./pages/Home";
import Headphone from "./pages/Headphone";
import Speaker from "./pages/Speaker";
import Earphone from "./pages/Earphone";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Zx9 from "./pages/Zx9.jsx";
import Zx7 from "./pages/Zx7.jsx";
import Xx99M1 from "./pages/Xx99M1.jsx";
import Xx99M2 from "./pages/Xx99M2.jsx";
import Xx59 from "./pages/Xx59.jsx";
import { CartProvider } from "./CartContext.jsx";
import { useCart } from "./useCart.jsx";
import useEffect from "react";

const App = () => {
  return (
    <CartProvider>
      <div>
        <div className="flex flex-col min-h-screen w-screen overflow-x-hidden ">
          <Navbar />
          <main className="grow ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/headphone" element={<Headphone />} />
              <Route path="/headphone/xx99M1" element={<Xx99M1 />} />
              <Route path="/headphone/xx99M2" element={<Xx99M2 />} />
              <Route path="/headphone/xx59" element={<Xx59 />} />
              <Route path="/speaker" element={<Speaker />} />
              <Route path="/speaker/zx9" element={<Zx9 />} />
              <Route path="/speaker/zx7" element={<Zx7 />} />
              <Route path="/earphone" element={<Earphone />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
