// import components at top
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Layout/Pages/";

// a function that is usable as an component
// jsx code
function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

// export to use 'import' into other parts of the app
export default App;
