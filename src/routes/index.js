/* Packages */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppContainer from '../containers/App';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        component={AppContainer}
                    />
                </Switch>
            </Router>
        );
    }
}

export default ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
