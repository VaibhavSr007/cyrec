import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {Navbar} from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Whois from './pages/whois/Whois';
import Subdom from './pages/subdom/Subdom';
import Geoloc from './pages/geoloc/Geoloc';
import Emailver from './pages/emailver/Emailver';
import Webcont from './pages/webcont/Webcont';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/whois" element={<Whois/>}/>
          <Route path="/subdom" element={<Subdom/>}/>
          <Route path="/geoloc" element={<Geoloc/>}/>
          <Route path="/emailver" element={<Emailver/>}/>
          <Route path="/webcont" element={<Webcont/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
