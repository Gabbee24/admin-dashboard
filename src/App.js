import { useEffect, useState } from 'react';
import './App.css';
import MainSection from './components/MainSection';
import RightSection from './components/RightSection';
import Sidebar from './components/Sidebar';

function App() {
  const [show ,setShow] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  
  useEffect(() =>{
    function handleResize(){
      setShow(false)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',handleResize);
  },[])
  return (
    <div className="container">
      {!show && <Sidebar
        setShow={setShow}
        show={show}
      />}
      <MainSection/>
      <RightSection
        setShow={setShow}
        show={show}
      />
    </div>
  );
}

export default App;
