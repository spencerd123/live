import React, { useState} from 'react';
import Axios from 'axios'
import '../App.css'

function CreateUser() {

    const [firstName, setFirstName] = useState("");
    const [sport, setSport] = useState("");
    const [userBio, setUserBio] = useState("");

    const submitPost = () => {
        Axios.post('http://localhost:3002/api/create', { firstName: firstName, sport: sport, userBio: userBio })
    }

    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>First Name: </label>
                <input type="userBio" onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <label>Sport: </label>
                <input type="userBio" onChange={(e) => {
                    setSport(e.target.value)
                }} />
                <label>Looking to work on: </label>
                <userBioarea
                    onChange={(e) => {
                        setUserBio(e.target.value)
                    }}
                ></userBioarea>
                <button onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreateUser;