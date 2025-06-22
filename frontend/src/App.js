
import './App.css';
import NavBar from '../../frontend/src/Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route }  from 'react-router-dom';
import Shope from './Pages/Shope';
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
          <Route path='/' element={<Shope/>}/>
          <Route path='/mens' element={<ShopeCategory category="mens"/>}/>
          <Route path='/Womens' element={<ShopeCategory category="Womens"/>}/>
          <Route path='/Kids' element={<ShopeCategory category="Kids"/>}/>
          <Route path ='/Product' element={<Products/>}>
            <Route path=':productID' element={<Products/>}/>
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
