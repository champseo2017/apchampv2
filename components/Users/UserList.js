import React, { useState, useEffect  } from 'react'
import User from './User'

const UserList = (props) => {
        const {data} = props
        return (
            <React.Fragment>
                {data && data.map(e=>{
                    return (
                        <User data={e} key={e.id}/>
                    )
                })}
            </React.Fragment>
        )
}

export default UserList