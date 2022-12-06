import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateUserPage from "./Pages/CreateUserPage";
import UpdateUserPage from "./Pages/EditUserPage";
import Users from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/new" element={<CreateUserPage />}></Route>
        <Route path="/edit" element={<UpdateUserPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
