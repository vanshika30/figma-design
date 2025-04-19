import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Dashboard.css';
import { FaCompass, FaBolt, FaExclamationTriangle, FaQuestionCircle, FaMemory, FaUserEdit, FaGlobe, FaMicrophone, FaSmile, FaPaperclip, FaArrowCircleRight } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    'Create Html Game Environment...',
    'Apply To Leave For Emergency',
    'What Is UI/UX Design?',
    'Create POS System',
    'What is UX Audit?',
    'How Chat GPT Work?',
    'Create Landing App Name',
    'Operator Grammar Types',
    'Aim Stoks For Binary DPA'
  ];

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };


  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="app-title">CHAT A.I+</h2>
        <button className="new-chat" onClick={() => setSelectedTopic(null)}>+ New chat</button>

        <ul className="topic-list">
          {topics.map((topic, index) => (
            <li
              key={index}
              onClick={() => handleTopicClick(topic)}
              className={selectedTopic === topic ? 'active-topic' : ''}
            >
              {topic}
            </li>
          ))}
        </ul>

        {/* Profile Section at the Bottom */}
        <div className="sidebar-footer">
          <div className="profile-info">
            <img src="https://i.pravatar.cc/200" alt="Profile" className="profile-img" />
            <span className="username">John Doe</span>
          </div>
          <div className="logout-tooltip">
            <FaSignOutAlt className="logout-icon" onClick={handleLogout} />
            <span className="tooltip-text">Logout</span>
          </div>
        </div>
      </div>

      <div className="dashboard-main">
        {selectedTopic ? (
          <div className="chat-panel card">
            <div className="chat-header"><h2>{selectedTopic}</h2></div>
            <div className="chat-body">
              <div className="chat-message user">
                <div className="bubble user-bubble">
                  What is UX Audit?
                  <span className="timestamp">User</span>
                </div>
              </div>
              <div className="chat-message ai">
                <div className="bubble ai-bubble">
                  A <b>UX audit</b> (User Experience audit) is a process where a digital product—like a website, mobile app, or software—is evaluated to identify usability issues and areas for improvement in the user experience.<br />
                  <p>
                    <h3>🛠️ What it Involves:</h3><br />
                    <b>Heuristic Evaluation</b>: Checking the product against established usability principles.<br /><br />

                    <b>User Flow Analysis</b>: Looking at how users navigate and identifying friction points.<br /><br />

                    <b>Accessibility Checks</b>: Making sure the product works for people with disabilities.<br /><br />

                    <b>Analytics Review</b>: Examining data (e.g. drop-off rates, bounce rates) to see where users struggle.<br /><br />

                    <b>Competitor Benchmarking</b>: Comparing your product with competitors for best practices.<br /><br />
                  </p>
                  <p>
                    <h3>🔍 Typical Outcomes:</h3>
                    A report highlighting:
                    <ul>
                      <li>UX issues</li><br />

                      <li>Suggestions for improvement</li><br />

                      <li>Visual/UI inconsistencies</li><br />

                      <li>Prioritized recommendations</li><br />
                    </ul>
                  </p>
                  <p>
                    <h3>🧑‍💻 Why It’s Done:</h3>
                    <ul>
                      <li>Improve conversion rates</li><br />

                      <li>Enhance user satisfaction</li><br />

                      <li>Reduce support tickets</li><br />

                      <li>Make redesigns more strategic and data-driven</li><br />
                    </ul></p>
                  It’s basically a health check for your product’s user experience. Want an example UX audit checklist or template?
                  <span className="timestamp">AI</span>
                </div>
              </div>
            </div>
            <div className="chat-input-bar">
              <FaSmile className="icon" />
              <FaPaperclip className="icon" />
              <input type="text" placeholder="Type your message..." />
              <FaMicrophone className="icon" />
              <button className="send-button">
                <FaArrowCircleRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="intro-section">
            <div className="intro-card card">
              <div className="greeting-message">
                <h1>Good day! How may I assist you today?</h1>
              </div>
              <div className="tiles-wrapper">
                <div className="tile-column-left">
                  <div className="tile-left">
                    <div className="tile-header">
                      <FaCompass />
                      <h3>Explore</h3>
                    </div>
                    <p>Learn how to use chatbot platforms for your needs</p>
                  </div>
                  <div className="tile-left">
                    <div className="tile-header">
                      <FaBolt />
                      <h3>Capabilities</h3>
                    </div>
                    <p>How much capable chatbot is to fulfill your needs</p>
                  </div>
                  <div className="tile-left">
                    <div className="tile-header">
                      <FaExclamationTriangle />
                      <h3>Limitation</h3>
                    </div>
                    <p>How much capable chatbot to fulfill your needs</p>
                  </div>
                </div>
                <div className="tile-grid-right">
                  <div className="tile">
                    <div className="tile-header">
                      <FaQuestionCircle />
                      <h3>"Explain"</h3>
                    </div>
                    <p>Quantum computing in simple terms</p>
                    <div className="arrow">→</div>
                  </div>
                  <div className="tile">
                    <div className="tile-header">
                      <FaGlobe />
                      <h3>"How to"</h3>
                    </div>
                    <p>Make a search engine platform like Google</p>
                    <div className="arrow">→</div>
                  </div>
                  <div className="tile">
                    <div className="tile-header">
                      <FaMemory />
                      <h3>"Remember"</h3>
                    </div>
                    <p>Quantum computing in simple terms</p>
                    <div className="arrow">→</div>
                  </div>
                  <div className="tile">
                    <div className="tile-header">
                      <FaUserEdit />
                      <h3>"Allows"</h3>
                    </div>
                    <p>User to provide follow-up corrections</p>
                    <div className="arrow">→</div>
                  </div>
                  <div className="tile">
                    <div className="tile-header">
                      <FaExclamationTriangle />
                      <h3>"May"</h3>
                    </div>
                    <p>Occasionally generate incorrect information</p>
                    <div className="arrow">→</div>
                  </div>
                  <div className="tile">
                    <div className="tile-header">
                      <FaGlobe />
                      <h3>"Limited"</h3>
                    </div>
                    <p>Knowledge of world and events after 2021</p>
                    <div className="arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="chat-input-bar">
                <FaSmile className="icon" />
                <FaPaperclip className="icon" />
                <input type="text" placeholder="Type your message..." />
                <FaMicrophone className="icon" />
                <button className="send-button">
                  <FaArrowCircleRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
