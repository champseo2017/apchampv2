import React, { Component } from 'react'
import Album from './Album'

const AlbumList = (props) => {
        const {data} = props
        return (
            <React.Fragment>
                {data && data.map(e=>{
                    return (
                        <Album data={e} key={e.id}/>
                    )
                })}
            </React.Fragment>
        )
}

export default AlbumList