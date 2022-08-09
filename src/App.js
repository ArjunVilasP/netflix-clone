import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import MovieCard from './components/MovieCard/MovieCard';
import { Originals, Action, Comedy, Romance, Documentary, Trending } from './urls';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <MovieCard url={Originals} title="Netflix Originals" isOriginals />
     <MovieCard url={Trending} title="Trending" />
     <MovieCard url={Action} title="Action" />
     <MovieCard url={Comedy} title="Comedy" />
     <MovieCard url={Romance} title="Romance" />
     <MovieCard url={Documentary} title="Documentary" />
     <Footer/>
    </div>
  );
}

export default App;
