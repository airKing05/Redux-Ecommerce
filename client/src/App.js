import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/product-listing' exact component={ProductListing}/>
         <Route path='/product/:productId' exact component={ProductDetails}/>
         <Route component={NotFound}/>
       </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
