import React, {useState} from "react";
import useToken from "../hooks/useToken";
import "./Signup.css"

import {fetchData, putData} from '../utils/AWSFunctions';

const signUpUser = async (credentials) => {
    return putData('users', credentials)
}

const Signup = (props) => {
    const {setToken} = props
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    

    const handleSubmit2 = async e => {
        e.preventDefault();
        await signUpUser({
            email,
            username,
            password,
            repeatPassword
        });
        const token = fetchData({
            username,
            password
        })
        setToken(token);
    }

    return(
        <div>
        


<div class="grid-container2_1">
        <div class="top-row2_1">
            <h1>Please Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit2}>
            <div class="grid-item2_1">
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
            </div>
            <div class="grid-item2_1">
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
            </div>

            <div class="grid-item2_1">
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
            </div>

            <div class="grid-item2_1">
                <label>
                    <p>Repeat your password</p>
                    <input type="password" onChange={e => setRepeatPassword(e.target.value)}/>
                </label>
            </div>


            <div class="grid-item4_1">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>



    )
}

export default Signup