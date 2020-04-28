import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Navbar from './Navbar';
import Matched from '../screens/Matched';
import Report from '../screens/Report';
import Complaint from '../screens/Complaint';

const App = () => {
    return(
        <>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route path="/complaint" exact component={Complaint}/>
                    <Route path="/matched" exact component={Matched}/>
                    <Route path="/report" exact component={Report}/>
                    <Redirect to="/complaint"/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;