import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyPage from './pages/PropertyPage';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import ResultPage from './pages/ResultPage';


import ResultPage from './pages/ResultPage';

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/results" element={<ResultPage />} />
                    <Route exact path="/propertyPage" element={<PropertyPage />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default App;