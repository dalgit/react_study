//처음 스테이트 초기화
let initialState = {
    count: 0,
    id: "",
    password: ""
}


function reducer(state = initialState, action) { //리듀서는 리턴값으로 스토어를 바꾸는 역할을 한다.
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num };

        case "DECREASE":
            return { ...state, count: state.count - action.payload.num };

        case "LOGIN":
            return { ...state, id: action.payload.id, password: action.payload.password }



        default:
            return { ...state };
    }

    // if(action.type === "INCREAMENT"){
    //     return {...state, count:state.count+1}
    // }
    // return {...state} //if가 해당 안되어도 무조건 기본적인 리턴 필요
}

export default reducer