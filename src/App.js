import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './App.css';
import TrangChu from './TrangChu';
import LienHe from './LienHe';
import Sukien from './SuKien';
import YKien from './YKien';
import { useEffect } from 'react';
const history = createBrowserHistory()
function App() {

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/botrua' component={TrangChu}></Route>
        <Route  path='/botrua/trangchu' component={TrangChu}></Route>
        <Route  path='/botrua/ykien' component={YKien}></Route>
        <Route  path='/botrua/sukien' component={Sukien}></Route>
        <Route  path='/botrua/lienhe' component={LienHe}></Route>
      </Switch>
    </Router>
  );
}

export default App;
