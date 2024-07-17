import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WisataAlam from './pages/WisataAlam';
import WisataNonAlam from './pages/WisataNonAlam';
import Team from './pages/Team';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/WisataAlam" element={<WisataAlam />} />
                <Route path="/WisataNonAlam" element={<WisataNonAlam />} />
                <Route path="/Team" element={<Team />} />
            </Routes>
        </Router>
    );
}

export default App;
