import React, { useState, useEffect } from 'react'
import Link from 'next/link';

const User = (props) => {
    const { data } = props
    //let nametitle = data.name
    //let replacenametitle = nametitle.replace(/[^A-Za-z0-9]/g,"")
    return (
        <div>
            <h3>
                <Link as={`/album/${data.id}`} href={`/album?id=${data.id}`}>{data.name}</Link></h3>
        </div>
    )
}

export default User