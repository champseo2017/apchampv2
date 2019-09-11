import React, { Component } from 'react'
import Link from 'next/link';

const Album = (props) => {
        const {data} = props
        let nametitle = data.title
        let replacenametitle = nametitle.replace(/[^A-Za-z0-9]/g,"-")
        return (
            <React.Fragment>
                <h3>
                <Link as={`/photo/${data.id}/${replacenametitle}`} href={`/photo?id=${data.id}&title=${data.title}`}>{data.title}</Link>
                </h3>
            </React.Fragment>
        )
}

export default Album