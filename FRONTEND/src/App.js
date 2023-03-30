
import './App.css';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Cart from './Pages/Home';
import CheckOut from './Pages/CheckOut'

import initFontAwesome from "./utility/initFontAwesome";

import Singup from './Pages/LoginRegister/RegisterUser'
import LoginForm from './Pages/LoginRegister/Login';
import ForgotPassword from './Pages/LoginRegister/ForgotPassword'
import PrivateRoutes from './components/Auth/PrivateRoutes'

initFontAwesome();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/Blog" element={<Blog />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/CheckOut" element={<CheckOut />} />
        </Route>

        <Route path='/login' element={<LoginForm />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />



      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
