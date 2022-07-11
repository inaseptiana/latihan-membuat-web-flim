import "./App.css";
import ApiContextProvider from "./context/ApiContext";
import Api from "./component/Api";
import TvContextProvider from "./context/TvContext";
import Tv from "./component/Tv";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Register from "./component/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <>
          <ApiContextProvider>
            <TvContextProvider>
              <Routes>
                <Route path="/api" element={<Api />} />
                <Route path="/tv" element={<Tv />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </TvContextProvider>
          </ApiContextProvider>
        </>
        <></>
      </div>
    </BrowserRouter>
  );
}

export default App;
