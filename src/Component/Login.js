import React from 'react'
import './index.css'
import {useHistory} from 'react-router-dom'

function Login() {
    const history = useHistory();
    return (
        <div style={{display:'flex',flexDirection: 'column',padding:'10px'}}>
        <div className="login-wrapper">
            <form action="" className="form">
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" name="loginUser" id="loginUser" required />
                    <label for="loginUser">User Name</label>
                </div>
                <div className="input-group">
                    <input type="password" name="loginPassword" id="loginPassword" required />
                    <label for="loginPassword">Password</label>
                </div>
                <input type="submit" onClick={()=>{
                    history.push('/Home')
                }} value="Login" className="submit-btn" />
                <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
            </form>

            <div id="forgot-pw">
                <form action="" className="form">
                    <a href="/" className="close">&times;</a>
                    <h2>Reset Password</h2>
                    <div className="input-group">
                        <input type="email" name="email" id="email" required />
                        <label for="email">Email</label>
                    </div>
                    <input type="submit" value="Submit" className="submit-btn" />
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
