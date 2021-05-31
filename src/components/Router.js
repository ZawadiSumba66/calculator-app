import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';
import Navbar from './Navbar';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
