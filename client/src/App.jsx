import React from 'react';
import "./styles/app.scss"
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import WebSock from "./components/WebSock";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path='/:id'>
                        <Toolbar/>
                        <SettingBar/>
                        <Canvas/>
                        <WebSock />
                    </Route>
                    <Redirect to={`f${(+new Date).toString(16)}`}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
