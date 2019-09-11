const initialState = {
    photos: { data: null, isLoading: false, isRejected: false }
};

export default (state = initialState, action) => {
    switch (action.type) {
        // เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case "LOAD_PHOTOID_PENDING":
            return Object.assign({}, state, {
                photos: { data: null, isLoading: true, isRejected: false }
            })
        case "LOAD_PHOTOID_SUCCESS":
            return Object.assign({}, state, {
                photos: { data: action.payload, isLoading: false, isRejected: false }
            })
        case "LOAD_PHOTOID_REJECTED":
            return Object.assign({}, state, {
                photos: { data: action.payload, isLoading: false, isRejected: true }
            })
        default:
            return state;
    }
};