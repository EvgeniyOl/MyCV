import { Route, Routes } from "react-router-dom";
import General from "./components/General/General";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<General />} />
        <Route path='Portfolio' element={<Portfolio />} />
      </Route>
    </Routes>
  );
};

export default App;
