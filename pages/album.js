import React, { useState, useEffect } from 'react'
import Oops from '../components/Oops'
import { connect } from 'react-redux'
import { loadAlbumid } from '../redux/action/albumAction'
import { loadUsers } from '../redux/action/userAction'
import Layout from "../components/Layout";
import { useRouter } from 'next/router'
import AlbumList from '../components/Albums/AlbumList'

const Album = (props) => {

    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        props.loadAlbumid(id)
        props.loadUsers()
    }, [])

    let dataAlbumsid = null
    let dataUsers = null

    if (!props.albumsid) {
        return null;
    } else {
        dataAlbumsid = props.albumsid
    }

    if (!props.users) {
        return null;
    } else {
        dataUsers = props.users
    }

   
      if(dataAlbumsid.isRejected){
            return <Layout><div style={{padding:"10%"}}><Oops /></div></Layout>
      }

    
      
    return (
        <Layout>
            <React.Fragment>
                {dataAlbumsid.isLoading && <div>Loading...</div>}
                {dataUsers.data && dataUsers.data.map(e => {
                    let userid = parseInt(id, 10);
                    if (e.id === userid) {
                        return <h1>Album Photos Of : {e.name}</h1>
                    }
                })}
                <AlbumList data={dataAlbumsid.data}/>
            </React.Fragment>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducers.users,
        albumsid: state.albumsReducers.albums
    };
}

const mapDispatchToProps = {
    loadUsers,
    loadAlbumid
};

export default connect(mapStateToProps, mapDispatchToProps)(Album)