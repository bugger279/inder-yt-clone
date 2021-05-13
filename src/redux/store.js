import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReducer} from './reducers/auth.reducer';
import { homeVideoReducer, relatedVideoReducer, selectedVideoReducer } from './reducers/videos.reducer';
import thunk from 'redux-thunk'
import { channelDetailsReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideoReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideo: relatedVideoReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;