import React, { useState, useEffect } from 'react'
import Photo from './Photo'

 const PhotoList = (props) => {
        const {data} = props
        return (
            <React.Fragment>
                <Photo data={data}/>
            </React.Fragment>
        )
}

export default PhotoList