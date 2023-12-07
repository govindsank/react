import {BrowserRouter, Routes,Route} from "react-router-dom";
import Nav from "./navi";
import Home from "./home";
import About from "./about";
import ContactUs from "./contact-us";
import Login from "./login";
import App6 from "./register";
import MW from "./middleware/middleware";
import App7 from "./loginexpress";
import Profile from "./profile";


function App5(){
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/login" element={<App7/>}/>
            <Route path="/profile"element={<MW><Profile/></MW>}/>
            <Route path="/register"element={ <App6 />}/>

        </Routes>
            </BrowserRouter>
    );
}
export default App5