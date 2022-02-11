import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
        <NavBar />
        <Hero />
        <Content />
        <Footer />
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
          
          
    
    </>
  );
}

export default App;
