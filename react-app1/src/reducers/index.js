import { combineReducers } from "redux";

import posts from './posts';

export default combineReducers({
    posts,
});

//the combine reducers is setting the post(state) equal to the imported post(state)