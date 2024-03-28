import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Desarrollo from './pages/Desarrollo';
import Desenlace from './pages/Desenlace';

const App = () => {
    return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/desarrollo" element={<Desarrollo />} />
                <Route path="/desenlace" element={<Desenlace />} />
            </Routes>
        </div>
    </Router>
    );
};

export default App;
