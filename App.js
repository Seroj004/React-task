import './App.css';
import Header from "./components/header/header";
import Decor from "./components/decor/decor";
import Footer from "./components/footer/footer";
import Sellers from "./components/sellers/sellsers";
import Furnitures from "./components/furnitures/furnitures";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Buy from "./components/buy/buy";




function App() {
  return (
      <BrowserRouter>
    <div className="App">


      <Header/>

      <Sellers/>

      <main>
          <Switch>
              <Route path="/decor" render={() =>  <Decor/>} />
              <Route path="/furniture" render={() =>  <Furnitures/>} />
              <Route path="/buy" render={() =>  <Buy/>} />



          </Switch>
      </main>

        <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
