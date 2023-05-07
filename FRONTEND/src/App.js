
import './App.css';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import User_Profile from "./Pages/Profile";
import Cart from './Pages/Home';
import ProductDetail from './Pages/Products_detail';

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

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Cart />} />
          <Route path="/User_Profile" element={<User_Profile />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>

        <Route path='/login' element={<LoginForm />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;
