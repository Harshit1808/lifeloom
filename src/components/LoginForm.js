// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [activeButton, setActiveButton] = useState('login');

//   const handleButtonClick = (button) => {
//     setActiveButton(button);
//   };

//   const loginForm = (
//     <div style={{ textAlign: 'center' }}>
//       <h3>Login into your account</h3>
//       <form style={{ margin: 'auto', maxWidth: '300px' }}>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="email"
//             placeholder="Email"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="password"
//             placeholder="Password"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <button
//             type="button"
//             style={{
//               padding: '0px',
//               borderRadius: '5px',
//               color: '#fff',
//               border: 'none',
//               color: "#0EC3EB",
//               fontOpacity: "90%",
//               background: 'none'
//             }}
//           >
//             Forgot Password
//           </button>
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           Don't have an account?{' '}
//           <button
//             type="button"
//             style={{
//               color: 'black',
//               border: 'none',
//               background: 'none',
//               cursor: 'pointer',
//               fontSize: "15px"
//             }}
//             onClick={() => handleButtonClick('signup')}
//           >
//             Sign Up
//           </button>
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             borderRadius: '5px',
//             background: '#0EC3EB',
//             opacity: "90%",
//             color: '#fff',
//             border: 'none',
//             marginBottom: '15px'
//           }}
//         >
//           Login & Continue
//         </button>
//         <div>
//           <button
//             type="button"
//             style={{
//               width: '80%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: '#FFFFFF',
//               color: 'grey',
//               marginBottom: '15px',
//               border: "1px solid #E7E7E7"
//             }}
//           >
//             Sign In with Google
//           </button>
//         </div>
//       </form>
//     </div>
//   );

//   const signupForm = (
//     <div style={{ textAlign: 'center' }}>
//       <h3>Create your account</h3>
//       <form style={{ margin: 'auto', maxWidth: '300px' }}>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="email"
//             placeholder="Email"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="password"
//             placeholder="Password"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             style={{
//               width: '100%',
//               padding: '10px',
//               borderRadius: '5px',
//               background: "#FFFFFF",
//               stroke: "#000000",
//               border: "1px solid #E7E7E7"
//             }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '10px',
//             borderRadius: '5px',
//             background: '#0EC3EB',
//             opacity: "90%",
//             color: '#fff',
//             border: 'none',
//             marginBottom: '15px'
//           }}
//         >
//           Sign Up
//         </button>
//         <div style={{ marginBottom: '15px' }}>
//           Already have an account?{' '}
//           <button
//             type="button"
//             style={{
//               color: 'black',
//               border: 'none',
//               background: 'none',
//               cursor: 'pointer',
//               fontSize: "15px"
//             }}
//             onClick={() => handleButtonClick('login')}
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div>
//       <div style={{ display: "flex", margin: "auto", maxWidth: "300px" }}>
//         <div style={{ flex: 1, textAlign: "center" }}>
//           <button
//             style={{
//               border: "none",
//               background: "none",
//               color: activeButton === 'login' ? '#0EC3EB' : 'black',
//               borderBottom: activeButton === 'login' ? '2px solid #0EC3EB' : 'none',
//             }}
//             onClick={() => handleButtonClick('login')}
//           >
//             Login
//           </button>
//         </div>
//         <div style={{ flex: 1, textAlign: "center" }}>
//           <button
//             style={{
//               border: "none",
//               background: "none",
//               color: activeButton === 'signup' ? '#0EC3EB' : 'black',
//               borderBottom: activeButton === 'signup' ? '2px solid #0EC3EB' : 'none',
//             }}
//             onClick={() => handleButtonClick('signup')}
//           >
//             Sign Up
//           </button>
//         </div>
//       </div>
//       <hr style={{ width: "300px" }} />
//       {activeButton === 'login' ? loginForm : signupForm}
//     </div>
//   );
// };

// export default LoginForm;

import React, { use, useState, useEffect } from 'react';
// Adjust the import paths according to your project structure
//import useAuth from '../../hooks/useAuth';
import { useAuth } from '../contexts/AuthContext';
import AuthService from "../../services/authService";
//import GoogleSignIn from './googleSignin';
import LoginButton from './loginapi';
//import { gapi } from 'gapi-script';
import GoogleOAuth from './Googleoauth';
const clientId = '457435363093-kiipu69vm2o0t6jt9orr3c28oc8gs2ka.apps.googleusercontent.com';

const LoginForm = () => {

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "https://www.googleapis.com/auth/userinfo.email",
  //     })
  //   }
  //   gapi.load('client:auth2', start);
  // })

  const { login, errors, loading } = useAuth();
  console.log("errors", errors);
  console.log("loading", loading);
  console.log("login", login);
  //const { login } = useAuth();
  const [activeButton, setActiveButton] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setError(null); // Clear error when switching forms
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await AuthService.login({ email, password });
      console.log("Login response:", response);

      if (response && response.data) {
        const { accessToken, refreshToken, user } = response.data;
        console.log("User:", user);
        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);

        if (user && accessToken && refreshToken) {
          login(user); // Save user data to context
          // if (user.roles.includes("user")) {
          //   router.replace("/");
          // }
        } else {
          throw new Error("Invalid response structure");
        }
      } else {
        throw new Error("Invalid response data");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);
        console.error("Error response headers:", err.response.headers);
      }
      setError('Invalid credentials, please try again.');
    }
  };

  const handleLoginSuccess = (response) => {
    console.log('Login Success: currentUser:', response);
    //setUser(response.profileObj);
  };

  const handleSuccess = async (response) => {
    try {
      console.log('Login Success:', response);
      const { credential } = response;

      // Send the response token to your backend for verification
      const res = await fetch('http://localhost:4000/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credential }),
      });

      if (!res.ok) {
        throw new Error('Failed to verify token with backend');
      }

      const data = await res.json();
      console.log('Backend Response:', data);

      // Handle user data (e.g., save to state, redirect, etc.)
      // Example: save token to localStorage and update state
      localStorage.setItem('token', data.token);
      // Update state with user info if needed
    } catch (error) {
      console.error('Error during handleSuccess:', error);
      // Optionally, display an error message to the user
    }
  };

  const handleFailure = (error) => {
    console.error('Login Failed:', error);
    // Optionally, display an error message to the user
  };


  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const password1 = password;
    const password2 = confirmPassword;
    setError(null);
    // try {
    //   const response = await AuthService.register({ fullName, email, phoneNumber, password1, password2 }); // Assuming AuthService has a signup method
    //   const { accessToken, refreshToken, user } = response.data;
    //   console.log("Access Token register:", accessToken, user);
    //   //login(accessToken, refreshToken);
    // } catch (err) {
    //   setError('Signup failed, please try again.');
    // }
    try {
      const response = await AuthService.register({ fullName, email, phoneNumber, password1, password2 }); // Assuming AuthService has a signup method
      console.log("Login response:", response);

      if (response && response.data) {
        const { accessToken, refreshToken, user } = response.data;
        console.log("User:", user);
        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);

        if (user && accessToken && refreshToken) {
          login(user); // Save user data to context
          // if (user.roles.includes("user")) {
          //   router.replace("/");
          // }
        } else {
          throw new Error("Invalid response structure");
        }
      } else {
        throw new Error("Invalid response data");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);
        console.error("Error response headers:", err.response.headers);
      }
      setError('Invalid credentials, please try again.');
    }
  };

  const loginForm = (
    <div style={{ textAlign: 'center' }}>
      <h3>Login into your account</h3>
      <form style={{ margin: 'auto', maxWidth: '300px' }} onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <button
            type="button"
            style={{
              padding: '0px',
              borderRadius: '5px',
              color: '#0EC3EB',
              border: 'none',
              fontOpacity: "90%",
              background: 'none'
            }}
          >
            Forgot Password
          </button>
        </div>
        <div style={{ marginBottom: '15px' }}>
          Dont have an account?{' '}
          <button
            type="button"
            style={{
              color: 'black',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: "15px"
            }}
            onClick={() => handleButtonClick('signup')}
          >
            Sign Up
          </button>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            background: '#0EC3EB',
            opacity: "90%",
            color: '#fff',
            border: 'none',
            marginBottom: '15px'
          }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login & Continue'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        {/* <div>
          <button
            type="button"
            style={{
              width: '80%',
              padding: '10px',
              borderRadius: '5px',
              background: '#FFFFFF',
              color: 'grey',
              marginBottom: '15px',
              border: "1px solid #E7E7E7"
            }}
          >
            Sign In with Google
          </button>
        </div> */}
        <div>
          <h1>Sign In</h1>
          <GoogleOAuth onSuccess={handleLoginSuccess} />
        </div>
        {/* <GoogleSignIn onSuccess={handleSuccess} onFailure={handleFailure} /> */}
        {/* <LoginButton onSuccess={handleSuccess} onFailure={handleFailure} /> */}
      </form>
    </div>
  );

  const signupForm = (
    <div style={{ textAlign: 'center' }}>
      <h3>Create your account</h3>
      <form style={{ margin: 'auto', maxWidth: '300px' }} onSubmit={handleSignup}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              background: "#FFFFFF",
              stroke: "#000000",
              border: "1px solid #E7E7E7",
              color: "black"
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            background: '#0EC3EB',
            opacity: "90%",
            color: '#fff',
            border: 'none',
            marginBottom: '15px'
          }}
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {errors && <p style={{ color: 'red' }}>{errors}</p>}
        <div style={{ marginBottom: '15px' }}>
          Already have an account?{' '}
          <button
            type="button"
            style={{
              color: 'black',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: "15px"
            }}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", margin: "auto", maxWidth: "300px" }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <button
            style={{
              border: "none",
              background: "none",
              color: activeButton === 'login' ? '#0EC3EB' : 'black',
              borderBottom: activeButton === 'login' ? '2px solid #0EC3EB' : 'none',
            }}
            onClick={() => handleButtonClick('login')}
          >
            Login
          </button>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <button
            style={{
              border: "none",
              background: "none",
              color: activeButton === 'signup' ? '#0EC3EB' : 'black',
              borderBottom: activeButton === 'signup' ? '2px solid #0EC3EB' : 'none',
            }}
            onClick={() => handleButtonClick('signup')}
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* <div className="App">
      <h1>Sign In with Google</h1>
      <GoogleSignIn onSuccess={handleSuccess} onFailure={handleFailure} />
    </div> */}
      <hr style={{ width: "300px" }} />
      {activeButton === 'login' ? loginForm : signupForm}
    </div>
  );
};

export default LoginForm;

