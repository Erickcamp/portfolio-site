import React from "react"
import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
