import React, { useState } from 'react';


function App() {
    const [activeButton, setActiveButton] = useState('login');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const loginForm = (
        <div style={{ textAlign: 'center' }}>
            <h3>Login into your account</h3>
            <form style={{ margin: 'auto', maxWidth: '300px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7"}} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7" }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <button type="button" style={{ padding: '0px', borderRadius: '5px', color: '#fff', border: 'none', color:"#0EC3EB", fontOpacity:"90%", background:'none' }}>Forgot Password</button>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    Dont have an account? <button type="button" style={{ color: 'black', border: 'none', background: 'none', cursor: 'pointer', fontSize:"15px" }} onClick={() => handleButtonClick('signup')}>Sign Up</button>
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#0EC3EB', opacity:"90%", color: '#fff', border: 'none', marginBottom: '15px' }}>Login & Continue</button>
                <div>
                <button type="button" style={{ width: '80%', padding: '10px', borderRadius: '5px', background: '#FFFFFF', color: 'grey', marginBottom: '15px', border:"1px solid #E7E7E7" }}>Sign In with Google</button>
                </div>
            </form>
        </div>
    );

    const signupForm = (
        <div style={{ textAlign: 'center' }}>
            <h3>Create your account</h3>
            <form style={{ margin: 'auto', maxWidth: '300px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7"}} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7"}} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7"}} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7" }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input type="password" placeholder="Confirm Password" style={{ width: '100%', padding: '10px', borderRadius: '5px', background:"#FFFFFF", stroke:"#000000", border:"1px solid #E7E7E7"}} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#0EC3EB', opacity:"90%", color: '#fff', border: 'none', marginBottom: '15px' }}>Sign Up</button>
                <div style={{ marginBottom: '15px' }}>
                    Already have an account? <button type="button" style={{ color: 'black', border: 'none', background: 'none', cursor: 'pointer', fontSize:"15px" }} onClick={() => handleButtonClick('login')}>Login</button>
                </div>
            </form>
        </div>
    );

    return (
        <div style={{ textAlign: 'center', marginTop:"100px"}}>
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
            <hr style={{ width: "300px" }} />
            {activeButton === 'login' ? loginForm : signupForm}
        </div>
    );
}

export default App;

