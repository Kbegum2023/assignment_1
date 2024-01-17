import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Students from './components/Students';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Students />
      <Footer />
    </>
  );
}

export default App
