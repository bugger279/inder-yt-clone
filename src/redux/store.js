import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReducer} from './reducers/auth.reducer';
import { homeVideoReducer, selectedVideoReducer } from './reducers/videos.reducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideoReducer,
    selectedVideo: selectedVideoReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;