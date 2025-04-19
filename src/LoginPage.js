import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      setMessage('❌ Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h2 className="brand-title">CHAT A.I+</h2>
        <h1>Learn, Discover &<br/>Automate in One Place.</h1>
        <div className="chat-box">
          <p className="chat-title">Create a chatbot gpt using python language what will be step for that</p>
          <div className="chat-response">
            <ol>
              <li><b>Install the required libraries:</b> Install the transformers library from Hugging Face.</li>
              <li><b>Load the pre-trained model:</b> Choose a GPT model suitable for your use-case.</li>
            </ol>
            <p>These are the basic steps to get started with a GPT chatbot in Python.</p>
          </div>
          <input type="text" className="chat-input" placeholder="Reply..." />
        </div>
      </div>
      <div className="right-panel">
        <div className="form-container">
          <h2>Sign up with free trial</h2>
          <p>Empower your experience, sign up for a free account today</p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email Address*"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password*"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="primary-btn">Get started free</button>
          </form>

          {message && <p style={{ marginTop: '10px', color: message.includes('Invalid') ? 'red' : 'green' }}>{message}</p>}

          <p className="login-link">
            Already have an account? <a href="#">Login</a>
          </p>

          <div className="or">Or better yet…</div>

          <button className="social-btn google">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="" />
            Continue with Google
          </button>
          <button className="social-btn apple">
            <img src="https://img.icons8.com/ios-filled/20/000000/mac-os.png" alt="" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
