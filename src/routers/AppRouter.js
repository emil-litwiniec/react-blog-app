import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MainFeedPage from "../components/MainFeedPage";
import PostPreview from "../components/PostPreview";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={MainFeedPage} />
                <PublicRoute path="/login" component={LoginPage} />
                <PrivateRoute
                    path="/dashboard"
                    component={DashboardPage}
                />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
