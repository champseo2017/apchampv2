import axios from 'axios'
export const checkphotoerror = (title) => {
  
    return (dispatch) => {
        // ก่อนดึงข้อมูลสั่ง dispatch ให้ reducer รู้ก่อนเพื่อจะแสดง loading
        dispatch({ type: 'LOAD_CHECKPHOTO_PENDING' })
        return axios.get(`https://jsonplaceholder.typicode.com/albums?title=${title}`).then(results => {
            dispatch({ type: 'LOAD_CHECKPHOTO_SUCCESS', payload: results.data[0].title })
        }).catch(err => {
            dispatch({ type: 'LOAD_CHECKPHOTO_REJECTED', payload: err.message })
        })
    }
}