import {combineReducers} from 'redux';
import SendRequest from './send-request';

const allReducers = combineReducers ({
    sendRequest: SendRequest
});

export default allReducers;