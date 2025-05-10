import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/useThemeStore';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Memories from './components/Memories.jsx';
import Gratitude from './components/Gratitude.jsx';
import Surprise from './components/Surprise.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router basename="/dia-de-la-madre-rvt">
      <div className="min-h-screen" key={Date.now()}>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Memories /><Gratitude /><Surprise /></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;