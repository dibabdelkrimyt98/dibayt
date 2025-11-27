// client/src/App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// --- COMPONENTS ---
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// --- PAGES ---
import Welcome from './pages/Welcome';
import Works from './pages/Works';
// ✅ FIX: Importing from the correct file name you have on disk
import Academic from './pages/Academic_career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Flex container to ensure Footer stays at bottom */}
      <div className="min-h-screen flex flex-col font-sans">
        
        {/* ✅ NAVBAR: Placed here so it shows on EVERY page */}
        <Navbar /> 
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/works" element={<Works />} />
            <Route path="/academic_career" element={<Academic />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* ✅ FOOTER: Placed here so it shows on EVERY page */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;