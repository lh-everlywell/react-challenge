import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss';
import Home from "./components/Home/Home";
import DetailContainer from "./components/DetailContainer/DetailContainer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faSearch, faRedo } from '@fortawesome/free-solid-svg-icons'
import Search from "./components/Search/Search";

library.add(faArrowLeft, faSearch, faRedo)


const App: React.FunctionComponent = () => {
  return (
    <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/:id" component={DetailContainer} />

        </Switch>
    </Router>
  );
}

export default App;
