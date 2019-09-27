import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header'
import Login from 'components/pages/Login'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/login" component={Login} />
            </div>
            );
    }
}

export default App;
