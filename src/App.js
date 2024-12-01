import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/MainPage";
import MyAccount from "./pages/myAccount";
import PetsAdd from "./pages/petsAdd";
import PetsSearch from "./pages/petsSearch";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes> 
          <Route path="/" element={<MainPage />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/petsAdd" element={<PetsAdd />} />
          <Route path="/petsSearch" element={<PetsSearch />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
