import axios from 'axios'
export const checkPhotoid = (albumID) => {
    return (dispatch) => {
        // ก่อนดึงข้อมูลสั่ง dispatch ให้ reducer รู้ก่อนเพื่อจะแสดง loading
        dispatch({ type: 'LOAD_CHECKPHOTOID_PENDING' })
        return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`).then(results => {
            dispatch({ type: 'LOAD_CHECKPHOTOID_SUCCESS', payload: results.data[0].albumId })
        }).catch(err => {
            dispatch({ type: 'LOAD_CHECKPHOTOID_REJECTED', payload: err.message })
        })
    }
}