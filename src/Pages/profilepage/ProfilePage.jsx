import Chat from "../../components/chat/Chat";
import List from "../../components/MyList/MyList";
import "./profilepage.scss";
import apiRequest from "../../lib/apiRequest.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const response = await apiRequest.post("/auth/logout");

      if (response.status === 200) {
        updateUser(null);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="profilePage">
      <div className="userDetails">
        <div className="wrapper">
          <div className="title">
            <h2>My Profile</h2>
            <button> Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avatar:{" "}
              <img
                src={currentUser.avatar || "./no-avatar.png"}
                alt="user-icon"
              />
            </span>{" "}
            <span>
              User-name: <b>{currentUser.username} </b>
            </span>{" "}
            <span>
              E-mail: <b>{currentUser.email}</b>{" "}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>

          <hr />

          <div className="title">
            <h2>My List</h2>
            <button>Add New Post</button>
          </div>

          <List />

          <div className="title">
            <h2>Saved Profile</h2>
          </div>

          <List />
        </div>
      </div>
      <div className="chatDetails">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
