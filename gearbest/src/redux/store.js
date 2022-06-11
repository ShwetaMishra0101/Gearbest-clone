import{applyMiddleware, legacy_createStore as createstore, combineReducers,compose } from 'redux'
import thunk from "redux-thunk"

import {reducer} from '../redux/reducer'


// productHome: [],
// productCoupen: [],
// productApp: [],
// productSuper: [],
// productNew: [],
const rootReducer = combineReducers({

    productHome:reducer,
    productCoupen:reducer,
    productApp:reducer,
    productSuper:reducer,
    productNew:reducer
    
})


const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );
  export const store = createstore(rootReducer,enhancer);
