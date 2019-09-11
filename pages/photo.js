import React, { useState, useEffect } from 'react'
import Layout from "../components/Layout";
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { loadPhotoId } from '../redux/action/photoAction'
import { checkphotoerror } from '../redux/action/chackPhotoAction'
import { checkPhotoid } from '../redux/action/checkPhotosidAction'
import Oops from '../components/Oops'
import PhotoList from '../components/Photos/PhotoList'
import Error from "next/error";


const Photo = (props) => {

    const router = useRouter()
    const { id, title } = router.query
    let queryerror = router.asPath
    let queryurlarray = queryerror.split("/");
    let rawtitle = ''
    if (typeof queryurlarray[3] === "undefined") {
        rawtitle = queryurlarray[2]
    } else if (typeof queryurlarray[3] !== "undefined") {
        rawtitle = queryurlarray[3].replace(/[^A-Za-z0-9]/g, " ")
    }

    useEffect(() => {
        props.loadPhotoId(id)
        props.checkphotoerror(rawtitle)
        props.checkPhotoid(id)
    }, [])

    let photosData = null
    let photoerrorurl = null
    let photoiderror = null

    if (!props.photos) {
        return null
    } else {
        photosData = props.photos
    }

    if (!props.errorurlphoto) {
        return null
    } else {
        photoerrorurl = props.errorurlphoto
    }

    if(!props.photoiderror){
        return null
    }else{
        photoiderror = props.photoiderror
    }

    if (photosData.isRejected) {
        return <Layout><div style={{ padding: "10%" }}><Oops /></div></Layout>
    } else if (photoerrorurl.isRejected) {
        return <Layout><Error statusCode={404} /></Layout>
    }else if (photoiderror.isRejected) {
        return <Layout><Error statusCode={404} /></Layout>
    }

    return (
        <Layout>
            <React.Fragment>
                <h1>Photos by | {title}</h1>
                {photosData.isLoading && <div>Loading...</div>}
                <PhotoList data={photosData.data} />
            </React.Fragment>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.photoReducers.photos,
        errorurlphoto: state.checkphotoreducers.photoerror,
        photoiderror: state.checkReducersidphoto.photoiderror
    };
}

const mapDispatchToProps = {
    loadPhotoId,
    checkphotoerror,
    checkPhotoid
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo)