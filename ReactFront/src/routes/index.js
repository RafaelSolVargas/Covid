/* Libraries */
import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from '../pages/404/NotFound';
import Datas from "../pages/datas/Datas";
import Register from "../pages/register/Register";
import SendFile from "../pages/sendFile/SendFile";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Datas} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/send-file" component={SendFile} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Routes;