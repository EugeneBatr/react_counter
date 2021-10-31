import { combineReducers } from "redux";
import notesPageReducer from "../Pages/ToDoListPage/reducers";

const rootReducer = combineReducers({
        notesPage: notesPageReducer,
});

export default rootReducer