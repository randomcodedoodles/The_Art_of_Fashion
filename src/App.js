import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import { Header } from './components/Header';
import { Home } from "./components/homeComp/Home";
import { ContactUs } from "./components/contactUsComp/ContactUs";
import { AboutUs } from "./components/aboutUsComp/AboutUs";
import { Footer } from "./components/Footer";
import ScrollToTopCenter from "./ScrollToTop";

function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTopCenter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route>404 Not Found!</Route>
          </Switch>
          <Footer />
        </ScrollToTopCenter>
      </Router>
    </div>
  );
}

export default App;


//<Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
//<Router history={browserHistory}></Router>