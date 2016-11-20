import {combineReducers} from 'redux';
import app from './app';
import expect from './expect';
import sound from './sound';
import show from './show';
import reminder from './reminder';

const rootReducer = combineReducers({
  app, expect, sound, show, reminder
});

export default rootReducer;
