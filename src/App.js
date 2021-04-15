import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Services from "./pages/services"
import Contact from "./pages/contactus"
import SignUp from "./pages/signup"


function App() {
 
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/about" exact component={About}/>
      <Route path="/services" exact component={Services}/>
      <Route path="/contactus" exact component={Contact}/>
      <Route path="/signup" exact component={SignUp}/>
    </Switch>
    </Router>
  );
}

export default App;
