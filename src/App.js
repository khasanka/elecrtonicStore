import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components';
import ProductDetails from './Components/ProductDetails';


function App() {
    return (
        <div className='App'>
            <TopNav/>
            <CatNav/>
            <Routes>
                <Route path='/' Component={LandingPage}/>
                <Route path='/productDetils' Component={ProductDetails}/>
            </Routes>

        </div>
    );
}

export default App;
