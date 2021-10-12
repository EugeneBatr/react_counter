import {Switch, Route, Redirect} from 'react-router-dom';
import {ROUTES} from './routeNames';
import Home from '../Pages/homePage';
import UsersPageContainer from '../Pages/UsersPage/conteiners/UsersPageContainer';

const Routes = () => {
        return (
                <Switch>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route path={ROUTES.USERS_PAGE} component={UsersPageContainer}/>
                        <Redirect path='*' to={ROUTES.HOME}/>
                </Switch>
        );
};

export default Routes