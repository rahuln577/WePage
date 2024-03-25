import Navbar from "./Components/Navbar" ;
import MainVideo from "./Components/MainVideo" ;
import Showcase from "./Components/Showcase" ;
import OurHistory from "./Components/OurHistory";
import BestSellers from "./Components/bestsellers/BestSellers";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainVideo/>
      <Showcase />
      <OurHistory />
      {/* <BestSellers/> */}
    </div>
  );
}

export default App;
