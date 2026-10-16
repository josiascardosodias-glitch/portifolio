import { About } from './sections/About'
import { Education } from './sections/Education'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <main className="font-sans text-white">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
