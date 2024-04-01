// import Navbar from "./Components/Navbar" ;
// import MainVideo from "./Components/MainVideo" ;
// import Showcase from "./Components/Showcase" ;
// import OurHistory from "./Components/OurHistory";
// import BestSellers from "./Components/bestsellers/BestSellers";
// import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/navpages/Aboutus";
import Main from "./Main";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
