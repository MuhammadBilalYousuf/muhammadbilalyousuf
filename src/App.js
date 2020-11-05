import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from 'react-loadable';
import "./App.scss";
import "./styles/Services.scss";
import "./styles/portfolio.css";

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

// HomePage
// import HomePage from './pages/HomePage';
const HomePage = loadable({
  loader: () => import('./pages/HomePage'),
  loading: () => <div>Loading...</div>
})
// End HomePage
// Projects
const ProjectsPage = loadable({
  loader: () => import('./pages/Projects'),
  loading: () => <div>Loading...</div>
})
// End Projects
// About Me
const AboutMePage = loadable({
  loader: () => import('./pages/AboutMe'),
  loading: () => <div>Loading...</div>
})
// End About Me
// Contact
const ContactMePage = loadable({
  loader: () => import('./pages/Contact'),
  loading: () => <div>Loading...</div>
})
// End Contact
// Found
const NotFoundPage = loadable({
  loader: () => import('./pages/NotFoundPage'),
  loading: () => <div>Loading...</div>
})
// End Not Found



function App() {
  return (
    <Suspense fallback={<div></div>}>
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={AboutMe} />
                <Route exact path="/contact" component={ContactMe} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
    </Suspense>
  );
}

function Projects() {
  return (
    <ProjectsPage />
    );
}

function AboutMe() {
  return (
    <AboutMePage />
    );
}

function ContactMe() {
  return (
    <ContactMePage />
  );
}

function Home() {
  return (
    <HomePage />
  );
}
export default App;
