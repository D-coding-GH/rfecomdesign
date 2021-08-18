import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shoppage from './components/shopPageDesign';
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
   
     
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/shoppage" component={Shoppage} />

        
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
