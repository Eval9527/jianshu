import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducer";

const middleware = [

]

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware),
    )
)

export default store
