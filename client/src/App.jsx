import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./pages";
import { CountriesPage } from "./pages/Countries";
import { StatesPage } from "./pages/States";
import { CitiesPage } from "./pages/Cities";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/states/:slug" element={<StatesPage />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
