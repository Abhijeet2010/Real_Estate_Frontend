import Chat from "../../components/chat/Chat";
import List from "../../components/MyList/MyList";
import "./profilepage.scss";

const ProfilePage = () => {
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
              Avatar: <img src="./user1.webp" alt="user-icon" />
            </span>{" "}
            <span>
              User-name: <b>John Doe </b>
            </span>{" "}
            <span>
              E-mail: <b>johndoe@gmail.com</b>{" "}
            </span>
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
