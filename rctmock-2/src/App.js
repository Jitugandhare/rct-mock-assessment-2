// import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
     <h1>Masai Quiz</h1>
     <NavBar/>
     <MainRoutes/>
    {/*  <HomePage/> */}
    </div>
  );
}

export default App;
