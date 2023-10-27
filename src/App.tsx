import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <NavBar />
      <Hero></Hero>
      <AboutUs />
      <Partners />
    </>
  );
}

export default App;
