import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { AnimatePresence } from 'framer-motion'
import "./app.css";
function App() {

  const location = useLocation();
  return (

    <div className="app">
      <div className="container app__container">
        <div className="row app1 app__row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className=" app1 col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path="/about">
                  <About />
                </Route>
                <Route exact path="/">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;