import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/practice/`} element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
