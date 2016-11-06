import {combineReducers} from 'redux';
import app from './app';
import expect from './expect';


const rootReducer = combineReducers({
  app, expect
});

export default rootReducer;
