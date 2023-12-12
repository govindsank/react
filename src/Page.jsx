import { BrowserRouter, Routes, Route } from "react-router-dom";
import MW from "./middleware/middleware";
import Home from "./home";
import Nav from "./nav"
import Upload from "./upload"


function App(){
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
        <Route index element={<Home />}/>
        <Route path="/upload" element={<Upload />}/>
        </Routes>
        </BrowserRouter>
    );
}
export default App