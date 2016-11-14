import {combineReducers} from 'redux';
import competencies from './competencyReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers ({
	competencies,
    ajaxCallsInProgress,
    routing: routerReducer
});

export default rootReducer;
