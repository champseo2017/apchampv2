import React, { useState, useEffect  } from 'react'
import User from './User'

const UserList = (props) => {
        const {data} = props
        return (
            <React.Fragment>
                <h2>Album Per User</h2>
                {data && data.map(e=>{
                    return (
                        <User data={e} key={e.id}/>
                    )
                })}
            </React.Fragment>
        )
}

export default UserList