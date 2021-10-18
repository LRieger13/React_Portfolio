// import components at top
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';


// a function that is usable as an component
// jsx code 
function App() {
  return (
    <Navbar />
  );
}

// export to use 'import' into other parts of the app
export default App;
