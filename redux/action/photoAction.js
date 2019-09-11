import axios from 'axios'
export const loadPhotoId = (albumID) => {
    return (dispatch) => {
        // ก่อนดึงข้อมูลสั่ง dispatch ให้ reducer รู้ก่อนเพื่อจะแสดง loading
        dispatch({ type: 'LOAD_PHOTOID_PENDING' })
        return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`).then(results => {
            dispatch({ type: 'LOAD_PHOTOID_SUCCESS', payload: results.data })
        }).catch(err => {
            dispatch({ type: 'LOAD_PHOTOID_REJECTED', payload: err.message })
        })
    }
}