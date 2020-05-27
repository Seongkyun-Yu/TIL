import { combineReducers } from 'redux';
import { PhoneReducer } from '../Modules/Phone';

const rootReducer = combineReducers({
  Phone: PhoneReducer,
});

export default rootReducer;
