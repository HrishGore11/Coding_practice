import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
