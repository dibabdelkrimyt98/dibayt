// client/src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// --- COMPONENTS ---
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// 💡 NEW: This component updates the browser tab title on route change
import TitleUpdater from './components/TitleUpdater';

// --- PAGES ---
import Welcome from './pages/Welcome';
import Works from './pages/Works';
// ✅ Using the correct component name for import
import Academic from './pages/Academic_career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* 1. Title Updater must be inside Router, outside Routes */}
      <TitleUpdater /> 
      
      {/* Flex container to ensure Footer stays at bottom */}
      <div className="min-h-screen flex flex-col font-sans">
        
        {/* Navbar is outside <main> and <Routes> so it's always present */}
        <Navbar /> 
        
        {/* Main Content Area: Takes up remaining vertical space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/works" element={<Works />} />
            <Route path="/academic_career" element={<Academic />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Optional: Add a catch-all route for 404 pages */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Footer is outside <main> so it remains at the bottom */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;