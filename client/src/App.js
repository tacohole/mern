import React from "react";
import { Route } from "react-router-dom";

import NavBar from './components/navbar';
import Edit from './components/edit';
import Create from './components/create';
import RecordList from './components/recordList';

const App = () => {
    return (
        <div>
            <NavBar />
            <Route exact path="/">
                <RecordList />
            </Route>
            <Route path="/edit/:id" component={Edit} />
            <Route path="/create">
                <Create />
            </Route>
        </div>
    );
}

export default App