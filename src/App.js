import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Search from './Pages/Search/Search';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}

export default App;
