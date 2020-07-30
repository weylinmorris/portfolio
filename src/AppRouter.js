import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" component={Homepage} exact={true}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/blog" component={Blog}/>

                    <Route component={Homepage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;