import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom"

import "./css/main.css";

import Course from "./views/course";

const App: React.FC = () => (


<BrowserRouter>
    <Switch>
        <Route path="/course/:id" exact component={Course} />
    </Switch>
</BrowserRouter>




)

export default App;
