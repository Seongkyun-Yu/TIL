import { combineReducer } from 'redux';
import Popular from './Popular';
import Recent from './Recent';
import Detail from './Detail';
import Search from './Search';

const rootReducer = combineReducer({
  Popular,
  Recent,
  Detail,
  Search,
});

export default rootReducer;
