import React from 'react';

const SignUpPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <form style={{ margin: 'auto', maxWidth: '300px' }}>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Confirm Password" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: '#28a745', color: '#fff', border: 'none', marginBottom: '15px' }}>Sign Up</button>
        <div style={{ marginBottom: '15px' }}>
          Already have an account? <button type="button" style={{ color: '#007bff', border: 'none', background: 'none', cursor: 'pointer' }}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
