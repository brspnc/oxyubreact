import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Resources from './ResourcesComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/resources' component={Resources} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;