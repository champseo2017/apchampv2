const initialState = {
    photoiderror: { data: null, isLoading: false, isRejected: false }
};

export default (state = initialState, action) => {
    switch (action.type) {
        // เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case "LOAD_CHECKPHOTOID_PENDING":
            return Object.assign({}, state, {
                photoiderror: { data: null, isLoading: true, isRejected: false }
            })
        case "LOAD_CHECKPHOTOID_SUCCESS":
            return Object.assign({}, state, {
                photoiderror: { data: action.payload, isLoading: false, isRejected: false }
            })
        case "LOAD_CHECKPHOTOID_REJECTED":
            return Object.assign({}, state, {
                photoiderror: { data: action.payload, isLoading: false, isRejected: true }
            })
        default:
            return state;
    }
};