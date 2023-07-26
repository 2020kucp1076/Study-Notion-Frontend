import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./topcourse/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {Route, Routes} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import {useState} from "react"
import PrivateRoute from "./components/PrivateRoute"
import BlogsPage from "./Blogs/BlogsPage"
import Shopping from "./ShoppingCart/Shopping"
import Opportunity from "./JobOpportunities/Opportunity"


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
  <div className="w-screen h-screen flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs/*" element={<BlogsPage/>}/>
      <Route path="/shopping/*" element={<Shopping/>}/>
      <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element = {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/opportunities" element={<Opportunity/>}/>
      <Route path="/dashboard" element = {
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
      }/>

    
    </Routes>
  </div>)
}

export default App;
