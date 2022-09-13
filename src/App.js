import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <h1>hi</h1>
      <Info />
      <div className="container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
