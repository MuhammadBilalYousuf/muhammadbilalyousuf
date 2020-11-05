import React from "react";
import "./App.scss";
import "./styles/Services.scss";
import "./styles/portfolio.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// HomePage
import HomePage from './pages/HomePage';
// End HomePage
// Projects
import ProjectsPage from './pages/Projects';
// End Projects
// About Me
import AboutMePage from './pages/AboutMe';
// End About Me
// Contact
import ContactMePage from './pages/Contact';
// End Contact
// Not Found
import NotFoundPage from './pages/NotFoundPage';
// End Not Found
function App() {
  return (
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
