import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Vendor from './pages/Vendor';
import Exam from './pages/Exam';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import Guarantee from './pages/Guarantee';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
// Components
import TopBar from './components/TopBar';
import MainBar from './components/MainBar';

const App = () => (
  <Router>
    <TopBar />
    {/* <hr /> */}
    <MainBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="vendors" element={<Vendor />} />
      <Route path="exam" element={<Exam />} />
      <Route path="certificate" element={<Certificate />} />
      <Route path="guarantee" element={<Guarantee />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
