import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Products from './components/products.jsx'
import NotFound from './components/notfound.jsx';

ReactDOM.createRoot(
    document.getElementById('app')
).render(
    <Router>
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    </Router>
);