// import Navbar from "./Components/Navbar" ;
// import MainVideo from "./Components/MainVideo" ;
// import Showcase from "./Components/Showcase" ;
// import OurHistory from "./Components/OurHistory";
// import BestSellers from "./Components/bestsellers/BestSellers";
// import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/aboutuspage/Aboutus";
import Main from "./Main";
import Products from "./pages/Products";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer /> 
      </Router>

    </div>
  );
}

export default App;
