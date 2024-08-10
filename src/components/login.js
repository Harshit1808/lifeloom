import React from 'react';

const LoginPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <form style={{ margin: 'auto', maxWidth: '300px' }}>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <button type="button" style={{ padding: '10px', borderRadius: '5px', background: '#007bff', color: '#fff', border: 'none' }}>Forgot Password</button>
        </div>
        <div style={{ marginBottom: '15px' }}>
          Dont have an account? <button type="button" style={{ color: '#007bff', border: 'none', background: 'none', cursor: 'pointer' }}>Sign Up</button>
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#28a745', color: '#fff', border: 'none', marginBottom: '15px' }}>Login & Continue</button>
        <button type="button" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#ff5722', color: '#fff', border: 'none', marginBottom: '15px' }}>Sign In with Google</button>
      </form>
    </div>
  );
}

export default LoginPage;
