import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header'
import Login from 'components/pages/Login'
import Registry from 'components/pages/Registry'
import Main from 'components/Main'
import Footer from 'components/Footer'
import Account from 'components/Account'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/" exact component={Main} />
                <Route path="/account" component={Account} />
                <Route path="/login" component={Login} />
                <Route path="/join" component={Registry} />
                <Footer/>
            </div>
        );
    }
}

export default App;
