import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from '../src/pages/menu';

import Pro1 from './pages/pro1';
import Pro2 from './pages/pro2';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                
                <Route path="/pro1" element={<Pro1 />} />
                
                <Route path="/pro2" element={<Pro2 />} />
            </Routes>
        </BrowserRouter>
    )
}