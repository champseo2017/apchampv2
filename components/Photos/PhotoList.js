import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
const Photo = dynamic(import("./Photo"), {
    ssr: false
});

 const PhotoList = (props) => {
        const {data} = props
        return (
            <React.Fragment>
                <Photo data={data}/>
            </React.Fragment>
        )
}

export default PhotoList