import { createStore } from 'redux'
import reducer from "./reducer/reducer"


let store = createStore(reducer) //스토어를 바꿔주는 함수 리듀서

export default store;