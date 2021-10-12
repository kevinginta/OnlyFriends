import "./register.css";
import {useRef} from "react";
import axios from "axios";
import {useHistory} from "react-router";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordConfirm.current.value !== password.current.value)
        {
            passwordConfirm.current.setCustomValidity("Passwords do not match!");
        }
        else
        {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("/auth/register", user);
                history.push("/login");
            }catch (err)
            {
                console.log(err);
            }
        }
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
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} className="loginInput" type="email"/>
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"/>
                        <input placeholder="Confirm Password" required ref={passwordConfirm} className="loginInput" type="password" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Already have an account? Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
