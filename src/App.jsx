import About from "./components/about";
import Catalogo from "./components/Catalogo";
import Footer from "./components/Footer"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Justification from "./components/Justification";
import Marcas from "./components/Marcas";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Marcas />
      <Justification />
      <Catalogo />
      <Footer/>
    </>
  );
}

export default App;
