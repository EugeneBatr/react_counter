import {Switch, Route, Redirect} from 'react-router-dom';
import {ROUTES} from './routeNames';
import Home from '../Pages/homePage';
import CounterPageContainer from '../Pages/counterPage/components/containers/CounterPageContainer';
import FunctionalCounterContainer from '../Pages/FunctionalCounters/containers/FunctionalCounterContainer';
import CounterOfCountersContainer from '../Pages/counterOfCounters/containers/counterOfCountersContainer';
import ToDoListContainer from '../Pages/ToDoListPage/containers/ToDoListContainer';


const Routes = () => {
        return (
                <Switch>
                        <Route exact path={ROUTES.HOME} component={Home}/>
                        <Route path={ROUTES.COUNTER} component={CounterPageContainer}/>
                        <Route path={ROUTES.FUNC_COUNTER} component={FunctionalCounterContainer}/>
                        <Route path={ROUTES.COUNTER_OF_COUNTERS} component={CounterOfCountersContainer}/>
                        <Route path={ROUTES.TO_DO_LIST} component={ToDoListContainer}/>
                        <Redirect path='*' to={ROUTES.HOME}/>
                </Switch>
        );
};

export default Routes