import React from 'react'
import '../NavBar/NavBar.css'
import { Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from '../../pages/Home/Home'
import { PortfolioPage } from '../../pages/PortfolioPage/PortfolioPage'



export const NavBar = () => {
    return (
      <div>
      <div className="row menu">
      <div className="col-md-12">
        <Router>
        <Navbar expand="lg" sticky="top" className="container"> 
         <ul className="ml-auto nav mt-3">
            <li><a href="/">Home</a></li>
            <li><a href="/portfoliopage">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
         </ul>
        </Navbar>

        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/portfoliopage"><PortfolioPage /></Route>
        </Switch>
        </Router>
      </div>
      </div>
      </div>        
)
}




