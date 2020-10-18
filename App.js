import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Portfolio from "./src/pages/Portfolio";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Footer from "./src/components/Footer";
import Wrapper from "./src/components/Wrapper";

function App() {
    return (
        <Router>
          <Navbar />
           <Wrapper>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Wrapper>
          <Footer />
        </Router>
    );
}

export default App;