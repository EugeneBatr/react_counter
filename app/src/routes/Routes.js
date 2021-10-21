import {Switch, Route, Redirect} from 'react-router-dom';
import {ROUTES} from './routeNames';
import Home from '../Pages/homePage';
import CounterPageContainer from '../Pages/counterPage/components/containers/CounterPageContainer';
import FunctionalCounterContainer from '../Pages/FunctionalCounters/containers/FunctionalCounterContainer';

const Routes = () => {
        return (
                <Switch>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route path={ROUTES.COUNTER} component={CounterPageContainer}/>
                        <Route path={ROUTES.FUNC_COUNTER} component={FunctionalCounterContainer}/>
                        <Redirect path='*' to={ROUTES.HOME}/>
                </Switch>
        );
};

export default Routes