import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function competencyReducer(state=initialState.competencies, action){
    switch(action.type){
        case types.LOAD_COMPETENCY_SUCCESS:
            return action.competencies;

        case types.CREATE_COMPETENCY_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.competency)
            ];

        case types.UPDATE_COMPETENCY_SUCCESS:
            return [
                ...state.filter((competency) => competency.id !== action.competency.id), 
                Object.assign({}, action.competency)
            ];
            
        case types.DELETE_COMPETENCY_SUCCESS:
        	return state.filter((competency) => competency.id !== action.competency.id);
            
        default: 
            return state;
    }
}