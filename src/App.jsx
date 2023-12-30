import { About } from './components/sections/About.jsx';
import { Header } from './components/sections/Header.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Quote } from './components/sections/Quote.jsx';
import { Products } from './components/sections/Products.jsx';
import { Testimonials } from './components/sections/Testimonials.jsx';
function App() {
    return (
        <div className="">
            <Header />
            <Hero />
            <About /> 
            <Quote />
            <Products />
            <Testimonials />
        </div>
    );
}

export default App;
