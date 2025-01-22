import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://stockera-backend.onrender.com/login",
                { email, password },
                { withCredentials: true }
            );


            const { message, success, verified, user } = data;
            console.log(user);

            if (success) {
                console.log("Login successful:", data);
                handleSuccess(message);
                setTimeout(() => {
                    // navigate("/");
                    window.location.href = "https://stockera-dashboard.web.app";
                    // navigate("https://stockera-dashboard.web.app");

                }, 5000);
            } else if (verified == false) {
                setTimeout(() => {
                    navigate("/verify-email", { state: { email } });
                }, 1000);
                handleError(message);
            }
            else {
                handleError(message);
            }
        } catch (error) {
            console.error("Login error:", error);
            handleError("Login failed! Please check your credentials.");
        } finally {
            setEmail("");
            setPassword("");
        }
    };

    return (
        <>
            <div className="body">
                <div className="login-container">
                    <div className="login-box">
                        <h2>Welcome Back!</h2>
                        <p>Login to continue</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <button type="submit" className="login-button">
                                Login
                            </button>
                        </form>
                        <div className="signup-link">
                            Don’t have an account? <a href="/signup">Sign up here</a>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;