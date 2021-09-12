import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductPage from './components/productPageDesign';
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
   
     
      <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/productPageDesign" component={ProductPage} />

        
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
