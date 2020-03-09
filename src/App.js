import React from "react";
import { Route, Switch, Redirect } from "react-router-dom"
import Registration from "./components/Register"
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Booklist from "./components/bookList";
import Home from "./components/Home"


function App() {
    return (
        <>
            <Switch>
                 <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />               
                <Route path="/register" component={Registration} />
                <PrivateRoute exact path="/dashboard" component={Booklist} />
                <Redirect from="/login" to="/dashboard" />


            </Switch>
        </>
    )
}
export default App;