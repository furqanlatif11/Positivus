import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';
import Clients from './components/Clients';

function App() {
  return (
    <div className='mainDiv'>
      <Navbar/>
      <HeroSection/>
      <Clients/>
    </div>
  );
}

export default App;
