import React from 'react'
import Home from '../pages/Home/Home';
import AboutPage from '../pages/AboutPage/AboutPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

 

function App() {
  return (
    <>
      <ScrollToTop />

      <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/aboutpage" component={AboutPage}/>
      <Route path="/projectspage" component={ProjectsPage}/>
      </Switch>
      </Router>
      
    </>
  );
}

export default App;
