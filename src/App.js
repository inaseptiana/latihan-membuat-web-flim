import "./App.css";
import ApiContextProvider from "./context/ApiContext";
import Api from "./component/Api";
import TvContextProvider from "./context/TvContext";
import Tv from "./component/Tv";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ApiState from "./state/ApiState";

function App() {
  return (
    <div className="App">
      <ApiState />
      <div>
        <Link to="/Api">Flim</Link>
      </div>
      <>
        <ApiContextProvider>
          <Api />
        </ApiContextProvider>
        <TvContextProvider>
          <Tv />
        </TvContextProvider>
      </>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/Api" element={<Api />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
