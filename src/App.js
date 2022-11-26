
import './App.css';
import { NavBar } from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useState } from 'react';



function App() {
 const [language, setLanguage] = useState("english")
  return (
    <>
      <NavBar language={language} setLanguage={setLanguage}/>
      <main>
        <Banner language={language} />
        <Skills language={language}/>
        <Projects language={language}/>
        <Contact language={language}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
