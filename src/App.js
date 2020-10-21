import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
          <Navbar />
           <Wrapper>
              <Route exact path="/portfolio/" component={About} />
              <Route exact path="/portfolio/about" component={About} />
              <Route exact path="/portfolio/work" component={Portfolio} />
              <Route exact path="/portfolio/contact" component={Contact} />
            </Wrapper>
          <Footer />
        </Router>
    );
}

export default App;