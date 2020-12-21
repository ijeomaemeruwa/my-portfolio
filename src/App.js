import React, {useState} from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar/NavBar'
import SideBar from './components/Navigation/SideBar/SideBar'
import HomePage from './sections/HomePage/HomePage'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Tools from './sections/Tools/Tools'



const App = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return (
    <>
    <Router>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <NavBar toggle={toggle}/>
   
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/tools" component={Tools} />
    </Switch>
    </Router>
    </>
    )
}

export default App

