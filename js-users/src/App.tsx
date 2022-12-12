import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateUserPage from "./Pages/CreateUserPage";
import UpdateUserPage from "./Pages/EditUserPage";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />}></Route>
        <Route path="/new" element={<CreateUserPage />}></Route>
        <Route path="/edit" element={<UpdateUserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
