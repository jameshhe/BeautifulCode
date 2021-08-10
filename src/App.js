import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import CodeList from "./components/CodeList";
import CodePage from "./components/CodePage";
import Navigation from "./components/Navigation";
import CodeUpload from "./components/CodeUpload";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/codeList" component={CodeList} />
        <Route exact path="/code/:id" component={CodePage} />
        <Route exact path="/codeUpload" component={CodeUpload} />
      </Router>
    </div>
  );
}

export default App;
