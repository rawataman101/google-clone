import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./SearchPage";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/" element={<Home />}>
            {/* Home -> the one with the search on*/}
          </Route>
        </Switch>
        {/* SearchPage -> results page*/}
      </Router>
    </div>
  );
}

export default App;
