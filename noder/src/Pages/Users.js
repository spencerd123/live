
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import CreateUser from '../Support/CreateUser.js'
import '../App.css'

function Users() {

    const [userList, setUserList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("http://localhost:3306/api/get").then((data) => {
            setUserList(data.data)
        });
    }, [])

    const LikeUser = (id) => {
        Axios.user(`http://localhost:3306/api/like/${id}`).then((response) => {
            alert("you liked a user")
        })
    }
    return (

        <div className="MainPage">
            <CreateUser />
            <div className="UserContainer">
                {userList.map((val, key) => {
                    return (
                        <div className="User" >
                            <h1 className="user-title" onClick={() => (navigate(`/user/${val.id}`))}>{val.FirstName}</h1>
                            <p>{val.user_text.length > 300 ? val.user_text.substring(0, 300) + " ..." : val.user_text}</p>
                            <h4>{val.sport}</h4>
                            <button className="like_btn" onClick={(() => LikeUser(val.id))}>Like</button>

                            <h5>Likes: {val.likes}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users;

