import { Page } from "./pages";
import { CountriesPage } from "./pages/Countries";
import { StatesPage } from "./pages/States";
import { CitiesPage } from "./pages/Cities";

function App() {
  return (
    <>
      <Page />
      <CountriesPage />
      <StatesPage />
      <CitiesPage />
    </>
  );
}

export default App;
