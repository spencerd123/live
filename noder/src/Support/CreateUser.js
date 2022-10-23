import React, { useState} from 'react';
import Axios from 'axios'
import '../App.css'

function CreateUser() {

    const [firstName, setFirstName] = useState("");
    const [sport, setSport] = useState("");
    const [text, setText] = useState("");

    const submitPost = () => {
        Axios.post('http://localhost:3306/api/create', { firstName: firstName, sport: sport, text: text })
    }

    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>First Name: </label>
                <input type="text" onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <label>Sport: </label>
                <input type="text" onChange={(e) => {
                    setSport(e.target.value)
                }} />
                <label>Looking to work on: </label>
                <textarea
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                ></textarea>
                <button onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreateUser;