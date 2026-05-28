import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Pengguna from "./pages/pengguna";
import Profil from "./pages/profil";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="pengguna" element={<Pengguna/>}/>
          <Route path="profil" element={<Profil/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;