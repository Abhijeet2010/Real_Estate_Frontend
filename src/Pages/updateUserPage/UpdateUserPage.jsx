import { useContext, useState } from "react";
import "./updateUserPage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest.js";
import { useNavigate } from "react-router-dom";
import CloudinaryUploadWidget from "../../components/uploadWidget/UploadWidget.jsx";

const UpdateUserPage = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  // const [error, setError] = useState(false);

  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(false);
    // setLoading(true);
    try {
      const formData = new FormData(e.target);
      const { username, email, password, confirm_password } =
        Object.fromEntries(formData);

      if (password !== confirm_password) {
        throw new Error("Both password need to be same");
      }
      const res = await apiRequest.put("/user/update/" + currentUser.id, {
        username,
        email,
        password,
        avatar,
      });
      console.log(res.data.data);
      updateUser(res.data.data);
      navigate("/profile");

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      // setError(error.message);
    }
  };

  return (
    <div className="updateUserPage">
      <div className="updateUserContainer">
        <div className="wrapper">
          <h1>Update User Info</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={currentUser.username}
              placeholder="Please enter new username"
            />

            <input
              type="email"
              name="email"
              id="email"
              defaultValue={currentUser.email}
              placeholder="Please enter new email"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Please enter password"
            />

            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Please confirm your password"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="imgContent">
        <img src={avatar || "/no-avatar.png"} alt="" />
        <CloudinaryUploadWidget
          uwConfig={{
            cloudName: "abhijeet2010",
            uploadPreset: "real-estate",
            multiple: false,
            folder: "avatar",
            maxImageFileSize: 200000,
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
};

export default UpdateUserPage;
