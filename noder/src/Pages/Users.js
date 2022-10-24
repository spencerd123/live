
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import CreateUser from '../Support/CreateUser.js'
import '../App.css'
import http from '../http-common'
function Users() {

    const [userList, setUserList] = useState([]);

    const navigate = useNavigate(); 

    useEffect(() => {
        http.get("/get").then((data) => {
            console.log(data)
        });
    }, [])

    
    return (

        <div className="MainPage">
            <CreateUser />
            <div className="UserContainer">
                {userList.map((val, key) => {
                    return (
                        <div className="User" >
                            <h1 className="user-title" onClick={() => (navigate(`/user/${val.UserID}`))}>{val.FirstName}</h1>
                            <p>{val.UserBio.length > 300 ? val.UserBio.substring(0, 300) + " ..." : val.UserBio}</p>
                            <h4>{val.Sport}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;

