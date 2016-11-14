import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';
import axios from 'axios';

export function loadCompetencySuccess(competencies) {
    return {type: types.LOAD_COMPETENCY_SUCCESS, competencies};
}

export function createCompetencySuccess(competency) {
    return {type: types.CREATE_COMPETENCY_SUCCESS, competency};
}

export function updateCompetencySuccess(competency) {
    return {type: types.UPDATE_COMPETENCY_SUCCESS, competency};
}

export function deleteCompetencySuccess(competency) {
    return {type: types.DELETE_COMPETENCY_SUCCESS, competency};
}

export function loadCompetencies(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return axios.get('http://localhost:8080/api/competencies')
          .then(function(response){
            console.log(response);
            const compData = response["data"];
            dispatch(loadCompetencySuccess(compData));
          })
          .catch(function(error){
            console.log(error);
            throw(error);
          });
    };
}

export function saveCompetency(competency){
    console.log(competency);

    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return axios.post('http://localhost:8080/api/competencies', competency)
          .then((saveCompetency) => {
              console.log(saveCompetency["data"]["result"]);
              const extracted_newcompetency = saveCompetency["data"]["result"];
              course.id == "" ? dispatch(createCompetencySuccess(extracted_newcompetency)) : dispatch(updateCompetencySuccess(extracted_newcompetency));
          })
          .catch((error) =>{
              dispatch(ajaxCallError(error));
          });

    };
}

export function deleteCompetency(id) {
    return function(dispatch){
        dispatch(beginAjaxCall());
        return axios.delete('http://localhost:8080/api/competencies/'+id)
          .then(function(response){
            console.log(response);
            const compData = response["data"];
            dispatch(deleteCompetencySuccess(compData));
          })
          .catch(function(error){
            console.log(error);
            throw(error);
          });
    };
};
