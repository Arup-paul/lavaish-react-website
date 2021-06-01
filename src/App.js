import Navbar from "./Components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/pages/HomePage/Home'
import Footer from "./Components/pages/Footer/Footer";
import Services from './Components/pages/Services/Services'
import Products from "./Components/pages/Products/Products";
import Signup from "./Components/pages/SignUp/Signup";
function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/services' exact component={ Services } />
            <Route path='/products' exact component={ Products } />
            <Route path='/sign-up' exact component={ Signup } />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
