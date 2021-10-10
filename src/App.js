import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import edu from "./pages/education";
import Projects from "./pages/projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/Education" exact component={edu} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
          
        <Footer />
      </Router>
    </div>
  );
}

export default App;
