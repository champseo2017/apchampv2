import React, { Component } from 'react'
import Link from 'next/link';

const Album = (props) => {
        const {data} = props
        return (
            <React.Fragment>
                <h3>
                <Link as={`/photo/${data.id}`} href={`/photo?id=${data.id}`}>{data.title}</Link>
                </h3>
            </React.Fragment>
        )
}

export default Album