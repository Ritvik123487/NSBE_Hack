import React, {useState} from "react";
import useToken from "../hooks/useToken";
import "./Login.css"

import {fetchData, putData} from '../utils/AWSFunctions';

const loginUser = async (credentials) => {
    return fetchData('users', credentials)
}

const Login = (props) => {
    const {setToken} = props
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    return(
<div>



    <div class="grid-container2">
        <div class="top-row2">
            <h1>Please Log In</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div class="grid-item2">
                    <label>
                        <p>Username</p>
                            <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
            </div>
            <div class="grid-item2">
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
            </div>
            <div class="grid-item4">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>

</div>
    )
}

export default Login