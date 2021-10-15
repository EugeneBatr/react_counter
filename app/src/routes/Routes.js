import {Switch, Route, Redirect} from 'react-router-dom';
import {ROUTES} from './routeNames';
import Home from '../Pages/homePage';
import Counter from '../Pages/counterPage/components/counter';
import CounterPageContainer from '../Pages/counterPage/components/containers/CounterPageContainer';

const Routes = () => {
        return (
                <Switch>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route path={ROUTES.COUNTER} component={CounterPageContainer}/>
                        <Redirect path='*' to={ROUTES.HOME}/>
                </Switch>
        );
};

export default Routes