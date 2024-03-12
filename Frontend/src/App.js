import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Signup from './components/Sign_Up/Signup';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/meal/:id" element = {<MealDetails />} />
        <Route path = "/meal/category/:name" element = {<Category />} />
        <Route path = "/SignUp" element = {<Signup />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
