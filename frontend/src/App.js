
import './App.css';
import NavBar from'./Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route }  from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopeCategory from './Pages/ShopeCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopeCategory category="mens"/>}/>
          <Route path ='/womens' element={<ShopeCategory category="womens"/>}/>
          <Route path='/kids' element={<ShopeCategory category="Kids"/>}/>
          <Route path ='/product' element={<Products/>}>
              <Route path=':productID' element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
