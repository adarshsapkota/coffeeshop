import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import Hero from "./Section/Hero/Hero";
import Location from "./Section/Location/Location";
import Review from "./Section/Review/Review";
import Training from "./Section/Training/Training";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Training />
      <Review />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
