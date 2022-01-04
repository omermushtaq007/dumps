// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './components/loign';
import Greetings from './components/greetings';
import Error404 from './pages/error404';
import Navbar from './layout/navbar';

function App() {
  const auth = localStorage.getItem('auth');
  const welcome = () => {
    if (auth) return <Greetings />;
  };
  return (
    <>
      {welcome()}
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="home" exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
