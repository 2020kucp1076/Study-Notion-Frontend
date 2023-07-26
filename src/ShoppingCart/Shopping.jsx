import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
  <div className="overflow-x-hidden">
    <div className="bg-slate-900 w-screen">
      <Navbar/>
    </div>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/cart" element ={<Cart/>}/>
    </Routes>
  </div>);
};

export default App;
