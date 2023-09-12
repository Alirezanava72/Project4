import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewsDetails from "./pages/NewsDetails";
import CreateNews from "./pages/CreateNews";
import UpdateNews from "./pages/UpdateNews";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/write" element={<CreateNews/>} />
        <Route exact path="/news/news/:id" element={<NewsDetails/>} />
        <Route exact path="/edit/:id" element={<UpdateNews/>} />
        
      </Routes>
      
    </div>
  )
}

export default App;