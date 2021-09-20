import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from './../routes/home';
import TestOne from './../routes/test/one';
import TestTwo from './../routes/test/two';
import TestThree from './../routes/test/three';
import './../assets/App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={Index}
                        key={1}
                    />
                    <Route
                        path={'/test/1'}
                        component={TestOne}
                        key={2}
                    />
                    <Route
                        path={'/test/2'}
                        component={TestTwo}
                        key={3}
                    />
                    <Route
                        path={'/test/3'}
                        component={TestThree}
                        key={4}
                    />
                </Switch>
            </header>
        </div>
    );
}

export default App;
