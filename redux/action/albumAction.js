import axios from 'axios'
export const loadAlbumid = (userID) => {
    return (dispatch) => {
        // ก่อนดึงข้อมูลสั่ง dispatch ให้ reducer รู้ก่อนเพื่อจะแสดง loading
        dispatch({ type: 'LOAD_ALBUMID_PENDING' })
        return axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`).then(results => {
            dispatch({ type: 'LOAD_ALBUMID_SUCCESS', payload: results.data })
        }).catch(err => {
            dispatch({ type: 'LOAD_ALBUMID_REJECTED', payload: err.message })
        })
    }
}