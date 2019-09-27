import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header'
import Login from 'components/pages/Login'
import Registry from 'components/pages/Registry'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/login" component={Login} />
                <Route path="/join" component={Registry} />
            </div>
            );
    }
}

export default App;
