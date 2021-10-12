import "./login.css";
import {useRef, useContext} from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";

export default function Login() {

    const email = useRef();
    const password = useRef();
    const {isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    };
    
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">OnlyFriends</h3>
                    <span className="loginDesc">Connect with friends without your data getting sold.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                        <input placeholder="Password" type="password"  required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (<CircularProgress color="white"/>) : ("Log In")}
                        </button>
                            <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create New Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
