import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import Axios from 'axios'
import '../App.css'

export default function User() {

let {UserID} = useParams();
const [user,setUser] = useState({})
const [title,setTitle] = useState("");

useEffect(()=>{
Axios.get(`http://localhost:3002/api/getFromId/${UserID}`).then((data)=>{
    console.log(data)
setUser({
        title: data.data[0].title,
         userText: data.data[0].user_text,
         userName: data.data[0].user_name,
         id:data.data[0].id
        });
 });

},[UserID]);

const deleteUser = (id) => {
    Axios.delete(`http://localhost:3002/api/delete/${UserID}`).then((response)=>{
        alert("you deleted a user")
    })
}


    return (
        <div className="User individual">
        <h1 className="user-title">{user.title}</h1>
          <p>{user.userText}</p>
          <h4>{user.userName}</h4>
          <button onClick={(() => deleteUser(user.id))}>X</button>
          
      </div>
    )
}