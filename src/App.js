import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/common/NavBar";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
