import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/footer';
import Shoppage from './components/shopPageDesign';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shoppage" component={Shoppage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
