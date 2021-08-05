import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import CodeList from "./components/CodeList";
import Code from "./components/Code";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/codeList" component={CodeList} />
        <Route exact path="/code/:id" component={Code} />
      </Router>
    </div>
  );
}

export default App;
