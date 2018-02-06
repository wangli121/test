import React from 'react';
import {Router, Route, hashHistory, browserHistory, IndexRoute, Redirect} from 'react-router';
import Index from './components/index';
import Foot from './components/foot';
import Menu from './components/menu';

const RouterConfig=()=>{
    <Router history={browserHistory}>
        <Route path='/' component={Index}>
            <IndexRoute component={Index}/>
            <Route path='foot' component={Foot}></Route>
            <Route path='menu' component={Menu}></Route>
        </Route>
    </Router>
}
export default RouterConfig;