
import './App.css';
import NavBar from'./Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route }  from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopeCategory from './Pages/ShopeCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from '../src/Components/Assest/banner_mens.png';
import women_banner from '../src/Components/Assest/banner_women.png';
import kids_banner from '../src/Components/Assest/banner_kids.png'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopeCategory banner ={men_banner} category="Mens"/>}/>
          <Route path ='/womens' element={<ShopeCategory banner ={women_banner} category="womens"/>}/>
          <Route path='/kids' element={<ShopeCategory banner ={kids_banner} category="Kids"/>}/>
          <Route path ='/product' element={<Products/>}>
              <Route path=':productID' element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
