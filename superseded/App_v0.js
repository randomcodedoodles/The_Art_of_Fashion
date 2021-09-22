import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import { Header } from './components/Header';
import { Home } from "./components/homeComp/Home";
import { ContactUs } from "./components/contactUsComp/ContactUs";
import { AboutUs } from "./components/aboutUsComp/AboutUs";
import { Footer } from "./components/Footer";
//import { ScrollToTop } from "./ScrollToTop";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(()=>{
    //console.log(document.body.scrollWidth, document.body.clientWidth, window.innerWidth, document.documentElement.clientWidth, window.screen.width)

    const handleHorizontalScrollBarWhenLoaded = () => window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0);
    window.addEventListener("load", handleHorizontalScrollBarWhenLoaded);

    return () => window.removeEventListener("load", handleHorizontalScrollBarWhenLoaded);
  },[]) 
  
  //useEffect(()=>{window.scroll((document.body.scrollWidth - window.innerWidth) / 2, 0);},[])
  //useLayoutEffect(() => { window.scrollTo(0, 0)});

  //const browserHistory = createBrowserHistory();
  //browserHistory.listen((location, action) => { window.scrollTo(0, 0);});


  return (
    <div className="App">
      <Router>
        <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;


//<Router onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()}>
//<Router history={browserHistory}></Router>