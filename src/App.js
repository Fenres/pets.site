import {Routes, Route} from "react-router-dom"

import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/MainPage";



function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Route>
          <Route path = {'/'} element = {<MainPage />}></Route>


        </Route>   
    </div>
      <Footer />
    </Router>
    
  );
}

export default App;
