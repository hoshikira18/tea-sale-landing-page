import { About } from "./components/sections/About.jsx";
import {Header} from "./components/sections/Header.jsx";
import {Hero} from "./components/sections/Hero.jsx";

function App() {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default App
