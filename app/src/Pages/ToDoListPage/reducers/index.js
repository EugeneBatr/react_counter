import {handleActions} from 'redux-actions';

import * as actions from '../actions'

const defaultState = {
        notes: []
};

const notesPageReducer = handleActions({
        [actions.CREATE_NOTE]: (state, action) => {

                return state
        }
}, defaultState);

export default notesPageReducer