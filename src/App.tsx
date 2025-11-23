import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import FloatingParticles from './components/FloatingParticles';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import HospitalPage from './pages/HospitalPage';
import LabPage from './pages/LabPage';
import PharmacyPage from './pages/PharmacyPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        {/* Cursor Follower Effect */}
        <CursorFollower />
        
        {/* Animated Background Elements */}
        <AnimatedBackground />
        
        {/* Floating Particles */}
        <FloatingParticles count={20} />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/hospital" element={
              <>
                <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <HospitalPage />
                <Footer />
              </>
            } />
            <Route path="/lab" element={
              <>
                <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <LabPage />
                <Footer />
              </>
            } />
            <Route path="/pharmacy" element={
              <>
                <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <PharmacyPage />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

