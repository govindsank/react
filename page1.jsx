import {BrowserRouter, Routes,Route} from "react-router-dom";
import Nav from "./navi";
import Home from "./home";
import About from "./about";
import ContactUs from "./contact-us";
import Login from "./login";
import MW from "./middleware/middleware";
import Profile from "./profile";


function App5(){
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile"element={<MW><Profile/></MW>}/>
        </Routes>
            </BrowserRouter>
    );
}
export default App5