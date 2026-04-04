import logo from './logo.svg';
import './App.css';
import RegisterPage from './Components/customer/RegisterPage';
import Login from './Components/Login';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import CustomerDashboard from './Components/customer/CustomerDashboard';
import AdminDashboard from './Components/admin/AdminDashboard';
import LandingPage from './Components/landingPage/LandingPage';
import Customers from './Components/admin/customer/Customers';
import Products from './Components/admin/products/Products';
import Protected from './Components/ProtectedRoute/Protected';
import CustomerProducts from './Components/customer/Products/CustomerProducts';
import CartItems from './Components/customer/Cart/CartItems';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from './redux/cartSlice';
import Orders from './Components/customer/orders/Orders';
import AdminOrders from './Components/admin/orders/AdminOrders';


function App() {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<Login />} />
          <Route
            path='/customer'
            element={<Protected>
                    <CustomerDashboard />
                </Protected>} >
            <Route index element={<h1>customer dashboard</h1>} />

            <Route path='/customer/products' element={<CustomerProducts />} />
            <Route path='/customer/cart' element={<CartItems />} />
            <Route path='/customer/orders' element={<Orders />} />



          </Route>
            <Route 
              path='/admin' 
              element={<Protected>
                            <AdminDashboard />
                      </Protected>} >
              <Route index element={<h1>admin dashboard</h1>} />

                <Route path='/admin/customers' element={<Customers />} />
                <Route path='/admin/products' element={<Products/>} />
               <Route path='/admin/orders' element={<AdminOrders />} />



            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
