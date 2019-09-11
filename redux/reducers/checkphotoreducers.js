const initialState = {
    photoerror: { data: null, isLoading: false, isRejected: false }
};

export default (state = initialState, action) => {
    switch (action.type) {
        // เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case "LOAD_CHECKPHOTO_PENDING":
            return Object.assign({}, state, {
                photoerror: { data: null, isLoading: true, isRejected: false }
            })
        case "LOAD_CHECKPHOTO_SUCCESS":
            return Object.assign({}, state, {
                photoerror: { data: action.payload, isLoading: false, isRejected: false }
            })
        case "LOAD_CHECKPHOTO_REJECTED":
            return Object.assign({}, state, {
                photoerror: { data: action.payload, isLoading: false, isRejected: true }
            })
        default:
            return state;
    }
};