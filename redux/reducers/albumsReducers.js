const initialState = {
    albums: { data: null, isLoading: false, isRejected: false }
};

export default (state = initialState, action) => {
    switch (action.type) {
        // เก็บ state การดึงข้อมูลผู้ใช้ทั้งหมด
        case "LOAD_ALBUMID_PENDING":
            return Object.assign({}, state, {
                albums: { data: null, isLoading: true, isRejected: false }
            })
        case "LOAD_ALBUMID_SUCCESS":
            return Object.assign({}, state, {
                albums: { data: action.payload, isLoading: false, isRejected: false }
            })
        case "LOAD_ALBUMID_REJECTED":
            return Object.assign({}, state, {
                albums: { data: action.payload, isLoading: false, isRejected: true }
            })
        default:
            return state;
    }
};