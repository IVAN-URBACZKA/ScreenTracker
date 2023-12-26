import '../assets/css/Home.css'
import { Header, Footer, MoviesList } from '../components';

function Home() {
  return (
    <div className="App">
        <Header />
        <MoviesList />
        <Footer />
    </div>
  );
}

export default Home;
