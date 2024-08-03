import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "/auth/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(response);
      if (response.status === 200) navigate("/login");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <div className="wrapper">
          <h1>Create a new account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Please Enter Username"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please Enter Email"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Please Enter Password"
            />

            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="imgContent">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
