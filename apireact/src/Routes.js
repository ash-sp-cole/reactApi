import React from 'react';
import Navbar from './Header/index';
import {Route,Switch,Redirect, Router} from 'react-router-dom';
import Home from './Home/Home';
import Display from './components/Display';
import NoMatch from './NoMatch';


export const Routes = () =>{
return(
<div>
<Navbar/>
<Switch>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/">
        <Redirect to="/Home"/>
    </Route>

    <Route exact path="/Display" component={Display}/>
    <Route component = {NoMatch}/>

</Switch>

</div>

)

}