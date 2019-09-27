import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header'
import Login from 'components/pages/Login'
import Registy from 'components/pages/Registry'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/login" component={Login} />
                <Route path="/join" component={Registy} />
            </div>
            );
    }
}

export default App;
