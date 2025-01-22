import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "../Components/Dashboard";
import TopBar from "../Components/TopBar";

const Home = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        removeCookie("token");
        window.location.href = "https://stockera-2bc33.web.app/login";
        return;
      }

      try {
        const { data } = await axios.post(
          "https://stockera-backend.onrender.com/api/verify-cookie",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        console.log(user);

        if (status) {
          // Check if the toast has already been shown
          const hasShownToast = localStorage.getItem("hasShownToast");

          if (!hasShownToast) {
            toast(`Hello ${user.username}`, {
              toastId: "user-welcome",
              position: "top-right",
            });

            // Mark the toast as shown
            localStorage.setItem("hasShownToast", "true");
          }

          setUsername(user.username); // Set username for display
        } else {
          removeCookie("token");
          window.location.href = "https://stockera-2bc33.web.app/login";
        }
      } catch (err) {
        console.error("Error verifying cookie:", err);
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);


  const Logout = () => {
    removeCookie("token");
    // navigate("/signup");
    window.location.href = "https://stockera-2bc33.web.app/login";
  };


  return (
    <>
      <TopBar user={username} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;