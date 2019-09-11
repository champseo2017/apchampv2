import React, { useState, useEffect } from 'react'
import Layout from "../components/Layout";
import { connect } from 'react-redux'
import {
    Breadcrumb,
    Icon
} from 'antd';
import { useRouter } from 'next/router'
import { loadUsers } from '../redux/action/userAction'
import Oops from '../components/Oops'
import dynamic from "next/dynamic";
const UserList = dynamic(import("../components/Users/UserList"), {
    ssr: false
});

const User = (props) => {
    
    const router = useRouter()

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then(function (registration) {
                    console.log('SW registered: ', registration)
                }).catch(function (registrationError) {
                console.log('SW registration failed: ', registrationError)
                })
            })
        }
        props.loadUsers()
    }, [])

    const renderuser = () => {
        if ((props.about == router.pathname) && "/user") {
            return <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Icon type="user" />
                </Breadcrumb.Item>
            </Breadcrumb>
        }
    }
    let dataUsers = null
    if (!props.users) {
        return null;
    } else {
        dataUsers = props.users
    }

    if(dataUsers.isRejected){
        return <Layout><div style={{padding:"10%"}}><Oops /></div></Layout>
    }
    return (
        <Layout>
            <div style={{ padding: "10px" }}>
                {renderuser()}
            </div>
            <h2>Album Per User</h2>
            {dataUsers.isLoading && <div>Loading...</div>}
            <UserList data={dataUsers.data} />
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        about: state.Navbarreducers.User,
        users: state.userReducers.users
    };
}

const mapDispatchToProps = {
    loadUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(User)