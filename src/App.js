import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import AnyStyles from "./pages/AnyStyles";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/practice/`} element={<Practice />} />
        <Route path={`/anystyles/`} element={<AnyStyles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
