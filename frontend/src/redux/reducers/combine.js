import { combineReducers } from "redux";
import noteReducer from '../reducers/note-reducer';

const reducers = combineReducers({
     note :noteReducer,

});

export default reducers;
