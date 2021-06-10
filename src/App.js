
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Route,Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Order from './components/Order';
import AuthContainer from './components/AuthContainer';
import {Provider} from 'react-redux';
import store from './redux/store';




function App() {
  return (
    <Provider store={store}>
       <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/login-register" component={AuthContainer} />
        </Switch>
    
      </div>
    </Provider>
   
  );
}

export default App;
