const initialState = {
    users: { data: null, isLoading: false, isRejected: false }
};

export default (state = initialState, action) => {
    switch (action.type) {
        // เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case "LOAD_USERS_PENDING":
            return Object.assign({}, state, {
                users: { data: null, isLoading: true, isRejected: false }
            })
        case "LOAD_USERS_SUCCESS":
            return Object.assign({}, state, {
                users: { data: action.payload, isLoading: false, isRejected: false }
            })
        case "LOAD_USERS_REJECTED":
            return Object.assign({}, state, {
                users: { data: action.payload, isLoading: false, isRejected: true }
            })
        default:
            return state;
    }
};