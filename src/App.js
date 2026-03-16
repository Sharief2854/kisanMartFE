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


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/customerDashboard' element={<CustomerDashboard />} /> */}
            <Route path='/admin' element={<AdminDashboard />} >
              <Route index element={<h1>admin dashboard</h1>} />

                <Route path='/admin/customers' element={<Customers />} />
                <Route path='/admin/products' element={<Products/>} />


            </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
