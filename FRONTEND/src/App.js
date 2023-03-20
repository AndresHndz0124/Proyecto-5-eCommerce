
import './App.css';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Cart from './Pages/Home';
import initFontAwesome from "./utility/initFontAwesome";
initFontAwesome();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/Blog" element={<Blog/>} />
        {/* <Route path="/booking" element={<Ourmenu/>} /> */}
        {/* <Route path="*" element={<Navigate to="/home" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
