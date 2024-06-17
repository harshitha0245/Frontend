import Login from "./compontents/Login";
import Register from "./compontents/Register";
import Home from "./compontents/Home";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Contact from "./compontents/Contact";


function App() {
  return (
    <div>
            <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
