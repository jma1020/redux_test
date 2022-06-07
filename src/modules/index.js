import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 만들었던 두개의 리덕스 모듈을 합쳐서 사용한다
const rootReducer = combineReducers({ counter, todos });

export default rootReducer;
