import "../src/styles.css";
import IndexPage from './pages/index'
import React from "react";
import {Routes, Route, Router, useLocation, BrowserRouter} from 'react-router-dom';

function LocationDisplay() {
    let location = useLocation();
    console.log(location.pathname);
    return null; // This component doesn't render anything
}

export default function App() {
    return (
        <BrowserRouter>
            <LocationDisplay/>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/:id" element={<IndexPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}
