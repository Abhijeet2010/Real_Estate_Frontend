import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Message List</h1>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetu...</p>
        </div>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>

        <div className="mesasge">
          <img src="./user1.webp" alt="chat-user-icon" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet, consectetur...</p>
        </div>
      </div>

      {chat && (
        <div className="messageBox">
          <div className="top">
            <div className="user">
              <img src="./user1.webp" alt="" />
              John Doe
              <span className="close" onClick={() => setChat(null)}>
                X
              </span>
            </div>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage ">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet abhijeet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>

            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>

            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
