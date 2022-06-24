import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './LandingPage/LandingPage';
function App() {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
