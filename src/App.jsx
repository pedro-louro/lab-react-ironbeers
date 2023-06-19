import './App.css';
import NavBar from './components/NavBar';
import BeerDetails from './pages/BeerDetails';
import Beers from './pages/Beers';
import HomePage from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import RandomBeer from './pages/RandomBeer';
import AddABeer from './pages/NewBeer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/beers'
          element={<Beers />}
        />
        <Route
          path='/beers/:beerId'
          element={<BeerDetails />}
        />
        <Route
          path='/beers/random-beer'
          element={<RandomBeer />}
        />
        <Route
          path='/beers/new-beer'
          element={<AddABeer />}
        />
      </Routes>
    </div>
  );
}

export default App;
