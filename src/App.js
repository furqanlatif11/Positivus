import Navbar from './components/Navbar';
import './App.css';
import HeroSection from './components/HeroSection';
import Clients from './components/Clients';
import Services from './components/Services';

function App() {
  return (
    <div className='mainDiv'>
      <Navbar/>
      <HeroSection/>
      <Clients/>
      <Services/>
    </div>
  );
}

export default App;
