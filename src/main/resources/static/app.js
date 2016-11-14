import React from 'react';
import {render} from 'react-dom';
import configStore from './store/configStore';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import routes from './routes';
import {loadCompetencies} from './actions/competencyAction';
import About from './js/About';
import Competency from './components/CompetencyPage';
import App from './components/App';
import ManageCompetency from './components/ManageCompetency';
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'; 

const store = configStore();
store.dispatch(loadCompetencies());
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
        	<Route path="/" component={App}>
		        <Route path="/competency" component={Competency} />
		        <Route path="/detailCompetency" component={ManageCompetency} />
		        <Route path="/detailCompetency/:id" component={ManageCompetency} />
		        <Route path="/about" component={About} />
		    </Route>
		</Router>
    </Provider>,
    document.getElementById("react")
);