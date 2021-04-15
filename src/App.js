import { BrowserRouter,Switch, Route,  } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/header" component={Header} />
    <Route exact path="/home" component={Home} />  
    
    </Switch>
    </BrowserRouter>
)
}

export default App;
