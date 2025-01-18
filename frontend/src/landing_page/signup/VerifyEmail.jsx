import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './VerifyEmail.css';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || ""; // Retrieve email passed from Signup page
    const [verificationCode, setVerificationCode] = useState("");

    useEffect(() => {
        if (!email) {
            navigate("/signup"); // Redirect back to signup if email is missing
        }
        console.log(location.state); // Log location state to see if email is passed correctly
    }, [email, navigate, location.state]);


    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:3002/verify-email", {
                email,
                verificationCode,
            });
            console.log(data);
            const { success, message } = data;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/login"); // Redirect to login page after successful verification
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.error("Error:", error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                handleError(error.response.data.message || "Error verifying email");
            } else if (error.request) {
                // The request was made but no response was received
                handleError("No response received from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                handleError("Error with Axios request");
            }
        }
    };


    return (
        <div className="body">
            <div className="form-container">
                <h2 className="form-title">Verify Your Email</h2>
                <form className="form" onSubmit={handleVerify}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            readOnly
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="verificationCode" className="form-label">Verification Code</label>
                        <input
                            type="text"
                            id="verificationCode"
                            name="verificationCode"
                            value={verificationCode}
                            placeholder="Enter the code sent to your email"
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="form-button">Verify</button>
                </form>
                <ToastContainer />
            </div>
        </div>

    );
};

export default VerifyEmail;
