import './App.css'
import { Header } from './components/Header'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
