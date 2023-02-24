import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stock from "./pages/Stock";
import Heatmap from "./pages/Heatmap";
import Map from "./pages/Map";
import Scatter from "./pages/ScatterChart";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="heatmap" element={<Heatmap />} />
                <Route path="scatter" element={<Scatter />} />
                <Route path="stock" element={<Stock />} />
                <Route path="map" element={<Map />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
