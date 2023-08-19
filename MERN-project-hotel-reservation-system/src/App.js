import logo from './logo.svg';
import './App.css';
import './App.css';
import NavBar from './components/navbar'
import Home from './components/Home'
import Footer from './components/footer'
import Pricing from './components/pricing'
import Blog from './components/blog'
import Signin from './components/signin'
import Carousel from './components/carousel'
import Aboutus from './components/aboutus';
import Sidebars from './components/sidebars';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar/>
      <Sidebars/>
      <Carousel/>
      <Home/>
      <Footer/>
    </div>

  );
}

export default App;
