import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import './global.css'
import User from './pages/User';



function App() {

    const [isLogged, setIsLogged] = useState(false);

    function handleEnableLogin() {
        setIsLogged(!isLogged)
    }

    return (
        <BrowserRouter>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path='user' element={<User handleEnableLogin={handleEnableLogin} isLogged />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;