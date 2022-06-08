import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyPage from './pages/PropertyPage';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/results" element={<PropertyPage />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default App;